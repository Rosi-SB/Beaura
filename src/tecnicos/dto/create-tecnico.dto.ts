import { IsNumber, IsString } from "class-validator";

export class CreateTecnicoDto {
    @IsString()
    tec_email: string;
    @IsString()
    tec_senha: string;
    @IsString()
    tec_nome: string;
    @IsString()
    tec_sobrenome: string;
    @IsNumber()
    tur_id: number;
    @IsNumber()
    esp_id: number
}
