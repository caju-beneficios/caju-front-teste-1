
# Caju Front End Teste

Esse é um teste para você demonstrar suas experiencia como front end, a aplicação basicamente se divide em duas telas, o `Dashboard` e um `Formulário`.

O `Dashboard` mostra todas as admissões criadas, com as opções de Aprovar, reprovar, e excluir.

O `Formulário` mostra um formulário simples, que será a formulário que irá popular o nosso dashboard.


## Apresentanção do problema

Voce deverá melhorar e implementar algumas funcionalidades nesse projeto.

O desafio é melhorar a organização do projeto, refatorar o código e implementar algumas regras e novas funcionalidades(logo abaixo)

## Funcionalidades e regras esperadas.


### Dashboard

- Atualizar os dados (refetch) ao clicar no icone de atualizar
- Filtrar os cards por coluna, usando o status.
- Implementar `PUT` ao clicar em Reprovar e alterar o status para `REPROVED`
- Implementar `PUT` ao clicar em Aprovar e alterar o status para `APPROVED`
- Implementar `DELETE` ao clicar no lixeira no card.
- Implementar um loading na tela ao realizar requisições.


#### Regras de negócio

- O botão de `Reprovar` e `Aprovar` só deve aparecer em registrations com status `REVIEW` 
- O botão `Revisar novamente` só deve aparecer em registration com status `REPROVED` ou `APPROVED`

### Formulário

- Implementar validação no campo de `email` para que aceite apenas emails válidos
- Implementar `POST` ao preencher todos os campos corretamentes.
- Redirecionar ao `/dashboard` ao criar uma nova registration.

## Desenvolvimento


