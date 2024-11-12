import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { UpdateCadastroDto } from './dto/update-cadastro.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('cadastro')
export class CadastroController {
  constructor(private readonly cadastroService: CadastroService) {}

  
  @Post()
  create(@Body() createCadastroDto: CreateCadastroDto) {
    return this.cadastroService.create(createCadastroDto);
  }

  //@UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.cadastroService.findAll();
  }
  
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadastroService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCadastroDto: UpdateCadastroDto) {
    return this.cadastroService.update(+id, updateCadastroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadastroService.remove(+id);
  }
}
