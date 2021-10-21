# FinalChallengeQA-StartTech
Desafio Start Tech - por Mar Domingos, Márcia Castro, Marie Massarico e Wanda Araújo.

1.	INTRODUÇÃO -
	
	No intuito de desenvolver e avaliar os conhecimentos adquiridos ao longo do período de formação, foi proposto um desafio ao qual deveriam constar no mínimo as seguintes atividades:
	
	•	Tema livre;

	•	Criação de no mínimo 10 e no máximo, 30 cenários de teste;

	•	Testar os cenários utilizando as ferramentas pertinentes (VS Code®, Cypress®, Apache® J.Meter);

	•	Elaborar Relatório de Problemas;

	•	Enviar o projeto para repositório no GitHub;

	•	Testar o projeto de uma outra equipe.

2.	DESENVOLVIMENTO -

	De acordo com os requisitos do desafio, a nossa equipe abordou os sequintes tópicos:
	
	•	Site escolhido: Lojas Rosa Chiclé (Rosa Chiclé (rosachiclebh.com.br));

	•	Elaboração de Cenários de Testes;

	•	Desenvolvimento de Testes de Automação;

	•	Teste de Performance (Carga e Stress);

	•	Relatório de Problemas.

3.	FERRAMENTAS -

	A partir da elaboração dos cenários de testes, foram executados os testes de forma manual e em seguida, desenvolvida uma suíte de testes para automatizar alguns cenários. Foram utilizadas as seguintes ferramentas:
	
	•	Excel;

	•	Visual Studio Code for Windows (64 bits) (VS Code®) com base na biblioteca J.Query;

	•	Cypress® Node.js Version 14.16.0;

	•	Apache® J.Meter Version 5.4.1.

4.	ELABORAÇÃO DOS CENÁRIOS DE TESTE -

	Foram criados 14 cenários de testes distintos que de acordo com a nossa ótica devem garantir a usabilidade do sistema. Todos os cenários estão descritos no arquivo Cenários de Testes em formato excel.
	
5.	TESTE DE CARGA E STRESS -

	Com o objetivo de avaliar a experiência do usuário na aplicação e o tempo de resposta que ele terá a cada iteração, foi realizado o teste de perfomance utilizando o Apache JMeter®, onde foram simulados acessos múltiplos no site Rosa Chiclé. Os resultados obtidos estão relatados no arquivo Teste de Performance em formato pdf, anexado ao Github.
	
6.	TESTES AUTOMATIZADOS -

	Dos 14 cenários levantados, todos foram automatizados. Descreveremos a seguir, os cenários de teste onde obtivemos dificuldades e problemas na automatização ou foram preciso escolher caminhos alternativos para fazê-los.
	Os testes funcionais e automatizados estão disponíveis em gravação nos links abaixo:
	
	•	Funcionais, sem Page Objects: https://www.youtube.com/watch?v=E49sKU7Jf3U;

	•	Funcionais, com Page Objetcs: https://www.youtube.com/watch?v=c0_O-GhRlC0;

	•	Regressivo, sem Page Objects: https://www.youtube.com/watch?v=4WBZryXT9mw;

	•	Regressivo, com Page Objects: https://www.youtube.com/watch?v=rPy0TutUrnA;
	
	Notou-se que nos testes supracitados, aqueles escritos com Page Objects tiveram um tempo de execução menor, evidenciando como as boas práticas otimizam o código. 
Em adicionar endereço, a automatização foi realizada de maneira individual, no entanto não foi acrescentado ao regressivo.

 	Ao tentar alterar dados da conta PF, mesmo após preencher os dados alterados e confirmar a mesma, eles não são salvos.
	
	Quando tentamos comprar um produto, precisamos preencher o CEP por último, pois se preenchê-lo antes da cor e tamanho, a plataforma não permite que avance na compra (na automatização).
	
	Seguindo a automatização dessa etapa, precisamos fazer login antes da iniciar a compra, pois o sistema exige muitas entradas que inviabilizam a automação, ou seja, várias perguntas para comprovação de identidade para além de e-mail e senha.
	
7.	OBSERVAÇÕES -

	•	O arquivo "DesafioFinal ROSA.spec.js" contém os cenários funcionais testados neste desafio;

	•	O arquivo "Regressivo.spec.js", contém um teste fluído de funcionalidades do site, vistas anteriormente nos cenários funcionais;

	•	"Index.js" é responsável pelas ações realizadas nos testes e o arquivo "elements.js" contém as variáveis e constantes utilizadas no processo;

	•	Requisitos: Para fins de automatização, alterar variáveis (obrigatórias e/ou optativas) dentro do campo ELEMENTS no arquivo elements.js toda vez que for compilar. Dentro deste mesmo arquivo, o campo ARGUMENTS contém constantes imutáveis.
	
8.	PROBLEMAS ENCONTRADOS -

	Estão descritos em arquivo Problemas Encontrados, em formato pdf anexado ao Github.
	
9.	CONSIDERAÇÕES FINAIS -

	A experiência de desenvolver esse trabalho coletivamente do início ao fim foi de extrema valia para consolidar o conhecimento construído desde quando iniciamos o treinamento. Este desafio é um marco em nosso processo de ensino apredizagem e sinaliza um novo começo de nossa jornada na Ambev Tech.
