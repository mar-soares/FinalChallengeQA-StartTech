// elementos da página para executar as ações


// Alterar somente o grupo ELEMENTS cada vez que for compilar o código. Alguns campos são optativos para mudança
// acessar o site1 para gerar números como CPF, CNPJ, IE...
// para gerar email temporario, acessar site2
//      site1: https://www.4devs.com.br/
//      site2: https://www.invertexto.com/gerador-email-temporario


export const ELEMENTS = {
    razaoSocial: 'Adrianaaaaaa e Oliver Adega ME', // optativo 
    IE1: '993.725.861.330', //site 1
    IE2: '651.576.137.187', //site 1
    CNPJ1: '64.719.380/0001-00', //site 1
    CNPJ2: '39.750.665/0001-58', //site 1
    NOME_pj1: 'Alineeeeee Vitorino', // optativo
    CPF_pj: '663.032.040-90', //site 1
    CPF_PF: '634.205.860-19', //site 1
    EMAIL_PJ1: 'aguila1601@uorak.com', //site 2
    SENHA_PJ: 'testeAAA1', // optativo
    nome_pf: 'Aabdurrahmann mor laray', // optativo
    email_pf: 'yedra6153@uorak.com', //site 2
    senha_pf: 'teste123', // optativo
    pesquisa1: 'Sapato {enter}', // optativo / não retirar o {enter} após o texto de pesquisas
    pesquisa2: '!@#$% {enter}', // optativo / não retirar o {enter} após o texto de pesquisas
    pesquisa3: 'Botões {enter}', // optativo / não retirar o {enter} após o texto de pesquisas
    pesquisa4: 'Vestido Indiano {enter}', // optativo / não retirar o {enter} após o texto de pesquisas
    pesquisa5: 'Calça Jeans Preta Destroyed {enter}' // optativo / não retirar o {enter} após o texto de pesquisas
}
export const ARGUMENTOS = {
    site: 'www.rosachiclebh.com.br',
    linkConta: ':nth-child(3) > .overflow > .list > :nth-child(2) > a',
    login: 'p > .botao-commerce',
    loginEmail: '#input-email',
    continuarLogin: '#tray-login-identify',
    colocarSenha: '#input-password',
    continuarSenha: '#password-submit',
    homePosLogin: '.app__header__title',
    blusas: '[data-id="158"] > .icon-show',
    shorts: '[data-id="166"] > .icon-show',
    bodys: '[data-id="174"] > .icon-show',
    calcas: '[data-id="160"] > .icon-show',
    cropped: '[data-id="164"] > .icon-show',
    vestido: '[data-id="170"] > .icon-show',
    saia: '[data-id="148"] > .icon-show',
    produto: '.showcase-catalog > .list > :nth-child(3)',
    excessoes: 'uncaught:exception',
    cores: '#cor_Branco',
    tamUn: '#cor_18803',
    finCompra: '#button-buy',
    remover: '.remove',
    fecharCarrinho: '.box-prev',
    HomeCabecalho: '.logo > img',
    BarraPesquisa: '.search-header > .input-search',
    nomeNovidades: '[name="name"]',
    emailNovidades: '.mail',
    enviarNovidades: '.news-button',
    botaoContato: '.overflow > .list > :nth-child(8) > a',
    campoContatoNome: '#nome_contato',
    nome_contato: 'XXXXX XXXXX',
    campoContatoEmail: '#email_contato',
    campoContatoAssunto:'#assunto',
    assunto_contato:'Erro nas redes sociais',
    campoContatoMensagem: '#mensagem_contato',
    mensagemContato: 'Quando tento acessar as redes sociais do twitter, pinterest ou facebook, dá erro',
    submeterContato: '#btn_submit > .image',
    botaoCriarConta: ':nth-child(3) > .overflow > .list > :nth-child(1) > a',
    botaoCriarPJ: '#PessoaJuridica > a',
    razaoSocial:'#razao_social',
    ie: '#ie',
    cnpj: '#cnpj',
    nome_pj: '#pj_nome_cliente',
    cpf_pj: '#pj_cpf_cliente',
    tel_pj: '#telefone_cliente_2',
    telefone_pj:'31983865539',
    email_pj1: '#email_cliente',
    email_pj2:'#email_cliente2',
    senha_pj: '#senha_cliente',
    senha_pj2: '#senha_cliente2',
    tipoEnd_pj: '#content_0 > fieldset > p > :nth-child(2) > .text',
    tipoEnd_pj2: 'Comercial',
    destinatario: '#content_0 > fieldset > p > :nth-child(4) > .text',
    campoCEP_pj: '#content_0 > fieldset > p > :nth-child(6) > .cadastro_nacional > .cep1',
    CEP5_pj: '30512',
    campoCEP_pj2: '#content_0 > fieldset > p > :nth-child(6) > .cadastro_nacional > .cep2',
    CEP3_pj: '690',
    campoNumero: '#content_0 > fieldset > p > :nth-child(9) > .text',
    NumeroCasa_pj: '659',
    finalizar_pj: '.termContainerRegister > .botao-commerce',
    botaoTresTracos: '.line > .bars',
    minhaContaBaixaRes: '.line > .account > [data-logged-user="false"]',
    botaoMeusEnd: '[href="/my-account/addresses/"] > .app__navigation__item__label',
    addNovoEnd: '.app__address-list__add-new__label',
    nomeEnd: '#address-description',
    nomeEnd2: 'Novo Endereço',
    novoCep_pj:'#address-cep',
    novoCep_pj2: '31870390',
    novoNumeroEnd: '#address-number',
    novoNumeroEnd2: '208',
    novoComplEnd: '#address-complement',
    novoComplEnd2: 'sala 101',
    salvarAltPJ: '.app__button',
    botaoAlterarSenha: '[href="/my-account/password-change"]',
    campoSenhaNova_pj: '#new-password',
    campoSenhaNova_pj2:'#confirm-password',
    NomePF: '#pf_nome_cliente',
    NascPF: '#pf_data_nascimento',
    NascPF2: '05/12/1995',
    cpfPF: '#pf_cpf_cliente',
    telefonePF: '#telefone_cliente_2',
    telefonePF2: '11999999999',
    campoEmailPF: '#email_cliente',
    campoEmailPF2: '#email_cliente2',
    camposenhapf: '#senha_cliente',
    camposenhapf2: '#senha_cliente2',
    tipoEnd_pf: '#content_0 > fieldset > p > :nth-child(2) > .text',
    tipoEnd_pf2: 'Residencial',
    destinatariopf: '#content_0 > fieldset > p > :nth-child(4) > .text',
    CEP5_pf: '#content_0 > fieldset > p > :nth-child(6) > .cadastro_nacional > .cep1',
    CEP5_pf2: '73950',
    CEP3_pf: '#content_0 > fieldset > p > :nth-child(6) > .cadastro_nacional > .cep2',
    CEP3_pf2: '970',
    NumeroCasa_pf: '#content_0 > fieldset > p > :nth-child(9) > .text',
    finalizar_pf: '.termContainerRegister > .botao-commerce',
    campoDataNasc: '#customer-birthdate',
    campoDataNasc2: '19111990',
    campoTelefone: '#customer-mobile_phone',
    campoTelefone2: '61999999999',
    botaoMinhaConta:':nth-child(3) > .overflow > .list > :nth-child(2) > a',
    botaoContaPJ: '[data-test=data-edit__tab__button--legal]',
    BotaoRazaoSocial: '#customer-company-name',
    novaRazaoSocial: 'Calebeeee e Bianca Telecom Ltda',
    novoCNPJ: '#customer-company-cnpj',
    tirarIsento: ':nth-child(2) > .app__data-edit__input__wrapper > .app__data-edit__input__checkbox > i.app__icon > .app__icon',
    novaIE: '#customer-company-state-inscription',
    linkFace: '[href="Rosa ChiclÃ©"]',
    linkTwitter: '[href="https://twitter.com/agencianetzee"]',
    linkInsta: '[href="https://instagram.com/rosachiclebh"]',
    linkPinterest: '[href="agencianetzee"]',
    linkWhats: '[fill="#00E676"]'
}