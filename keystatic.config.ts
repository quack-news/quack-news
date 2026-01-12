import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'quack-news/quack-news.github.io',
  },
  collections: {
    noticias: collection({
      label: 'Notícias',
      slugField: 'title',
      path: 'src/content/noticias/*/',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descrição Curta', multiline: true }),
        pubDate: fields.date({ label: 'Data de Publicação', defaultValue: { kind: 'today' } }),
        author: fields.relationship({
          label: 'Autor',
          collection: 'autores',
          validation: { isRequired: true }
        }),
        category: fields.text({ label: 'Categoria', defaultValue: 'notícia' }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: props => props.value }
        ),
        image: fields.object({
          src: fields.image({
            label: 'Imagem de Capa',
            directory: 'src/content/noticias',
            publicPath: './',
          }),
          alt: fields.text({ label: 'Texto Alternativo da Imagem' }),
        }),
        content: fields.document({
          label: 'Conteúdo',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/content/noticias',
            publicPath: './',
          },
        }),
      },
    }),
    autores: collection({
      label: 'Autores',
      slugField: 'name',
      path: 'src/content/autores/*',
      format: { data: 'toml' },
      schema: {
        name: fields.slug({ name: { label: 'Nome' } }),
        bio: fields.text({ label: 'Biografia', multiline: true }),
        avatar: fields.image({
            label: 'Avatar',
            directory: 'src/content/autores/avatars',
            publicPath: '/src/content/autores/avatars/', // Caminho absoluto para visualização no admin
        }),
      },
    }),
  },
});
