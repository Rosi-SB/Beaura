import { Module } from '@nestjs/common';
import { ProcedimentoService } from './procedimento.service';
import { ProcedimentoController } from './procedimento.controller';

@Module({
  controllers: [ProcedimentoController],
  providers: [ProcedimentoService],
})
export class ProcedimentoModule {}
