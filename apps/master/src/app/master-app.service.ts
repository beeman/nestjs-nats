import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

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
}
