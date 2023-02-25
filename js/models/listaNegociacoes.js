import { Negociacao } from "../models/negociacao.js";
import { NegociacaoController } from "../controller/controller.js";
export class ListaNegociacoes {
    negociacoes;

    constructor() {
        this.negociacoes = [];
    }

    adiciona(negociacao) {
          this.negociacoes.push(negociacao);
        }
}
