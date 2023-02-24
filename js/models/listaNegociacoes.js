import { Negociacao } from "./Negociacao.js";

export class ListaNegociacoes {
    negociacoes;

    constructor() {
        this.negociacoes = [];
    }

    adiciona(negociacao) {
          this.negociacoes.push(negociacao);
    }
}
