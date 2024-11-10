import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateSolicitacaoDto {
  @IsString()
  sol_status: string;
  @IsDateString()
  sol_data: Date;
  @IsString()
  sol_descricao: string;
  cadId: number;
  @IsNumber()
  proId: number;
  
}
