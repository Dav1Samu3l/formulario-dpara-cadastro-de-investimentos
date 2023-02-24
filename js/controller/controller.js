import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    constructor() {
        this.campoData = document.querySelector('#dataNegociacao');
        this.quantidadeAcoes = document.querySelector('#quantidadeAcoes');
        this.campoValor = document.querySelector('#valorNegociacao');
    }
    criarNegociacao() {
        let data = new Date(this.campoData.value);
        let quantidade = parseInt(this.quantidadeAcoes.value);
        let valor = parseFloat(this.campoValor.value);
        let novaNegociacao = new Negociacao(data, quantidade, valor);
        console.log(novaNegociacao);
        this.ListaNegociacoes()
        return novaNegociacao;
    }
}


function negocia() {
    const controller = new NegociacaoController();
    document.querySelector('#cadastrar')
        .addEventListener('click', event => {
            event.preventDefault();
            controller.criarNegociacao();
        });
}
negocia() 
