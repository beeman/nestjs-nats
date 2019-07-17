import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
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

  @Post('event')
  event(@Req() req, @Body('data') data) {
    const requestData = {
      ip: req.ip,
      remoteAddress: req.connection.remoteAddress,
    }
    console.log(data)
    return this.masterAppService
      .event({ ...data, request: requestData })
      .pipe(tap(result => console.log('MasterAppController: event result', result)));
  }
}
