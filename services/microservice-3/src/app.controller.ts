import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('__health')
  health(): string {
    return 'OK from m3';
  }
}
