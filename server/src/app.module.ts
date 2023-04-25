import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionsModule } from './sessions/sessions.module';
import { RabbitMqManagementModule } from './rabbit-mq-management/rabbit-mq-management.module';

@Module({
  imports: [SessionsModule, RabbitMqManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
