import {  } from "../controller/controller.js";


export  class Negociacao {
    #date
    #quantidade
    #valor

    constructor(date, quantidade, valor) {
        this._date = date
        this._quantidade = quantidade
        this._valor = valor
    }
    get date() {
        return this._date
    }
    get quantidade() {
        return this._quantidade
    }
    get valor() {
        return this._valor
    }

}