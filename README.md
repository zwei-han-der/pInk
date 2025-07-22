# pInk

Este projeto é um site de quadrinhos desenvolvido com Next.js, Prisma e frontend estático. Ele permite visualizar, pesquisar e baixar edições de diferentes HQs, com páginas dinâmicas e integração a banco de dados.

## Funcionalidades
- ✅ Listagem de quadrinhos
- ⏳ Busca por autor, editora, ano e título
- ⏳ Visualização de detalhes e edições
- ✅ Download de arquivos das HQs

## Tecnologias
- Next.js (App Router)
- Prisma ORM
- HTML, CSS, JS estáticos

## Como rodar localmente
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Configure o banco de dados e variáveis de ambiente (`.env`)
3. Rode as migrações e seeds do Prisma:
   ```sh
   npx prisma migrate deploy
   npx prisma db seed
   ```
4. Inicie o servidor:
   ```sh
   npm run dev
   ```

Acesse em [http://localhost:3000](http://localhost:3000)

---

Desenvolvido por Gustavo.
