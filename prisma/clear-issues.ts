import prisma from '../src/lib/db';

async function clearIssues() {
    try {
        const deletedCount = await prisma.issue.deleteMany({});
        console.log(`✅ ${deletedCount.count} issues removidos com sucesso!`);
    } catch (error) {
        console.error('❌ Erro ao limpar issues:', error);
    } finally {
        await prisma.$disconnect();
    }
}

clearIssues(); 