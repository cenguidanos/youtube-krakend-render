import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const PORT = parseInt(process.env.PORT || '') || 8080
  const HOST = process.env.HOST || '0.0.0.0'

  await app.listen(PORT, HOST, () => {
    console.log(`Listen on ${HOST}:${PORT}`)
  })
}

bootstrap()
