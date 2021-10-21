/// <reference types => 'cypress'> 

import acoes from '.';

describe('Site Rosa Chiclé', () => {
    it('Regressivo',() =>{
        acoes.acessarSite();
        acoes.altaResolucao();
        acoes.minhaConta();
        acoes.botaoLogin();
        acoes.loginEmail()
        acoes.blusas();
        acoes.shorts();
        acoes.bodys();
        acoes.calcas();
        acoes.cropped();
        acoes.vestidos();
        acoes.saia();
        acoes.bodys();
        acoes.comprarProd();
        acoes.PraNaoDarErroNaCompra();
        acoes.escolherCor();
        acoes.escolherTamanho();
        acoes.AddCarinho();
        acoes.removerEFecharCarrinho()
        acoes.voltarHome()
        acoes.BarraPesquisa()
        acoes.voltarHome()
        acoes.receberNov()
        acoes.contato()

        // 
        
    })
})