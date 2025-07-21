const comics = [
    {
        title: "Fatale #1",
        issues: "1",
        year: "2012",
        size: "17.04 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-8750565.jpg?1461230445",
        synopsis: "Um repórter em 2012 descobre um segredo que o leva ao caminho mais sombrio que se possa imaginar... a uma mulher sedutora que está foragida desde 1935, um mafioso que pode ser um monstro demoníaco imortal e as histórias de todos os homens condenados que foram pegos em sua luta de décadas.",
    },
    {
        title: "Fatale #2",
        issues: "2",
        year: "2012",
        size: "16.30 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-9265976.jpg?1461230462",
        synopsis: "A segunda edição da série mais quente de 2012 está aqui! Nos tempos modernos, Nicholas Lash busca respostas sobre a mulher misteriosa que arruinou sua vida, enquanto, em meados da década de 1950, o repórter Dominic Raines é levado pelo mesmo caminho assassino... A premiada equipe de Brubaker e Phillips mantém o calor em alta neste épico horror noir.",
    },
    {
        title: "Fatale #3",
        issues: "3",
        year: "2012",
        size: "16.91 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-9425236.jpg?1461230554",
        synopsis: "O que o detetive Walt Booker sacrificará e a quais deuses? Ele está buscando redenção ou vingança? Na terceira parte da nova obra-prima de terror/noir de BRUBAKER e PHILLIPS, os fios do primeiro arco se entrelaçam... em um nó em volta do pescoço de um policial corrupto na São Francisco do final dos anos 50.",
    },
    {
        title: "Fatale #4",
        issues: "4",
        year: "2012",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-2873288.jpg?1461230569",
        synopsis: "O sucesso surpresa de 2012 continua! O primeiro arco de FATALE se encaminha perigosamente para seu final esmagador... todas as peças estão no lugar, Josephine e seu amante estão preparados para executar seu plano, mas apenas um deles sabe com que tipo de homens (ou demônios) estão lidando. Nada sairá como planejado, e haverá sangue.",
    },
    {
        title: "Fatale #5",
        issues: "5",
        year: "2012",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://cdn.imagecomics.com/assets/i/releases/18497/fatale-5_3b2230cfcf.jpg",
        synopsis: "O sucesso surpresa de 2012 continua! O primeiro arco de FATALE se encaminha perigosamente para seu final esmagador... todas as peças estão no lugar, Josephine e seu amante estão preparados para executar seu plano, mas apenas um deles sabe com que tipo de homens (ou demônios) estão lidando. Nada sairá como planejado, e haverá sangue.",
    },
    {
        title: "Fatale #6",
        issues: "6",
        year: "2012",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-5568030.jpg?1461230601",
        synopsis: "O segundo arco de FATALE começa aqui! Nos tempos modernos, Nicolas Lash busca mais informações sobre a misteriosa Josephine... enquanto em meados da década de 1970, em Los Angeles, Jo está tentando estabelecer uma nova vida. Mas esta é a Los Angeles pós-amor livre, pós-Família Manson, e as colinas de Hollywood têm seus próprios segredos obscuros. A obra-prima de horror noir de BRUBAKER e PHILLIPS continua!",
    },
    {
        title: "Fatale #7",
        issues: "7",
        year: "2012",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-4245760.jpg?1461230621",
        synopsis: "A série ocultista noir mais vendida de BRUBAKER e PHILLIPS continua seu segundo arco, quando os segredos obscuros de Los Angeles de meados dos anos 70 começam a se infiltrar na nova vida de Josephine. Drogas, sexo, cultos, fama e assassinato, todos caminham lado a lado à sombra de forças demoníacas.",
    },
    {
        title: "Fatale #8",
        issues: "8",
        year: "2012",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-4021040.jpg?1461230631",
        synopsis: "É o ponto de virada do segundo arco da série FATALE de BRUBAKER & PHILLIPS! Qual é o plano secreto de Josephine e o que ela tem feito durante todos esses anos em fuga, desde os anos 50 até o final dos anos 70? Será que o monstro que a perseguiu a maior parte de sua vida voltou?",
    },
    {
        title: "Fatale #9",
        issues: "9",
        year: "2012",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-9939188.jpg?1461230642",
        synopsis: "O segundo arco de FATALE, “The Devil's Business”, se aproxima do clímax quando Jo sai do esconderijo, pronta para enfrentar o Bishop ressuscitado, enquanto seus cultistas vasculham a Hollywood dos anos 1970 em busca dela e de seu novo amante.",
    },
    {
        title: "Fatale #10",
        issues: "10",
        year: "2012",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-2718718.jpg?1461230657",
        synopsis: "O segundo arco de FATALE chega à sua conclusão brutal!Segredos são revelados e novos mistérios nascem, enquanto nossa estrela Femme Fatale passa de vítima a heroína!",
    },
    {
        title: "Fatale #11",
        issues: "11",
        year: "2013",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-7876384.jpg?1461230690",
        synopsis: "Esta é a primeira de quatro edições autônomas do FATALE FLASHBACK, e é o lugar perfeito para novos leitores embarcarem! Bem-vindo à Califórnia dos anos 1930, onde é difícil ser uma garota em fuga. Testemunhe os primeiros dias de Josephine com a maldição da femme fatale e descubra alguns de seus segredos.",
    },
    {
        title: "Fatale #12",
        issues: "12",
        year: "2013",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-6917345.jpg?1461230724",
        synopsis: "A maldição da Femme Fatale data de muito antes de Josephine. Agora, voltamos aos tempos medievais e à história de uma jovem guerreira que enfrenta um horror indescritível que reverbera através dos tempos! Essa é outra edição autônoma do FATALE FLASHBACK e o lugar perfeito para os novos leitores começarem!",
    },
    {
        title: "Fatale #13",
        issues: "13",
        year: "2013",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-3862767.jpg?1461352456",
        synopsis: "Prepare-se para ser cativado pelo fascínio da Femme Fatale no oeste selvagem, uma adição emocionante para os fãs de horror e noir em seus westerns spaghetti. Outra edição autônoma de FATALE FLASHBACK! Este é o lugar perfeito para novos leitores embarcarem!",
    },
    {
        title: "Fatale #14",
        issues: "14",
        year: "2013",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-3169390.jpg?1461352513",
        synopsis: "A última edição autônoma do FATALE FLASHBACK é a Segunda Guerra Mundial! Cultistas e monstros nazistas estão perseguindo Jo, que busca respostas e encontra o Sr. Bishop cara a cara pela primeira vez.",
    },
    {
        title: "Fatale #15",
        issues: "15",
        year: "2013",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-9196877.jpg?1688605825",
        synopsis: "UM NOVO ARCO COMEÇA! FATALE finalmente chega aos tempos modernos, quando a pesquisa de Nicolas Lash em sua cela de prisão atrai velhos inimigos. E ele não tem mais para onde fugir.",
    },
    {
        title: "Fatale #16",
        issues: "16",
        year: "2013",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-3633557.jpg?1461352558",
        synopsis: "Nicolas está na trilha dos segredos de Josephine, e eles o levam de volta à Seattle dos anos 90, onde uma banda de rock, uma gangue de ladrões de banco e um assassino em série errante circulam em torno de uma mulher misteriosa e sem memória...",
    },
    {
        title: "Fatale #17",
        issues: "17",
        year: "2013",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-4362528.jpg?1461352571https://s3.amazonaws.com/comicgeeks/comics/covers/large-4362528.jpg?1461352571",
        synopsis: "O Bishop desapareceu em Los Angeles no final dos anos 70, em um grito ardente, mas ele nunca foi embora de verdade, e agora ele finalmente tem o cheiro de Jo novamente.",
    },
    {
        title: "Fatale #18",
        issues: "18",
        year: "2013",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-6441406.jpg?1461352585",
        synopsis: "INDICADA A MAIS PRÊMIOS EISNER 2013 DO QUE QUALQUER OUTRA HISTÓRIA EM QUADRINHOS! Tudo dá errado quando Josephine aparece em um videoclipe de uma banda de Seattle, e seu efeito sobre aqueles que a desejam se torna selvagem, enquanto o arco mais emocionante de Fatale continua.",
    },
    {
        title: "Fatale #19",
        issues: "19",
        year: "2014",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-8202852.jpg?1461352637",
        synopsis: "Rock 'n' roll, roubo e assassinato ritual se chocam na Seattle dos anos 90, quando o quarto arco de FATALE chega a uma conclusão devastadora... e a identidade secreta do ajudante atual de Nic é revelada. Será que ele é quem diz ser?",
    },
    {
        title: "Fatale #20",
        issues: "20",
        year: "2014",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-9443833.jpg?1461352685",
        synopsis: "NOVO ARCO DE HISTÓRIA! Nicolas Lash está na maior enrascada possível, e só há uma pessoa que pode salvá-lo agora... o problema é que a enrascada é problema dela.",
    },
    {
        title: "Fatale #21",
        issues: "21",
        year: "2014",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-6970195.jpg?1461352700",
        synopsis: "Parte dois do arco mais intenso de FATALE até agora! Nicolas Lash e Josephine finalmente se reencontram, e tudo o que sabemos sobre a Fatale é virado de cabeça para baixo... ",
    },
    {
        title: "Fatale #22",
        issues: "22",
        year: "2014",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-3785938.jpg?1461352712",
        synopsis: "A história da vida do homem-monstro chamado The Bishop.",
    },
    {
        title: "Fatale #23",
        issues: "23",
        year: "2014",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-4629169.jpg?1461352726",
        synopsis: "A edição mais estranha de FATALE até agora, quando Nicolas Lash finalmente descobre os últimos segredos de Josephine, e o universo nunca mais será o mesmo.",
    },
    {
        title: "Fatale #24",
        issues: "24",
        year: "2014",
        size: "16.35 MB",
        series: "Fatale",
        genres: "Crime",
        link: "",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-2962704.jpg?1461352742",
        synopsis: "TUDO TERMINA AQUI! A última edição extra longa de FATALE! Há tanta história que precisávamos de muito mais espaço. Os últimos segredos de Josephine serão revelados? Haverá muita tragédia? SIM!",
    },
];

