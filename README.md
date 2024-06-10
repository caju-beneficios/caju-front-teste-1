
# Caju Front End Teste

Esse é um teste para você demonstrar suas experiencia como front end, a aplicação basicamente se divide em duas telas, o `Dashboard` e um `Formulário`.

O `Dashboard` mostra todas as admissões criadas, com as opções de Aprovar, reprovar, e excluir.

<img width="1442" alt="Screenshot 2024-06-10 at 5 18 59 PM" src="https://github.com/caju-beneficios/caju-front-teste-1/assets/31169925/a9fb5e0b-9f62-4c6c-b356-e99aba7bb7a6">

O `Formulário` mostra um formulário simples, que será a formulário que irá popular o nosso dashboard.

<img width="1444" alt="Screenshot 2024-06-10 at 5 19 26 PM" src="https://github.com/caju-beneficios/caju-front-teste-1/assets/31169925/b51bb940-45a2-4672-b465-3001b1ff8ff7">


## Apresentanção do problema

Voce deverá melhorar e implementar algumas funcionalidades nesse projeto.

O desafio é melhorar a organização do projeto, refatorar o código e implementar algumas regras e novas funcionalidades(logo abaixo).

Sinta-se a vontade para criar novas pastas, novos utils, custom hooks, o que achar melhor para deixar o projeto mais organizado e atiginr os requisitos abaixo.

## Funcionalidades e regras esperadas.


### Dashboard




  
- Filtrar os cards por coluna, usando o status.
- Implementar `PUT` ao clicar em Reprovar e alterar o status para `REPROVED`
- Implementar `PUT` ao clicar em Aprovar e alterar o status para `APPROVED`
- Implementar `DELETE` ao clicar no lixeira no card.
- Implementar um loading na tela ao realizar requisições.
- Atualizar os dados (refetch) ao clicar no icone de atualizar
 <br/>
  <img width="268" alt="Screenshot 2024-06-10 at 5 13 47 PM" src="https://github.com/caju-beneficios/caju-front-teste-1/assets/31169925/d7dcd73a-56a9-4f28-aaab-e98a65781f76">


#### Regras de negócio

- O botão de `Reprovar` e `Aprovar` só deve aparecer em registrations com status `REVIEW` 
- O botão `Revisar novamente` só deve aparecer em registration com status `REPROVED` ou `APPROVED`

### Formulário

- Implementar validação no campo de `email` para que aceite apenas emails válidos
- Implementar `POST` ao preencher todos os campos corretamentes.
- Redirecionar ao `/dashboard` ao criar uma nova registration.

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

