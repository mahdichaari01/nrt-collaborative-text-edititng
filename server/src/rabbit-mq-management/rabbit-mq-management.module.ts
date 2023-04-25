import { Module } from '@nestjs/common';
import { RabbitMqManagementService } from './rabbit-mq-management/rabbit-mq-management.service';

@Module({
  providers: [RabbitMqManagementService],
  exports: [RabbitMqManagementService],
})
export class RabbitMqManagementModule {}
