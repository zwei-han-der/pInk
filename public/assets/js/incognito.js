const comics = [
    {
        title: "Incognito #1",
        issues: "1",
        year: "2008",
        size: "11.50 MB",
        series: "Incognito",
        genres: "Crime, Super-Herói",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/EXkd4VHQpCVGtIZdh9k70egBHvTmxyBXNczSXXrylCtL-g?e=pTx9Au",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-8249848.jpg?1726888630",
        synopsis: "INCOGNITO - Uma mistura de noir e super-heróis. Dos criadores de best-sellers Ed Brubaker (A Morte do Capitão América) e Sean Phillips (Marvel Zombies), com cores de Val Staples. Continuando a tradição de uma única edição de Criminal, cada edição de Incognito contém mais histórias, bem como artigos sobre pulp e noir, e informações sobre os bastidores!",
    },
    {
        title: "Incognito #2",
        issues: "2",
        year: "2009",
        size: "12.30 MB",
        series: "Incognito",
        genres: "Crime, Super-Herói",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/EUJfVNrja-NNn52N5nkXpW0BWMiVA4ouPAJuVbM_Yn6yPw?e=AvXRX9",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-6648931.jpg?1726888738  ",
        synopsis: "Conheça o Black Death. Há cinco anos, alguém denunciou esse senhor do crime superpoderoso e, desde então, ele vem cumprindo pena pesada. Então, o que ele fará quando descobrir que um antigo capanga que deveria estar MORTO está vivendo no programa de proteção a testemunhas durante todo esse tempo? Dica: ele vai matar um monte de gente.",
    },
    {
        title: "Incognito #3",
        issues: "3",
        year: "2009",
        size: "12.30 MB",
        series: "Incognito",
        genres: "Crime, Super-Herói",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/Ed_8FXXtCnhHqD34bXUKlcABaP2ps_vz1KJHz32qTlR0lA?e=WF4Pd1",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-2542431.jpg?1726888806",
        synopsis: "A PREMIADA E CAMPEÃ DE VENDAS EQUIPE DE BRUBAKER E PHILLIPS MOSTRA POR QUE É BOM SER MAU! Seu nome é Ava Destruction e ela é o tipo de garota mais “viva rápido, morra jovem e deixe um cadáver bonito” que você já conheceu. Ava, uma das principais agentes da Peste Negra e uma mulher que está sempre com 16 anos, é enviada para o programa de proteção a testemunhas atrás do nosso herói e, embora ela seja bonita... o que ela deixa em seu rastro é tudo menos isso.",
    },
    {
        title: "Incognito #4",
        issues: "4",
        year: "2009",
        size: "11.60 MB",
        series: "Incognito",
        genres: "Crime, Super-Herói",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/EctjabUXclFLpZFSnpZVBH4BAe1Gf621oFqMEzJSiCQ33g?e=aBf3bW",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-4633765.jpg?1726889084",
        synopsis: "O caos mascarado de Zack não passou despercebido pelas autoridades ou pelos bandidos dos quais ele estava se escondendo. Agora, Zoey Zeppelin, neta do lendário Professor Zeppelin, está aqui para descobrir de que lado ele está, mesmo que tenha que matá-lo para ter certeza.",
    },
    {
        title: "Incognito #5",
        issues: "5",
        year: "2010",
        size: "12.50 MB",
        series: "Incognito",
        genres: "Crime, Super-Herói",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/EVJfQnmJOKxCi5GXt6fstUgB8o6ey5U6jF0cLhWfKZOrmQ?e=eN9JpQ",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-8274607.jpg?1726888981",
        synopsis: "Doc Lester é o mais perfeito cientista louco e pode ser a única pessoa que sabe a verdade sobre Zack Overkill e seu irmão gêmeo. É uma verdade pela qual Zack logo terá que matar, pois todos os lados estão se aproximando dele.",
    },
    {
        title: "Incognito #6",
        issues: "6",
        year: "2010",
        size: "15.10 MB",
        series: "Incognito",
        genres: "Crime, Super-Herói",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/EZmPSuFYVyVItePlvdSpgi4By1gB5uNrMRmxZO7Wi91Skg?e=v6MzK2",
        idiom: "Português Brasileiro",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-7285223.jpg?1726889025",
        synopsis: "A CONCLUSÃO CONTUNDENTE DA HISTÓRIA DE SUPERVILÕES MAIS DISTORCIDA DE TODOS OS TEMPOS! Tudo termina aqui. Todo o planejamento e os esquemas de Zack Overkill o colocaram frente a frente com seu próprio passado, e agora ele é o único homem que pode salvar o mundo... mas será que ele se importa o suficiente para tentar?",
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
                    <a href="${comic.link}" download target="_blank">Download (${comic.size})</a>
                </div>
                <div class="modal-content-synopsis">
                    <h2>Sinopse</h2> <hr>
                    <p>${comic.synopsis}</p>
                </div>
                <div class="modal-content-text">
                    <h2>Detalhes</h2> <hr>
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