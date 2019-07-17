import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import Cloudevent from 'cloudevents-sdk';

@Injectable()
export class MasterAppService {

  constructor(
    @Inject('MATH_SERVICE') private readonly client: ClientProxy,
  ) {}

  getData(): { message: string } {
    return ({ message: 'Welcome to master!' });
  }

  sum(data: number[]): Observable<number> {
    return this.client.send<number>({ cmd: 'sum' }, data);
  }

  reverse(message: any): Observable<string> {
    return this.client.send<string>({ cmd: 'reverse' }, message);
  }

  event(data: any) {
    const event = new Cloudevent(Cloudevent.specs["0.2"]);

    const e = event
      .type('io.trilon.event')
      .source('urn:event:from:api/event')
      .data(data);

    console.log('data', data);
    console.log(e);

    return this.client.send< string>({ cmd: 'event' }, e);
  }
}
