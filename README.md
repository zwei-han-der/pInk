
# pInk

pInk é um site de catálogo de quadrinhos, combinando Next.js (App Router), Prisma ORM e frontend estático moderno. O sistema integra banco de dados, API e fallback estático para garantir robustez e experiência fluida.

## Funcionalidades

- **Listagem de quadrinhos**: Exibe cards de todos os quadrinhos cadastrados, com capa, título, ano, idioma e número de edições.
- **Busca instantânea**: Campo de busca filtra quadrinhos por título em tempo real na tela inicial. Nas páginas de detalhes, busca por edições específicas (número, ano, título).
- **Download de edições**: Cada edição pode ser baixada diretamente pelo usuário, com link seguro e tamanho do arquivo exibido.
- **Modal de detalhes**: Visualização rápida de informações completas de uma edição em modal, sem sair da página.
- **API RESTful**: Endpoints para listagem de quadrinhos, detalhes, edições e download, usando Next.js API routes e Prisma.
- **Integração com banco de dados**: Utiliza Prisma ORM para persistência e consulta eficiente de quadrinhos, edições, autores, editoras e idiomas.
- **Seed automatizado**: Scripts para popular banco de dados com quadrinhos, edições e autores.
- **Filtros e ordenação**: Edições ordenadas por número, quadrinhos por título.
- **Mensagens de erro e loading amigáveis**: Feedback visual para carregamento, erros de API e ausência de resultados.
- **Design responsivo**: Interface adaptada para desktop e mobile.

## Tecnologias

- Next.js (App Router)
- Prisma ORM
- HTML, CSS, JS estáticos
- API RESTful (Next.js)
- Banco de dados PostgreSQL
- Redis para cache

---

Desenvolvido por Zweihander.
