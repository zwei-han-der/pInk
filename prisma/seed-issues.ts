import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
    await prisma.issue.createMany({
        data: [
        {
            title: "Incognito #1",
            issueNumber: 1,
            year: 2008,
            size: "11.50 MB",
            series: "Incognito (2008)",
            genres: "Crime, Super Herói",
            link: "/uploads/incognito/incognito-01.cbr",
            cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-8249848.jpg?1726888630",
            synopsis: "INCOGNITO - Uma mistura de noir e super-heróis. Dos criadores de best-sellers Ed Brubaker (A Morte do Capitão América) e Sean Phillips (Marvel Zombies), com cores de Val Staples. Continuando a tradição de uma única edição de Criminal, cada edição de Incognito contém mais histórias, bem como artigos sobre pulp e noir, e informações sobre os bastidores!",
            comicId: 2,
            idiomId: 1,
        },
        {
            title: "Incognito #2",
            issueNumber: 2,
            year: 2009,
            size: "12.30 MB",
            series: "Incognito (2008)",
            genres: "Crime, Super Herói",
            link: "/uploads/incognito/incognito-02.cbr",
            cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-6648931.jpg?1726888738",
            synopsis: "Conheça o Black Death. Há cinco anos, alguém denunciou esse senhor do crime superpoderoso e, desde então, ele vem cumprindo pena pesada. Então, o que ele fará quando descobrir que um antigo capanga que deveria estar MORTO está vivendo no programa de proteção a testemunhas durante todo esse tempo? Dica: ele vai matar um monte de gente.",
            comicId: 2,
            idiomId: 1,
        },
        {
            title: "Incognito #3",
            issueNumber: 3,
            year: 2009,
            size: "12.30 MB",
            series: "Incognito (2008)",
            genres: "Crime, Super Herói",
            link: "/uploads/incognito/incognito-03.cbr",
            cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-2542431.jpg?1726888806",
            synopsis: "A PREMIADA E CAMPEÃ DE VENDAS EQUIPE DE BRUBAKER E PHILLIPS MOSTRA POR QUE É BOM SER MAU! Seu nome é Ava Destruction e ela é o tipo de garota mais “viva rápido, morra jovem e deixe um cadáver bonito” que você já conheceu. Ava, uma das principais agentes da Peste Negra e uma mulher que está sempre com 16 anos, é enviada para o programa de proteção a testemunhas atrás do nosso herói e, embora ela seja bonita... o que ela deixa em seu rastro é tudo menos isso.",
            comicId: 2,
            idiomId: 1,
        },
        {
            title: "Incognito #4",
            issueNumber: 4,
            year: 2009,
            size: "11.60 MB",
            series: "Incognito (2008)",
            genres: "Crime, Super Herói",
            link: "/uploads/incognito/incognito-04.cbr",
            cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-4633765.jpg?1726889084",
            synopsis: "O caos mascarado de Zack não passou despercebido pelas autoridades ou pelos bandidos dos quais ele estava se escondendo. Agora, Zoey Zeppelin, neta do lendário Professor Zeppelin, está aqui para descobrir de que lado ele está, mesmo que tenha que matá-lo para ter certeza.",
            comicId: 2,
            idiomId: 1,
        },
        {
            title: "Incognito #5",
            issueNumber: 5,
            year: 2010,
            size: "12.50 MB",
            series: "Incognito (2008)",
            genres: "Crime, Super Herói",
            link: "/uploads/incognito/incognito-05.cbr",
            cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-8274607.jpg?1726888981",
            synopsis: "Doc Lester é o mais perfeito cientista louco e pode ser a única pessoa que sabe a verdade sobre Zack Overkill e seu irmão gêmeo. É uma verdade pela qual Zack logo terá que matar, pois todos os lados estão se aproximando dele.",
            comicId: 2,
            idiomId: 1,
        },
        {
            title: "Incognito #6",
            issueNumber: 6,
            year: 2010,
            size: "15.10 MB",
            series: "Incognito (2008)",
            genres: "Crime, Super Herói",
            link: "/uploads/incognito/incognito-06.cbr",
            cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-7285223.jpg?1726889025",
            synopsis: "A CONCLUSÃO CONTUNDENTE DA HISTÓRIA DE SUPERVILÕES MAIS DISTORCIDA DE TODOS OS TEMPOS! Tudo termina aqui. Todo o planejamento e os esquemas de Zack Overkill o colocaram frente a frente com seu próprio passado, e agora ele é o único homem que pode salvar o mundo... mas será que ele se importa o suficiente para tentar?",
            comicId: 2,
            idiomId: 1,
        },
    ]
    });

    console.log('✅ Issues de Incognito(2008) criadas com sucesso!');
}

main()
    .catch((e) => {
        console.error('❌ Erro ao criar issues:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });