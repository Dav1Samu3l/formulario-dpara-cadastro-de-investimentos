import { Negociacao } from "../models/negociacao.js";
import { NegociacaoController } from "../controller/controller.js";
export class ListaNegociacoes {
    negociacoes = [];
    tbody = document.querySelector('table tbody');
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
        this._tbody.appendChild(this.negociacoes(negociacao));
    }
}



