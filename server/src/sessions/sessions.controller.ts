import { Controller, Inject, Post } from '@nestjs/common';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
  @Inject(SessionsService)
  private readonly sessionsService: SessionsService;

  @Post('')
  async connectToRabbitMq() {
    return await this.sessionsService.connectUser();
  }
}
