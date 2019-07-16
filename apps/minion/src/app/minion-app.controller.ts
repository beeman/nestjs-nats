import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { MinionAppService } from './minion-app.service';

@Controller()
export class MinionAppController {
  constructor(private readonly minionAppService: MinionAppService) {}

  @Get()
  getData() {
    return this.minionAppService.getData();
  }

  @MessagePattern({ cmd: 'sum' })
  sum(data: number[]): number {
    console.log('MinionAppController: sum', data);
    return this.minionAppService.sum(data);
  }

  @MessagePattern({ cmd: 'reverse' })
  reverse(message: string): string {
    console.log('MinionAppController: reverse', message);
    return this.minionAppService.reverse(message);
  }

}
