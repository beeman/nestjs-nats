import { NestFactory } from '@nestjs/core';

import { MasterAppModule } from './app/master-app.module';
import { natsConfig } from './nats.config';

async function bootstrap() {
  const app = await NestFactory.create(MasterAppModule);

  app.connectMicroservice(natsConfig);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;

  await app.startAllMicroservicesAsync();
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
