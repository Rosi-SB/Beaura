export class SolicitacaoEntity implements Solicitacao {
  sol_id: number;
  sol_status: string;
  sol_data: Date;
  sol_descricao: string;
  cad_id: number;
  pro_id: number
}
