import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMqManagementModule } from './rabbit-mq-management/rabbit-mq-management.module';
import { SessionsModule } from './sessions/sessions.module';

@Module({
  imports: [SessionsModule, RabbitMqManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
