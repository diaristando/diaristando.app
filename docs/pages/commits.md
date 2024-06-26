# Política de Commits

## Introdução

A política de commits adotada neste projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0). Esse padrão define um conjunto de regras simples para criar um histórico de commits explícito e significativo, facilitando a automação de processos e a geração de logs de mudanças.

## Tipos de Commits

Abaixo estão os tipos de commits que devem ser usados, conforme definido pelo Conventional Commits, junto com a imagem explicativa:

<img src="/assets/commits.webp" alt="Tipos de Commits" width="600" height="400" />

### `feat`

- **Descrição**: Usado para a criação de uma nova funcionalidade.
- **Exemplo**: `feat: adiciona autenticação de usuário`

### `fix`

- **Descrição**: Usado para corrigir algum problema no código e/ou funcionalidade (bugs).
- **Exemplo**: `fix: corrige erro na validação de e-mail`

### `docs`

- **Descrição**: Usado para atualizar documentações, como o arquivo `README.md`.
- **Exemplo**: `docs: atualiza as instruções de configuração`

### `style`

- **Descrição**: Usado para atualizar estilos e arquivos de estilização, como formatação, ponto e vírgula, etc. (sem mudanças de funcionalidade).
- **Exemplo**: `style: formata o código com eslint`

### `refactor`

- **Descrição**: Usado para refatoração de código sem alterar sua funcionalidade, apenas melhoria.
- **Exemplo**: `refactor: otimiza a lógica de autenticação`

### `perf`

- **Descrição**: Usado para atualizar e/ou configurar performance.
- **Exemplo**: `perf: melhora o tempo de carregamento da página inicial`

### `test`

- **Descrição**: Usado para criação, ajustes e refatoração de testes.
- **Exemplo**: `test: adiciona testes unitários para o serviço de login`

### `build`

- **Descrição**: Usado para atualizar ou modificar ferramentas de build (como a configuração de um ambiente de desenvolvimento).
- **Exemplo**: `build: adiciona webpack para build de produção`

### `ci`

- **Descrição**: Usado para atualizar arquivos e configurações de CI (como a configuração de um pipeline de CI/CD).
- **Exemplo**: `ci: configura pipeline no GitHub Actions`

### `chore`

- **Descrição**: Usado quando não há alterações no código fonte, mas sim no ambiente de desenvolvimento (ex: instalação de libs, configuração do `package.json`, configuração de Docker, DB, etc).
- **Exemplo**: `chore: atualiza dependências no package.json`

## Formato dos Commits

Cada mensagem de commit deve seguir o seguinte formato:

```
<tipo>[escopo opcional]: <descrição>
[corpo opcional]
[rodapé opcional]
```

Exemplo:
```
feat(auth): adiciona autenticação JWT

Adiciona suporte para autenticação via tokens JWT.
Inclui middleware para validação de tokens nas rotas protegidas.

BREAKING CHANGE: as rotas de login agora retornam um token JWT
```

## Conclusão

Seguir a política de commits descrita acima ajudará a manter um histórico de commits limpo e organizado, facilitando a colaboração e a automação de processos no projeto.

## Referências

- [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0)