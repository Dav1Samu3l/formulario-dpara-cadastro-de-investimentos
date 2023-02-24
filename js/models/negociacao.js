import { NegociacaoController } from "../controller/controller.js";


export  class Negociacao {
    date
    quantidade
    valor

    constructor(date, quantidade, valor) {
        this.date = date
        this.quantidade = quantidade
        this.valor = valor
    }
    get date() {
        return this.date
    }
    get quantidade() {
        return this.quantidade
    }
    get valor() {
        return this.valor
    }

}