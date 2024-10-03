import { Injectable } from '@nestjs/common';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EspecialidadeEntity} from './entities/especialidade.entity';

@Injectable()
export class EspecialidadeService {
  constructor(private readonly prisma :PrismaService){}
  async create(createEspecialidadeDto: CreateEspecialidadeDto) :Promise<EspecialidadeEntity> {
    return this.prisma.especialidade.create({data :createEspecialidadeDto});
  }

  async findAll() :Promise<EspecialidadeEntity>{
    return this.prisma.especialidade.findMany();
  }

  async findOne(id: number) :Promise<EspecialidadeEntity>{
    return this.prisma.especialidade.findUnique({where:{id}});
  }
  
  async update(id: number, updateEspecialidadeDto: UpdateEspecialidadeDto) :Promise<EspecialidadeEntity>{
    return this.prisma.especialidade.update({where:{id}, data :updateEspecialidadeDto});
  }

  async remove(id: number) :Promise<EspecialidadeEntity>{
    return this.prisma.especialidade.delete({where:{id}});
  }
}
