import { Tecnicos } from "@prisma/client";

export class TecnicoEntity implements Tecnicos {
    tec_id: number;
    tec_email: string;
    tec_senha: string;
    tec_nome: string;
    tec_sobrenome: string;
    tur_id: number;
    esp_id: number
}
