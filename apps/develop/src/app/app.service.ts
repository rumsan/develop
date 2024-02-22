import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { exec } from 'child_process';
import { SlackService } from '../utils/slack.service';

@Injectable()
export class AppService {
  constructor(private slackService: SlackService) {}
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async otp(otpData: any) {
    const { data } = await axios.post(`${otpData.origin}/v1/auth/login`, {
      challenge: otpData.challenge,
      otp: otpData.otp,
    });
    exec(`echo -n "${data.data.accessToken}" | xclip -selection clipboard`);
    this.slackService.send(`OTP: ${otpData.otp}`);
    console.log(data.data.accessToken);
  }
}
