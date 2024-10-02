import { Injectable } from '@nestjs/common';
import { CreateFormularioFacialDto } from './dto/create-formulario-facial.dto';
import { UpdateFormularioFacialDto } from './dto/update-formulario-facial.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormularioFacialEntity } from './entities/formulario-facial.entity';

@Injectable()
export class FormularioFacialService {
  constructor(private readonly prisma :PrismaService){}
  async create(createFormularioFacialDto: CreateFormularioFacialDto) :Promise<FormularioFacialEntity>{
    return this.prisma.formulariofacial.create({data :CreateFormularioFacialDto});
  }

  async findAll() :Promise<FormularioFacialEntity>{
    return this.prisma.formulariofacial.findMany();
  }

  async findOne(id: number) :Promise<FormularioFacialEntity>{
    return this.prisma.formulariofacial.findUnique({where:{id}});
  }

  async update(id: number, updateFormularioFacialDto: UpdateFormularioFacialDto) :Promise<FormularioFacialEntity>{
    return this.prisma.formulariofacial.update({where:{id}, data :updateFormularioFacialDto});
  }

  async remove(id: number) :Promise<FormularioFacialEntity>{
    return this.prisma.formulariofacial.delete({where:{id}});
  }
}
