# Guia de Contribuição

Para manter nosso histórico organizado e legível, adotamos o padrão **Conventional Commits**.

## Padrão de Commits

```
<tipo>(<escopo opcional>): <descrição breve>

[corpo opcional - descrição mais detalhada]
```

### Tipos (`<tipo>`)

*   **`feat`**: Uma nova funcionalidade (ex: nova página, novo componente).
*   **`fix`**: Correção de um bug.
*   **`docs`**: Alterações apenas na documentação (README, comentários).
*   **`style`**: Alterações que não afetam o significado do código (espaços em branco, formatação, ponto e vírgula ausente, etc).
*   **`refactor`**: Uma alteração de código que não corrige um bug nem adiciona uma funcionalidade (melhoria de performance, limpeza de código).
*   **`test`**: Adição de testes ausentes ou correção de testes existentes.
*   **`chore`**: Alterações no processo de build ou ferramentas auxiliares e bibliotecas (ex: atualização de dependências, configuração do Astro).

### Exemplos

*   `feat: adiciona componente de newsletter no rodapé`
*   `fix(nav): corrige link quebrado na barra de navegação`
*   `docs: atualiza instruções de instalação no README`
*   `chore: atualiza astro para a versão 5.0`
*   `style: formata arquivos css`

## Fluxo de Trabalho

1.  Crie uma branch para sua alteração: `git checkout -b feat/minha-nova-feature`
2.  Faça suas alterações e commite seguindo o padrão acima.
3.  Envie suas alterações.
