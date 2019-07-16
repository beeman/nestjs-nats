import { Module } from '@nestjs/common';

import { MinionAppController } from './minion-app.controller';
import { MinionAppService } from './minion-app.service';

@Module({
  imports: [],
  controllers: [MinionAppController],
  providers: [MinionAppService],
})
export class MinionAppModule {}
