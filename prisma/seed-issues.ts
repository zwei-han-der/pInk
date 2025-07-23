import { prisma } from '../src/lib/db';

async function main() {
    await prisma.issue.createMany({
        data: [
        {
            title: "Fatale #1",
            issueNumber: 1,
            year: 2012,
            size: "17.40 MB",
            series: "Fatale (2012)",
            genres: "Crime",
            link: "assets/uploads/fatale/fatale-01.cbr",
            cover: "public/assets/covers/fatale/fatale-01.webp",
            synopsis: "Um repórter em 2012 descobre um segredo que o leva ao caminho mais sombrio que se possa imaginar... a uma mulher sedutora que está foragida desde 1935, um mafioso que pode ser um monstro demoníaco imortal e as histórias de todos os homens condenados que foram pegos em sua luta de décadas.",
            comicId: 3,
            idiomId: 1,
        },
        {
            title: "Fatale #2",
            issueNumber: 2,
            year: 2012,
            size: "16.30 MB",
            series: "Fatale (2012)",
            genres: "Crime",
            link: "assets/uploads/fatale/fatale-02.cbr",
            cover: "public/assets/covers/fatale/fatale-02.webp",
            synopsis: "A segunda edição da série mais quente de 2012 está aqui! Nos tempos modernos, Nicholas Lash busca respostas sobre a mulher misteriosa que arruinou sua vida, enquanto, em meados da década de 1950, o repórter Dominic Raines é levado pelo mesmo caminho assassino... A premiada equipe de Brubaker e Phillips mantém o calor em alta neste épico horror noir.",
            comicId: 3,
            idiomId: 1,
        },
    ]
    });

    console.log('✅ Issues de Fatale (2012) criadas com sucesso!');
}

main()
    .catch((e) => {
        console.error('❌ Erro ao criar issues:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });