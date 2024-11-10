import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateConsultaDto {
    @IsDateString()
    con_data: Date;
    @IsString()
    con_descricao: string;
    @IsString()
    hora_inicio: string;
    @IsString()
    hora_termino: string;
    @IsNumber()
    tec_id: number;
    @IsNumber()
    sol_id: number
}
