import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local'],
      ignoreEnvFile: process.env.NODE === 'production'
    })
  ],
  controllers: [AppController]
})
export class AppModule {}
