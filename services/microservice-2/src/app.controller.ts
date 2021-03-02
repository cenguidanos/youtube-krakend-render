import { Controller, Get, Req } from '@nestjs/common'
import type { Request } from 'express'

@Controller()
export class AppController {
  private counter = 0

  constructor() {}

  @Get('__health')
  health(@Req() req: Request): string {
    this.counter += 1

    console.log(`Path: ${req.url} :: ${this.counter}`)

    return 'OK from m2'
  }
}
