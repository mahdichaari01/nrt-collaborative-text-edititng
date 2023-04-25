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
      // const exchange = await this.rabbitMqService.createExchange("exchange","fanout",true);
      // const res = await this.rabbitMqService.createExchange("exchange");
      // await this.rabbitMqService
      log('lol');
      return 'lol';
    } catch (e) {
      console.log('Error creating the connect', e);
      throw new Error(e);
    }
    return userId;
  }
}
