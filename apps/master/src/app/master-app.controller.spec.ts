import { Test, TestingModule } from '@nestjs/testing';

import { MasterAppController } from './master-app.controller';
import { MasterAppService } from './master-app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [MasterAppController],
      providers: [MasterAppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to master!"', () => {
      const appController = app.get<MasterAppController>(MasterAppController);
      expect(appController.getData()).toEqual({message: 'Welcome to master!'});
    });
  });
});
