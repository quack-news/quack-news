# Quack News

> Um agregador de notícias simples desenvolvido com Astro.

Este projeto é um site estático focado em performance, utilizando [Astro](https://astro.build/) e [Svelte](https://svelte.dev/).

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

*   **Node.js**: Certifique-se de ter o Node.js instalado (versão 18 ou superior recomendada).
*   **pnpm**: Este projeto utiliza `pnpm` como gerenciador de pacotes (devido ao arquivo `pnpm-lock.yaml`). Se não tiver, você pode instalar com `npm install -g pnpm` ou usar `npm` mesmo.

### Instalação

1.  Clone o repositório (se ainda não o fez):
    ```bash
    git clone https://github.com/seu-usuario/quack-news.git
    cd quack-news
    ```

2.  Instale as dependências:
    ```bash
    pnpm install
    # ou, se preferir npm:
    # npm install
    ```

### Executando em Desenvolvimento

Para iniciar o servidor de desenvolvimento local:

```bash
pnpm dev
```

O site estará disponível em `http://localhost:4321`.

## 🛠️ Scripts Disponíveis

*   `pnpm dev`: Inicia o servidor de desenvolvimento.
*   `pnpm build`: Gera a versão de produção do site na pasta `dist/`.
*   `pnpm preview`: Visualiza a versão de produção localmente (após o build).
*   `pnpm astro`: Executa comandos da CLI do Astro (ex: `pnpm astro add tailwind`).

## 🔄 Como Atualizar

Para atualizar o projeto e suas dependências:

1.  **Baixe as alterações mais recentes do código:**
    ```bash
    git pull origin main
    ```

2.  **Atualize as dependências do projeto:**
    Isso garante que você tenha as versões mais recentes das bibliotecas, conforme definido no `package.json`.
    ```bash
    pnpm install
    ```
    
    Se quiser atualizar os pacotes para versões mais novas do que as definidas no lockfile:
    ```bash
    pnpm update
    ```

## 🤝 Contribuição

Consulte o arquivo [CONTRIBUTING.md](./CONTRIBUTING.md) para ver nosso guia de estilo de commits e como contribuir.