import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMqManagementModule } from './rabbit-mq-management/rabbit-mq-management.module';

@Module({
  imports: [RabbitMqManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
