import { Test } from '@nestjs/testing';

import { MasterAppService } from './master-app.service';

describe('AppService', () => {
  let service: MasterAppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [MasterAppService],
    }).compile();

    service = app.get<MasterAppService>(MasterAppService);
  });

  describe('getData', () => {
    it('should return "Welcome to master!"', () => {
      expect(service.getData()).toEqual({message: 'Welcome to master!'});
    });
  });
});
