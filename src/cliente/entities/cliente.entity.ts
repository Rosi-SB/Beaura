import { Cliente } from "@prisma/client";

export class ClienteEntity implements Cliente {
    cli_id: number;
    cli_email: string;
    cli_senha: string;
}
