//ações de interação com a página

import { assignIn, size } from "lodash";

const el = require('./elements').ELEMENTS
const arg = require('./elements').ARGUMENTOS
const { delay } = require("bluebird")

class acoes{
    altaResolucao(){
        cy.viewport(1200,1080);
    }
    acessarSite(){
        cy.visit(arg.site);
    }
    minhaConta(){
        cy.get(arg.linkConta).click()
    }
    botaoLogin(){
        cy.get(arg.login).click()
    }
    loginEmail(){
        cy.get(arg.loginEmail).type(el.email_pf)
        cy.get(arg.continuarLogin, {delay:5000}).click()
        cy.get(arg.colocarSenha).type(el.senha_pf)
        cy.get(arg.continuarSenha).click()
        cy.get(arg.homePosLogin).click()
    }
    blusas(){
        cy.get(arg.blusas).click({ force: true })
    }
    shorts(){
        cy.get(arg.shorts).click({ force: true })
    }
    bodys(){
        cy.get(arg.bodys).click({ force: true })
    }
    calcas(){
        cy.get(arg.calcas).click({ force: true })
    }
    cropped(){
        cy.get(arg.cropped).click({ force: true })
    }
    vestidos(){
        cy.get(arg.vestido).click({ force: true })
    }
    saia(){
        cy.get(arg.saia).click({ force: true })
    }
    comprarProd(){
        cy.get(arg.produto).click()
    }
    PraNaoDarErroNaCompra(){
        Cypress.on(arg.excessoes, (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        })
    }
    escolherCor(){
        cy.get(arg.cores).click()
    }
    escolherTamanho(){
        cy.get(arg.tamUn).click()
    }
    AddCarinho(){
        cy.get(arg.finCompra).click({ force: true })
    }
    removerEFecharCarrinho(){
        cy.get(arg.remover).click()
        cy.get(arg.fecharCarrinho).click()
    }
    voltarHome(){
        cy.get(arg.HomeCabecalho).click()
    }
    BarraPesquisa(){
        cy.get(arg.BarraPesquisa).type(el.pesquisa1)
        cy.get(arg.BarraPesquisa).type(el.pesquisa2)
        cy.get(arg.BarraPesquisa).type(el.pesquisa3)
        cy.get(arg.BarraPesquisa).type(el.pesquisa4)
        cy.get(arg.BarraPesquisa).type(el.pesquisa5)
    }
    receberNov(){
        cy.get(arg.nomeNovidades).type(el.nome_pf)
        cy.get(arg.emailNovidades).type(el.email_pf)
        cy.get(arg.enviarNovidades).click()
    }
    contato(){
    cy.get(arg.botaoContato).click()
    cy.get(arg.campoContatoNome).type(arg.nome_contato)
    cy.get(arg.campoContatoEmail).type(el.email_pf)
    cy.get(arg.campoContatoAssunto).type(arg.assunto_contato)
    cy.get(arg.campoContatoMensagem).type(arg.mensagemContato)
    cy.get(arg.submeterContato).click()
    }
    criarConta(){
        cy.get(arg.botaoCriarConta).click()
    }
    criarConta_PJ(){
        cy.get(arg.botaoCriarPJ,{delay:5000}).click();
        cy.get(arg.razaoSocial).type(el.razaoSocial);
        cy.get(arg.ie).type (el.IE1);
        cy.get(arg.cnpj).type (el.CNPJ1);
        cy.get(arg.nome_pj).type(el.NOME_pj1);
        cy.get(arg.cpf_pj).type(el.CPF_pj);
        cy.get(arg.tel_pj).type(arg.telefone_pj);
        cy.get(arg.email_pj1).type(el.EMAIL_PJ1);
        cy.get(arg.email_pj2).type(el.EMAIL_PJ1);
        cy.get(arg.senha_pj).type(el.SENHA_PJ);
        cy.get(arg.senha_pj2).type(el.SENHA_PJ);
        cy.get(arg.tipoEnd_pj).type(el.SENHA_PJ);
        cy.get(arg.destinatario).type(el.NOME_pj1);
        cy.get(arg.campoCEP_pj).type(arg.CEP5_pj);
        cy.get(arg.campoCEP_pj2).type(arg.CEP3_pj);
        cy.get(arg.campoNumero).type(arg.NumeroCasa_pj);
        cy.wait(4000)
        cy.get(arg.finalizar_pj).click();
    }
    baixaResolucao(){
        cy.viewport(1024, 768)
    }
    botaoTresTracos(){
        cy.get(arg.botaoTresTracos,{delay:5000}).click();
        cy.get(arg.minhaContaBaixaRes).click();
    }
    loginEmail_pj(){
        cy.get(arg.login).click()
        cy.get(arg.loginEmail).type(el.EMAIL_PJ1)
        cy.get(arg.continuarLogin, {delay:5000}).click()
        cy.get(arg.colocarSenha).type(el.SENHA_PJ)
        cy.get(arg.continuarSenha).click()
        
    }
    alterarEnd(){        
        cy.get(arg.botaoMeusEnd).click();
        cy.get(arg.addNovoEnd).click();
        cy.get(arg.nomeEnd).type(arg.nomeEnd2);
        cy.get(arg.novoCep_pj).type(arg.novoCep_pj2);
        cy.wait(4000)
        cy.get(arg.novoNumeroEnd).type(arg.novoNumeroEnd2);
        cy.get(arg.novoComplEnd).type(arg.novoComplEnd2);
        cy.get(arg.salvarAltPJ).click()
    }
    alterarSenha(){
        cy.get(arg.botaoAlterarSenha, {delay:6000}).click();
        cy.get(arg.campoSenhaNova_pj).type(el.senha_pf);
        cy.get(arg.campoSenhaNova_pj2).type(el.senha_pf);
        cy.get(arg.salvarAltPJ).click();
    }
    criarContaPF(){
        cy.get(arg.NomePF).type(el.nome_pf)
        cy.get(arg.NascPF).type(arg.NascPF2)
        cy.get(arg.cpfPF).type(el.CPF_PF)
        cy.get(arg.telefonePF).type(arg.telefonePF2)
        cy.get(arg.campoEmailPF).type(el.email_pf)
        cy.get(arg.campoEmailPF2).type(el.email_pf)
        cy.get(arg.camposenhapf).type(el.senha_pf)
        cy.get(arg.camposenhapf2).type(el.senha_pf)
        cy.get(arg.tipoEnd_pf).type(arg.tipoEnd_pf2)
        cy.get(arg.destinatario).type(el.nome_pf)
        cy.get(arg.CEP5_pf).type(arg.CEP5_pf2)
        cy.get(arg.CEP3_pf).type(arg.CEP3_pf2)
        cy.get(arg.NumeroCasa_pf).type(arg.NumeroCasa_pj)
        cy.wait(4000)
        cy.get(arg.finalizar_pf).click()    
    }
    alterarDados(){
        cy.get(arg.campoDataNasc).type(arg.campoDataNasc2)
        cy.get(arg.campoTelefone).type(arg.campoTelefone2)
        cy.get(arg.salvarAltPJ).click()
    }
    alterarPFforPJ(){
        cy.get(arg.botaoMinhaConta).click()
        cy.get(arg.botaoContaPJ).click();
        cy.get(arg.BotaoRazaoSocial).type(arg.novaRazaoSocial);
        cy.get(arg.novoCNPJ).type(el.CNPJ2);
        cy.get(arg.tirarIsento).click()
        cy.get(arg.novaIE).type(el.IE2)
        cy.get(arg.salvarAltPJ).click();
    }
    linkFacebook(){
        cy.get(arg.linkFace).click()
    }
    linkTwitter(){
        cy.get(arg.linkTwitter).click()
    }
    linkInsta(){
        cy.get(arg.linkInsta).click()
    }
    linkPinterest(){
        cy.get(arg.linkPinterest).click()
    }
    linkWhats(){
        cy.get(arg.linkWhats).click() 
    }
        
    

}
export default new acoes