import { Solicitacao } from "@prisma/client";

export class SolicitacaoEntity implements Solicitacao {
  cadId: number;
  proId: number;
  sol_id: number;
  sol_status: string;
  sol_data: Date;
  sol_descricao: string;
  cad_id: number;
  pro_id: number
}
