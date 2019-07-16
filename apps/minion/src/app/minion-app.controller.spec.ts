import { Test, TestingModule } from '@nestjs/testing';

import { MinionAppController } from './minion-app.controller';
import { MinionAppService } from './minion-app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [MinionAppController],
      providers: [MinionAppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to minion!"', () => {
      const appController = app.get<MinionAppController>(MinionAppController);
      expect(appController.getData()).toEqual({message: 'Welcome to minion!'});
    });
  });
});
