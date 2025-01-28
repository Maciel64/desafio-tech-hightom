## Desafio Técnico – Desenvolvedor Back-End (NestJS + TypeORM)

Descrição do Desafio
Você foi contratado para desenvolver uma funcionalidade de processamento de pedidos para um sistema de e-commerce. A aplicação deve ser desenvolvida utilizando NestJS, TypeORM e seguir os princípios da Clean Architecture.

O objetivo principal é garantir que os pedidos sejam registrados e processados corretamente, com suporte a filas para processamento assíncrono. Além disso, o sistema deve permitir a consulta de pedidos com filtros.

Requisitos do Desafio
Registrar um Pedido:
Ao receber os dados de um pedido (produto, quantidade, preço e informações do cliente), ele deve ser salvo no banco de dados.

Processamento do Pedido:
Após o registro, o pedido deve ser enviado para uma fila (utilizando Bull) e processado de forma assíncrona. Durante o processamento:

Atualize o status do pedido para "Processado".
Registre um log de processamento, contendo a data e hora da finalização.
Consultar Pedidos:
Desenvolva um endpoint que permita listar pedidos, com os seguintes filtros opcionais:

- Status: Filtrar por status do pedido (ex.: "Pendente", "Processado").
- Data de Criação: Filtrar pedidos por intervalo de datas.

### Requisitos Técnicos

- NestJS: Para a estrutura do projeto.
- TypeORM: Para modelagem e manipulação do banco de dados.
- Filas: Utilize uma biblioteca como Bull ou RabbitMQ para o processamento assíncrono.
- Clean Architecture: A aplicação deve estar estruturada seguindo os princípios da Clean Architecture (use cases, repositórios, entidades, etc.).
- Endpoints REST: Desenvolva endpoints para:
  - Registrar pedidos.
  - Consultar pedidos com filtros opcionais.
  - Critérios de Avaliação

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
O código deve estar hospedado em um repositório público (GitHub).
Incluir um arquivo README.md com:
Instruções para executar o projeto (instalação de dependências, execução do servidor e configuração).
Explicação básica sobre a solução e arquitetura utilizada.
Bônus (não obrigatório, mas valorizado)
Testes Automatizados: Crie testes unitários e/ou de integração para demonstrar a robustez do código.
Uso de Docker: Utilize containers Docker para facilitar a configuração e execução do ambiente de desenvolvimento.
Documentação Alternativa: Caso deseje, inclua uma documentação dos endpoints (ex.: Postman Collection ou similar).

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

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
