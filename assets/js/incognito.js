const comics = [
    {
        title: "Incognito #1",
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
    {
        title: "Incognito #2",
        issues: "2",
        year: "2009",
        size: "12.30 MB",
        series: "Incognito",
        genres: "Crime, Superhero",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/EUJfVNrja-NNn52N5nkXpW0BWMiVA4ouPAJuVbM_Yn6yPw?e=AvXRX9",
        idiom: "Brazilian Portuguese",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-6648931.jpg?1726888738  ",
        synopsis: "Meet the Black Death. Five years ago someone ratted-out this super-powered crime lord and he's been doing hard time ever since. So, what will he do when he finds out an old henchman who's supposed to be DEAD has been living in Witness Protection all this time? Hint - He's going to kill a lot of people.",
    },
    {
        title: "Incognito #3",
        issues: "3",
        year: "2009",
        size: "12.30 MB",
        series: "Incognito",
        genres: "Crime, Superhero",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/Ed_8FXXtCnhHqD34bXUKlcABaP2ps_vz1KJHz32qTlR0lA?e=WF4Pd1",
        idiom: "Brazilian Portuguese",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-2542431.jpg?1726888806",
        synopsis: "THE BEST-SELLING AND AWARD-WINNING TEAM OF BRUBAKER AND PHILLIPS SHOW YOU WHY IT'S GOOD TO BE BAD! Her name is Ava Destruction, and she's the most 'live fast, die young, leave a good-looking corpse' kind of girl you've ever met. Ava, one of the Black Death's top enforcers, and a woman who's perpetually 16 on the outside, is sent into Witness Protection after our hero and while she may be pretty... what she leaves in her wake is anything but.",
    },
    {
        title: "Incognito #4",
        issues: "4",
        year: "2009",
        size: "11.60 MB",
        series: "Incognito",
        genres: "Crime, Superhero",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/EctjabUXclFLpZFSnpZVBH4BAe1Gf621oFqMEzJSiCQ33g?e=aBf3bW",
        idiom: "Brazilian Portuguese",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-4633765.jpg?1726889084",
        synopsis: "Zack's masked mayhem hasn't gone unnoticed by the authorities or the bad guys he's been in hiding from. Now, Zoey Zeppelin, granddaughter of the legendary Professor Zeppelin is here to find out just which side he's on -- even if she has to kill him to be sure.",
    },
    {
        title: "Incognito #5",
        issues: "5",
        year: "2010",
        size: "12.50 MB",
        series: "Incognito",
        genres: "Crime, Superhero",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/EVJfQnmJOKxCi5GXt6fstUgB8o6ey5U6jF0cLhWfKZOrmQ?e=eN9JpQ",
        idiom: "Brazilian Portuguese",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-8274607.jpg?1726888981",
        synopsis: "Doc Lester is the mad scientist's mad scientist, and he may just be the only person who knows the truth about Zack Overkill and his twin brother...a truth that Zack will soon have to kill for, as all sides are closing in on him.",
    },
    {
        title: "Incognito #6",
        issues: "6",
        year: "2010",
        size: "15.10 MB",
        series: "Incognito",
        genres: "Crime, Superhero",
        link: "https://1drv.ms/u/c/8db97f9fdacc4315/EZmPSuFYVyVItePlvdSpgi4By1gB5uNrMRmxZO7Wi91Skg?e=v6MzK2",
        idiom: "Brazilian Portuguese",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-7285223.jpg?1726889025",
        synopsis: "THE HARD-HITTING CONCLUSION TO THE MOST TWISTED SUPER-VILLAIN STORY EVER! It all ends here. All of Zack Overkill's planning and scheming has brought him face-to-face with his own past, and now he's the one man left who can save the world... but does he care enough to even try?",
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
                    <p><strong>File Password:</strong> ${comic.password}</p>
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