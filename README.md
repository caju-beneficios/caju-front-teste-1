
# Caju Front End Teste

Esse é um teste para você demonstrar suas experiencia como front end, a aplicação basicamente se divide em duas telas, o `Dashboard` e um `Formulário`.

O `Dashboard` mostra todas as admissões criadas, com as opções de Aprovar, reprovar, e excluir.

<img width="1442" alt="Screenshot 2024-06-10 at 5 18 59 PM" src="https://github.com/caju-beneficios/caju-front-teste-1/assets/31169925/a9fb5e0b-9f62-4c6c-b356-e99aba7bb7a6">

O `Formulario` exibe um formulário simples que será utilizado para preencher o dashboard com os dados.

<img width="1444" alt="Screenshot 2024-06-10 at 5 19 26 PM" src="https://github.com/caju-beneficios/caju-front-teste-1/assets/31169925/b51bb940-45a2-4672-b465-3001b1ff8ff7">


## Apresentanção do problema

O desafio é melhorar a organização do projeto, refatorar o código e implementar algumas regras e funcionalidades(logo abaixo).

Sinta-se a vontade para criar novas pastas, novos utils, contextos, custom hooks, o que achar melhor para deixar o projeto mais organizado e atigir as especificações abaixo.

## Especificações

### Dashboard
  
- Filtrar os cards por coluna, usando o status.
- Implementar `PUT` ao clicar em Reprovar e alterar o status para `REPROVED`
- Implementar `PUT` ao clicar em Aprovar e alterar o status para `APPROVED`
- Implementar `PUT` ao clicar em Revisar novamente e alterar o status para `REVIEW`
- Implementar `GET` ao carregar a pagina e ao fazer pequisa por `CPF`
- Implementar `DELETE` ao clicar no lixeira no card.
- Implementar um loading na tela ao realizar requisições.
- Realizar a requisição automaticamente ao preencher o cpf completo
- Atualizar os dados (refetch) ao clicar no icone de atualizar

 <br/>
  <img width="268" alt="Screenshot 2024-06-10 at 5 13 47 PM" src="https://github.com/caju-beneficios/caju-front-teste-1/assets/31169925/d7dcd73a-56a9-4f28-aaab-e98a65781f76">


### Formulário

- Implementar validação no campo de `email` para que aceite apenas emails válidos
- Implementar validação no campo `nome completo` para que aceite pelo menos um espaço, no mínimo duas letras, e que a primeira letra não seja um número.
- Implementar validação no campo CPF para aceitar apenas CPFs válidos e adicionar uma máscara de CPF ao campo.
- Implementar `POST` ao preencher todos os campos corretamentes.
- Redirecionar ao `/dashboard` ao criar uma nova registration.

## Regras de negócio

- Implementar tipagem correta e enums em TypeScript.
- Todas as requisições devem ter modal de confirmação da ação
- Todas as requisições devem aparecer uma notificação de sucesso ou erro
- O botão de `Reprovar` e `Aprovar` só deve aparecer em registrations com status `REVIEW` 
- O botão `Revisar novamente` só deve aparecer em registration com status `REPROVED` ou `APPROVED`

## API
Você consumirá uma API mockada localmente, que será executada utilizando o json-server. Para mais informações consulte a [documentação](https://github.com/typicode/json-server/).

Exemplo de Requisição:

```
POST http://localhost:3000/registrations
Content-Type: application/json

{
  "admissionDate": "23/10/2023",
  "email": "maria@caju.com.br",
  "employeeName": "Maria Silva",
  "status": "REVIEW",
  "cpf": "12345678901"
}
```

## Extras (opcional)

- Testes de Integração e/ou End-to-End (E2E)
- Documentação detalhada utilizando Storybook e Docusaurus
- Configuração de CI/CD com deploy automatizado

## Desenvolvimento

```shell
git clone https://github.com/caju-beneficios/caju-front-teste-1.git
cd caju-front-test-1
yarn 
yarn dev
```

Abra outro terminal e execute: 
```shell
yarn init:db
```

Se tude tiver dado certo as seguintes portas estarão disponiveis:
<br/>

Aplicação http://localhost:3001/
<br/>
Json Web Server http://localhost:3000/
