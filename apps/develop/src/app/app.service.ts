import { Injectable } from '@nestjs/common';
import { SlackService } from '../utils/slack.service';

@Injectable()
export class AppService {
  constructor(private slackService: SlackService) {}
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async otp(data: any) {
    this.slackService.send(
      `OTP for login: ${data.otp}\n access_token: ${data.access_token}`
    );
  }
}
