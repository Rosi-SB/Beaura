import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteEntity } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma : PrismaService){}
  async create(createClienteDto: CreateClienteDto) : Promise<ClienteEntity> {
    return this.prisma.cliente.create({data:createClienteDto});
  }

  async findAll() : Promise<ClienteEntity[]> {
    return this.prisma.cliente.findMany();
  }

  async findOne(cli_id: number) : Promise<ClienteEntity> {
    return this.prisma.cliente.findUnique({where:{cli_id}});
  }

  update(cli_id: number, updateClienteDto: UpdateClienteDto) : Promise<ClienteEntity> {
    return this.prisma.cliente.update({where:{cli_id}, data: updateClienteDto});
  }

  remove(cli_id: number) : Promise<ClienteEntity> {
    return this.prisma.cliente.delete({where:{cli_id}});
  }
}
