import { Injectable } from '@nestjs/common';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConsultaEntity } from './entities/consulta.entity';

@Injectable()
export class ConsultaService {
  constructor(private readonly prisma :PrismaService){}
  async create(createConsultaDto: CreateConsultaDto) :Promise<ConsultaEntity>{
    return this.prisma.consulta.create({data :createConsultaDto});
  }

  async findAll() :Promise<ConsultaEntity>{
    return this.prisma.consulta.findMany();
  }

  async findOne(id: number) :Promise<ConsultaEntity>{
    return this.prisma.consulta.findUnique({where:{id}});
  }

  async update(id: number, updateConsultaDto: UpdateConsultaDto) :Promise<ConsultaEntity>{
    return this.prisma.consulta.update({where:{id}, data :updateConsultaDto});
  }

  async remove(id: number) :Promise<ConsultaEntity>{
    return this.prisma.consulta.delete({where:{id}});
  }
}
