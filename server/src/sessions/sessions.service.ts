import { Inject, Injectable } from '@nestjs/common';
import { log } from 'console';
import { RabbitMqManagementService } from 'src/rabbit-mq-management/rabbit-mq-management/rabbit-mq-management.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class SessionsService {
  @Inject(RabbitMqManagementService)
  private readonly rabbitMqService: RabbitMqManagementService;

  async connectUser() {
    const userId = uuid();
    try {
      await this.rabbitMqService.createQueueAndBindToExchange("exchange",userId)
      return {userId , exchangeName :"exchange",queueName:userId}
    } catch (e) {
      console.log('Error creating Queue', e);
      throw new Error("Error creating Queue");
    }
  }
}
