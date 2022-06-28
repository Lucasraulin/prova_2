import { FolhaPagamento } from "../models/Payment";

const folhas: FolhaPagamento[] = [];

export class FolhaRepository {
  cadastrar(folha: FolhaPagamento) : FolhaPagamento[] {
    folhas.push(folha);
    return folhas;
  }

  listar() : FolhaPagamento[] {
    return folhas;
  }
}
