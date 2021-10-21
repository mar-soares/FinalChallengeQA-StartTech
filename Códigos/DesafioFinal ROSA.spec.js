/// <reference types="cypress" />

//1 – Criar conta PJ
//2 – Adicionar Endereço
//3 – Alterar Senha
//4 – Criar conta PF
//5 – Acessar conta PF
//6 – Alterar dados conta PF
//7 – Filtros
//8 – Comprar um produto
//9 – Excluir item do carrinho
//10 – Barra de pesquisa
//11 – Alterar de PF para PJ
//12 – Receber novidades
//13 – Contato
//14 – Redes Sociais 

import acoes from '.';

describe('Site Rosa Chiclé', () => {

    it('Criar conta PJ',()=>{
        acoes.acessarSite();
        acoes.criarConta();
        acoes.PraNaoDarErroNaCompra();
        acoes.criarConta_PJ();
    })
            
    it('Adicionar Endereço',()=>{  
        acoes.baixaResolucao();
        acoes.acessarSite();
        acoes.botaoTresTracos();
        acoes.PraNaoDarErroNaCompra();
        acoes.loginEmail_pj();
        acoes.alterarEnd();   
    })
            
    it('Alterar Senha',()=>{
        acoes.baixaResolucao();
        acoes.acessarSite();
        acoes.botaoTresTracos();
        acoes.PraNaoDarErroNaCompra();
        acoes.loginEmail_pj();
    })    

    it("Criar conta PF", () => {
        acoes.acessarSite();
        acoes.criarConta();
        acoes.PraNaoDarErroNaCompra();
        acoes.criarContaPF();
    })

    it("Acessar conta PF", () => {
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.minhaConta();
        acoes.botaoLogin();
        acoes.loginEmail();
    })
       
    it('Alterar Dados',() =>{
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.minhaConta();
        acoes.botaoLogin();
        acoes.loginEmail();
        acoes.alterarDados();
    })  

    it('Testar Filtros',() =>{
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.minhaConta();
        acoes.botaoLogin();
        acoes.loginEmail();
        acoes.voltarHome();
        acoes.blusas();
        acoes.shorts();
        acoes.bodys();
        acoes.calcas();
        acoes.cropped();
        acoes.vestidos();
        acoes.saia();
    })

    it('Comprar Produto',() =>{
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.minhaConta();
        acoes.botaoLogin();
        acoes.loginEmail();
        acoes.voltarHome();
        acoes.PraNaoDarErroNaCompra();
        acoes.bodys();
        acoes.comprarProd();
        acoes.escolherCor();
        acoes.escolherTamanho();
        acoes.AddCarinho();
    })
        
    it('Exluir item do carrinho',() =>{
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.minhaConta();
        acoes.botaoLogin();
        acoes.loginEmail();
        acoes.voltarHome();
        acoes.PraNaoDarErroNaCompra();
        acoes.bodys();
        acoes.comprarProd();
        acoes.escolherCor();
        acoes.escolherTamanho();
        acoes.AddCarinho();
        acoes.removerEFecharCarrinho();
    })

    it("Teste da barra de pesquisa", () => { 
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.BarraPesquisa();
    })

    it('Alterar a conta de PF para PJ',()=>{    
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.minhaConta();
        acoes.botaoLogin();
        acoes.loginEmail();
        acoes.alterarPFforPJ();
    })

    it('Receber novidades',() =>{
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.receberNov();
    })
                
    it('Realizar Contato no site Rosa Chiclé',() =>{
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.contato();
    })

    it('Acessar Facebook da Rosa Chiclé pelo site',() =>{
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.linkFacebook();
    })
        
    it('Acessar Twitter da Rosa Chiclé pelo site',() =>{
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.linkTwitter();
    })
       
    it('Acessar Instagram da Rosa Chiclé pelo site',() =>{
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.linkInsta();
    })
        
    it('Acessar Pinterest da Rosa Chiclé pelo site',() =>{
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.linkPinterest();
    })
        
    it('Acessar Whatsapp da Rosa Chiclé pelo site',() =>{
        acoes.altaResolucao();
        acoes.acessarSite();
        acoes.linkWhats();
    })   
})

