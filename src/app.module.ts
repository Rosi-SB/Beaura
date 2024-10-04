import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { BiometriaModule } from './biometria/biometria.module';
import { FormularioCorporalModule } from './formulario-corporal/formulario-corporal.module';

@Module({
  imports: [BiometriaModule, FormularioCorporalModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
