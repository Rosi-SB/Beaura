import { IsString } from "class-validator";

export class CreateEspecialidadeDto {
    @IsString()
    esp_nome: string;
    @IsString()
    esp_descricao: string
}
