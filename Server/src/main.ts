import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { JwtAuthGuard } from './auth/guard/jwt.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  app.enableCors();
  app.useGlobalGuards(new JwtAuthGuard(new Reflector()));
  app.use(helmet());
  await app.listen(config.get('PORT') ?? 3000);
}
bootstrap();
