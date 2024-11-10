import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateCadastroDto {
    @IsString()
    cad_nome: string;
    @IsString()
    cad_sobrenome: string;
    @IsString()
    cad_rg: string;
    @IsString()
    cad_cpf: string;
    @IsString()
    cad_rua: string;
    @IsString()
    cad_numero: string;
    @IsString()
    cad_complemento: string;
    @IsString()
    cad_bairro: string;
    @IsString()
    cad_cep: string;
    @IsString()
    cad_cidade: string;
    @IsString()
    cad_uf: string;
    @IsString()
    cad_celular: string;
    @IsString()
    cad_telefone: string;
    @IsString()
    cad_emergencia: string;
    @IsString()
    cad_contato: string;
    @IsDateString()
    cad_dataNascimento: Date;
    @IsString()
    cad_idade: string;
    @IsString()
    cad_sexo: string;
    @IsString()
    cad_escolaridade: string;
    @IsString()
    cad_profissao: string;
    @IsString()
    cad_estadoCivil: string;
    @IsString()
    cad_filhos: string;
    @IsNumber()
    cliId: number;
}
