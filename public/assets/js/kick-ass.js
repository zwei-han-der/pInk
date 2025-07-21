const comics = [
    {
        title: "Kick-Ass #1",
        issues: "1",
        year: "2008",
        size: "11.50 MB",
        series: "Incognito",
        genres: "Crime, Superhero",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/EXkd4VHQpCVGtIZdh9k70egBHvTmxyBXNczSXXrylCtL-g?e=pTx9Au",
        idiom: "Brazilian Portuguese",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-8249848.jpg?1726888630",
        synopsis: "INCOGNITO - a twisted mash-up of noir and super-heroics - by best-selling creators Ed Brubaker (The Death of Captain America) and Sean Phillips(Marvel Zombies) with Val Staples on colors.<br>And continuing Criminal's single issue tradition, each issue of Incognito has more pages of story content, as well as articles on pulp and noir and behind the scenes looks! ",
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
                <p class="issue-year"><strong>Issue:</strong> ${comic.issues} | <strong>Release Year:</strong> ${comic.year} | <strong>Size:</strong> ${comic.size}</p>
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
                    <p><strong>Issue:</strong> ${comic.issues}</p>
                    <p><strong>Series:</strong> ${comic.series}</p>
                    <p><strong>Genre(s):</strong> ${comic.genres}</p>
                    <p><strong>Release Year:</strong> ${comic.year}</p>
                    <p><strong>Idiom:</strong> ${comic.idiom}</p>
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