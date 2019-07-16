import { Module } from '@nestjs/common';

import { MasterAppController } from './master-app.controller';
import { MasterAppService } from './master-app.service';
import { ClientsModule } from '@nestjs/microservices';
import { natsConfig } from '../nats.config';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'MATH_SERVICE',
      ...natsConfig,
    }])
  ],
  controllers: [MasterAppController],
  providers: [MasterAppService]
})
export class MasterAppModule {}
