import { Controller, Get, Query } from '@nestjs/common';
import { tap } from 'rxjs/operators';

import { MasterAppService } from './master-app.service';

@Controller()
export class MasterAppController {
  constructor(private readonly masterAppService: MasterAppService) {}

  @Get()
  getData() {
    return this.masterAppService.getData();
  }

  @Get('sum')
  sum(@Query('digits') digits) {
    const data = digits.split(',').map(Number);
    console.log('MasterAppController: sum', data);
    return this.masterAppService
      .sum(data)
      .pipe(tap(result => console.log('MasterAppController: sum result', result)));
  }

  @Get('reverse')
  reverse(@Query('message') message) {
    return this.masterAppService
      .reverse(message)
      .pipe(tap(result => console.log('MasterAppController: reverse result', result)));
  }
}
