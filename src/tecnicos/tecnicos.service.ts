import { Injectable } from '@nestjs/common';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TecnicoEntity } from './entities/tecnico.entity';

@Injectable()
export class TecnicosService {
  constructor(private readonly prisma :PrismaService){}
  async create(createTecnicoDto: CreateTecnicoDto) :Promise<TecnicoEntity>{
    return this.prisma.tecnicos.create({data :createTecnicoDto});
  }

  async findAll() :Promise<TecnicoEntity>{
    return this.prisma.tecnicos.findMany();
  }

  async findOne(id: number) :Promise<TecnicoEntity>{
    return this.prisma.tecnicos.findUnique({where:{id}});
  }

  async update(id: number, updateTecnicoDto: UpdateTecnicoDto) :Promise<TecnicoEntity>{
    return this.prisma.tecnicos.update({where:{id}, data :updateTecnicoDto});
  }

  async remove(id: number) :Promise<TecnicoEntity>{
    return this.prisma.tecnicos.delete({where:{id}});
  }
}
