import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";

export class NegociacaoController {
    constructor(campoData, quantidadeAcoes, campoValor) {
        this.campoData = document.querySelector('#dataNegociacao');
        this.quantidadeAcoes = document.querySelector('#quantidadeAcoes');
        this.campoValor = document.querySelector('#valorNegociacao');

       

    }
    criarNegociacao() {
        let data = new Date(this.campoData.value);
        let quantidade = parseInt(this.quantidadeAcoes.value);
        let valor = parseFloat(this.campoValor.value);
        var novaNegociacao = new Negociacao(data, quantidade, valor);
    
        // Seleciona as células da tabela
        const celulaData = document.querySelector('#data');
        const celulaQuantidade = document.querySelector('#quantidade');
        const celulaValor = document.querySelector('#valor');
    
        // Atualiza o conteúdo das células com os valores dos inputs
        celulaData.innerHTML = novaNegociacao.date.toLocaleDateString();
        celulaQuantidade.innerHTML = novaNegociacao.quantidade;
        celulaValor.innerHTML = novaNegociacao.valor;
    }
    


}


function enviar() {
    const controller = new NegociacaoController();
    document.querySelector('#cadastrar')
        .addEventListener('click', event => {
            event.preventDefault();
            controller.criarNegociacao();
        });

}
enviar()



