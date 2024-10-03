import { Injectable } from '@nestjs/common';
import { CreateProcedimentoDto } from './dto/create-procedimento.dto';
import { UpdateProcedimentoDto } from './dto/update-procedimento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcedimentoEntity } from './entities/procedimento.entity';

@Injectable()
export class ProcedimentoService {
  constructor(private readonly prisma :PrismaService){}
  async create(createProcedimentoDto: CreateProcedimentoDto) :Promise<ProcedimentoEntity>{
    return this.prisma.procedimento.create({data :createProcedimentoDto});
  }

  async findAll() :Promise<ProcedimentoEntity>{
    return this.prisma.procedimento.findMany();
  }

  async findOne(id: number) :Promise<ProcedimentoEntity>{
    return this.prisma.procedimento.findUnique({where:{id}});
  }

  async update(id: number, updateProcedimentoDto: UpdateProcedimentoDto) :Promise<ProcedimentoEntity>{
    return this.prisma.procedimento.update({where:{id}, data :updateProcedimentoDto})
  }

  async remove(id: number) :Promise<ProcedimentoEntity>{
    return this.prisma.procedimento.delete({where:{id}});
  }
}
