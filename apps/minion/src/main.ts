/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';

import { MinionAppModule } from './app/minion-app.module';
import { natsConfig } from '../../master/src/nats.config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(MinionAppModule, natsConfig);
  await app.listenAsync();

  console.log('minion listening');
  // const app = await NestFactory.create(AppModule);
  // const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  // const port = process.env.port || 3333;
  // await app.listen(port, () => {
  //   console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  // });
}

bootstrap();
