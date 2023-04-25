import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { RabbitMqManagementModule } from 'src/rabbit-mq-management/rabbit-mq-management.module';

@Module({
  providers: [SessionsService],
  controllers: [SessionsController],
  imports: [RabbitMqManagementModule],
})
export class SessionsModule {}
