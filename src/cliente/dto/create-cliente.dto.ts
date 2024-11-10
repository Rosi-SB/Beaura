import {IsEmail, IsNotEmpty, IsString, IsStrongPassword} from 'class-validator';

export class CreateClienteDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    cli_email: string
    @IsStrongPassword()
    @IsNotEmpty()
    @IsString()
    cli_senha: string
}
