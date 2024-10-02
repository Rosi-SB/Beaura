import { Injectable } from '@nestjs/common';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SolicitacaoEntity } from './entities/solicitacao.entity';

@Injectable()
export class SolicitacaoService {
  constructor(private readonly prisma :PrismaService){}
  async create(createSolicitacaoDto: CreateSolicitacaoDto) :Promise<SolicitacaoEntity>{
    return this.prisma.solicitacao.create({data :CreateSolicitacaoDto});
  }

  async findAll() :Promise<SolicitacaoEntity>{
    return this.prisma.solicitacao.findMany();
  }

  async findOne(id: number) :Promise<SolicitacaoEntity>{
    return this.prisma.solicitacao.findUnique({where:{id}});
  }

  async update(id: number, updateSolicitacaoDto: UpdateSolicitacaoDto) :Promise<SolicitacaoEntity>{
    return this.prisma.solicitacao.update({where:{id}, data :updateSolicitacaoDto});
  }

  async remove(id: number) :Promise<SolicitacaoEntity>{
    return this.prisma.solicitacao.delete({where:{id}});
  }
}
