import { Test, TestingModule } from '@nestjs/testing';
import { RabbitMqManagementService } from './rabbit-mq-management.service';

describe('RabbitMqManagementService', () => {
  let service: RabbitMqManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RabbitMqManagementService],
    }).compile();

    service = module.get<RabbitMqManagementService>(RabbitMqManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