const comicCardsContainer = document.getElementById('cards');
const nameSearch = document.getElementById('search');

function renderComics(comicsToRender) {
    comicCardsContainer.innerHTML = '';
    comicsToRender.forEach(comic => {
        const card = document.createElement('button');
        card.className = 'card';
        card.innerHTML = `
            <img src="${comic.cover}" alt="${comic.title} Cover">
            <div class="card-text">
                <h2>${comic.title}</h2>
                <p class="issue-year"><strong>Edição:</strong> ${comic.issues} | <strong>Lançamento:</strong> ${comic.year} | <strong>Tamanho:</strong> ${comic.size}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(comic));
        comicCardsContainer.appendChild(card);
    });
}

function openModal(comic) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-container">
            <div  class="modal-img">
                <img src="${comic.cover}" alt="${comic.title} Cover">
            </div>
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="modal-content-header">
                    <h2>${comic.title}</h2>
                    <a href="${comic.link}" target="_blank">Download (${comic.size})</a>
                </div>
                <div class="modal-content-synopsis">
                    <h2>Synopsis</h2> <hr>
                    <p>${comic.synopsis}</p>
                </div>
                <div class="modal-content-text">
                    <h2>Details</h2> <hr>
                    <p><strong>Edição:</strong> ${comic.issues}</p>
                    <p><strong>Série:</strong> ${comic.series}</p>
                    <p><strong>Gênero(s):</strong> ${comic.genres}</p>
                    <p><strong>Lançamento:</strong> ${comic.year}</p>
                    <p><strong>Idioma:</strong> ${comic.idiom}</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function filterComics() {
    const searchTerm = nameSearch.value.toLowerCase();

    const filteredComics = comics.filter(comic =>
        comic.title.toLowerCase().includes(searchTerm)
    );

    renderComics(filteredComics);
}

renderComics(comics);
nameSearch.addEventListener('input', filterComics);