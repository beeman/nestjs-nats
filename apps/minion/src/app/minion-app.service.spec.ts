import { Test } from '@nestjs/testing';

import { MinionAppService } from './minion-app.service';

describe('AppService', () => {
  let service: MinionAppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [MinionAppService],
    }).compile();

    service = app.get<MinionAppService>(MinionAppService);
  });

  describe('getData', () => {
    it('should return "Welcome to minion!"', () => {
      expect(service.getData()).toEqual({message: 'Welcome to minion!'});
    });
  });
});
