## Documentação do projeto

Para rodar o projeto é necessário ter

```
docker e docker-compose
node (pelo menos na versão 20.13)
pnpm
```

### Iniciando

1. Crie um arquivo `.env` e copie o conteúdo `.env.example` dentro dele. O conteúdo do `.env.example` é suficiente para rodar o projeto, sem a necessidade de preencher mais nada.

2. Rode o `docker-compose up -d` para subir o postgres e o redis.

3. Após o docker subir, instale as dependências com `pnpm i`

4. Faça um build para que o TypeORM identifique as migrations com `pnpm build`

5. Rode as migrations com o `pnpm migration:run`

6. Rode o servidor com `pnpm dev`

7. A documentação em Swagger está disponível em `http:localhost:3000/api/v1/docs`

8. Também é possível utilizar a extensão `Rest Client` do VsCode para realizar as requisições. As definições estão no arquivo `order.docs.http`

9. Para rodar os testes, utilize `pnpm test`

## Da arquitetura

1. Utilizei uma arquitetura básica em camadas, com Controller, Service e Repository.
2. Acredito que a camada de Repository é indispensável, pois é importante para mockar facilmente ao realizar os testes unitários
3. Criei interfaces nas camadas de Service e Repository, assim como na Queue, para representar o modelo que as abstrações devem seguir. Isso é importante para seguir o Liskov Substitution Principle (LSP ou L do SOLID), tornando fácil substituir as implementações. Por exemplo, o TypeORM pode ser substituido pelo Prisma e o driver do Bull pelo do RabbitMQ facilmente, desde que as classes que realizem essas implementações tenham os mesmos métodos das interfaces, com os mesmos parâmetros e retornos.
4. A API não foi Dockerizada para facilitar a visualização de logs no console, o que seria um pouco mais chatinho para o examinador visualizar a partir dos logs do Docker.
5. No `order.processor.ts` escolhi por simular um delay de 3 segundos com a linha `await new Promise((resolve) => setTimeout(resolve, 3000));`, para ser possível diferenciar a fila de processos acontecendo. Nesse momento é interessante que seja possível visualizar tanto a requisição de criação de produto quanto o console do Nest.

## Desafio Técnico – Desenvolvedor Back-End (NestJS + TypeORM)

Descrição do Desafio
Você foi contratado para desenvolver uma funcionalidade de processamento de pedidos para um sistema de e-commerce. A aplicação deve ser desenvolvida utilizando NestJS, TypeORM e seguir os princípios da Clean Architecture.

O objetivo principal é garantir que os pedidos sejam registrados e processados corretamente, com suporte a filas para processamento assíncrono. Além disso, o sistema deve permitir a consulta de pedidos com filtros.

Requisitos do Desafio
Registrar um Pedido:

- [x] Ao receber os dados de um pedido (produto, quantidade, preço e informações do cliente), ele deve ser salvo no banco de dados.

Processamento do Pedido:

- [x] Após o registro, o pedido deve ser enviado para uma fila (utilizando Bull) e processado de forma assíncrona. Durante o processamento:

Atualize o status do pedido para "Processado".
Registre um log de processamento, contendo a data e hora da finalização.
Consultar Pedidos:

- [x] Desenvolva um endpoint que permita listar pedidos, com os seguintes filtros opcionais:

  - [x] Status: Filtrar por status do pedido (ex.: "Pendente", "Processado").

  - [x] Data de Criação: Filtrar pedidos por intervalo de datas.

### Requisitos Técnicos

- [x] NestJS: Para a estrutura do projeto.
- [x] TypeORM: Para modelagem e manipulação do banco de dados.
- [x] Filas: Utilize uma biblioteca como Bull ou RabbitMQ para o processamento assíncrono.
- [x] Clean Architecture: A aplicação deve estar estruturada seguindo os princípios da Clean Architecture (use cases, repositórios, entidades, etc.).
- [x] Endpoints REST: Desenvolva endpoints para:
  - [x] Registrar pedidos.
  - [x] Consultar pedidos com filtros opcionais.
  - ? Critérios de Avaliação

Tempo de Entrega:
O prazo de entrega será um fator importante. Avaliaremos sua capacidade de concluir o desafio dentro do tempo estimado, levando em consideração a qualidade do resultado.

Lógica de Programação:
Avaliaremos como você estrutura suas soluções, seu entendimento do problema e a capacidade de lidar com os requisitos do desafio.

Qualidade do Código:

Organização geral do projeto.
Implementação clara e aderente aos princípios de Clean Architecture.
Legibilidade e uso de boas práticas de programação.
Tratamento de erros e consistência na lógica.
Atenção: O tempo de entrega e a qualidade do código terão um peso significativo na avaliação.

Entrega do Desafio

- [x] O código deve estar hospedado em um repositório público (GitHub).
- [x] Incluir um arquivo README.md com:
  - [x] Instruções para executar o projeto (instalação de dependências, execução do servidor e configuração).
  - [x] Explicação básica sobre a solução e arquitetura utilizada.
  - [x] Bônus (não obrigatório, mas valorizado)
    - [x] Testes Automatizados: Crie testes unitários e/ou de integração para demonstrar a robustez do código.
    - [x] Uso de Docker: Utilize containers Docker para facilitar a configuração e execução do ambiente de desenvolvimento.
    - [x] Documentação Alternativa: Caso deseje, inclua uma documentação dos endpoints (ex.: Postman Collection ou similar).

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
