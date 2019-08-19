## TESTE AP

Para inicializar o teste, criei do zero uma API utilizando NODE.JS, utilizando o framework EXPRESS, e como banco de dados o MongoDB alocado no MLAB(tentei uma alternativa diferente do ATLAS). 
A primeira API funciona o CRUD completo, e foi estruturada de maneira de fácil entendimento(pois precisei aprender do 0 como contruí-la)
Durante a construção eu utilizei fontes como a própria documentação do MONGODB, um pouco da documentação do EXPRESS, e a maior parte foi consumida na documentação do NODE.JS, principalmente por atuar com Front-End, ainda desconhecia algumas propriedades do node, atuando mais fortemente com comandos em NPM. 
A respeito da Autenticação JWT e do cache, ainda não consegui fazer, mas estou estudando mais aprofundadamente o conceito e logo adaptarei a API com eles.


## DOCKERFILE
Consegui montar um DOCKERFILE funcional, consegui fazer a build dele utilizando uma adaptação do docker para Windows, na máquina que eu usei foi instalado o Windows Home, onde não tinha o hyper-v para a instalação do docker, então usei o DOCKERTOOLBOX como uma solução. 
 
## ERROS
Durante o comando docker run tive alguns problemas, pois o container era gerado no servidor, porém não tive acesso por um conflito de escopo do Mongoose (inclusive se você abrir, buildar a imagem, e dar o run você vai ver o mesmo erro, se souber o que tá acontecendo eu aceito ajuda rs).

## PORTANTO PARA RODAR A APLICAÇÃO
Para ver a api funcionando sugiro que a abra em um editor de texto para checar o código(inclusive deixei muitos comentários, descrevendo parte a parte a aplicação e os problemas que eu tive enquanto estudava e executava), rode um NPM INSTALL e o NPM RUN DEV para a aplicação subir. Use também o Postman para fazer as requisições e testar o funcionamento da API. 

ENJOY THIS :)
