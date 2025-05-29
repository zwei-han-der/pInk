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
        synopsis: "The second arc of FATALE begins here! In modern times, Nicolas Lash hunts for more information about the mysterious Josephine... while in mid-1970s Los Angeles, Jo is trying to establish a new life. But this is post-free love LA, post Manson Family LA, and the hills of Hollywood have dark secrets all their own. BRUBAKER and PHILLIPS's horror-noir masterpiece continues!",
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
        synopsis: "BRUBAKER and PHILLIPS best-selling occult noir series continues its second arc, as the dark secrets of mid-70s Los Angeles begin to creep into Josephine's new life. Drugs, sex, cults, fame, and murder, all walk hand in hand in the shadow of demonic forces.",
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
        synopsis: "It's the turning point of the second arc of BRUBAKER & PHILLIPS' white-hot series FATALE! What is Josephine's secret plan, and what has she been doing all these years on the run from the '50s to the late '70s? And has the monster that's hunted her most of her life returned? And remember, Fatale features back pages articles and art that is only available in the printed single issues.",
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
        synopsis: "FATALE's second arc 'The Devil's Business' rushes toward its savage confusion, as Jo comes out of hiding, ready to confront the reborn Bishop as his cultists creep around 1970s Hollywood searching for her and her new lover... And remember each issue of FATALE contains extra content, articles and artwork that are not available anywhere but the printed single issues.",
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
        synopsis: "FATALE's second arc comes to its brutal conclusion! Secrets are revealed and new mysteries are born, as our Femme Fatale star goes from victim to hero! And remember each issue of FATALE contains extra content, articles and artwork that are not available anywhere but the printed single issues.",
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
        synopsis: "The first of four standalone FATALE FLASHBACK issues, and a perfect place for new readers to jump on board. Welcome to 1930s California, a hard place to be for a girl on the run. Witness Josephine's early days with the Femme Fatale curse, and see some of her elusive secrets revealed. And remember each issue of FATALE contains extra content, articles and artwork that are not available anywhere but the printed single issues.",
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
        synopsis: "The curse of the Femme Fatale has been around long before Josephine. Now we go back to the dark ages, to Medieval times, and the story of a young woman warrior facing unknowable horror that echoes down through time! Another standalone FATALE FLASHBACK issue, and a perfect place for new readers to jump on board! And remember each issue of FATALE contains extra content, articles and artwork that are not available anywhere but the printed single issues.",
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
        synopsis: "It's the curse of the Femme Fatale in the old west, for those who like horror and noir in their spaghetti western. Another standalone FATALE FLASHBACK issue, and a perfect place for new readers to jump on board! And remember each issue of FATALE contains extra content, articles and artwork that are not available anywhere but the printed single issues.",
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
        synopsis: "The final standalone FATALE FLASHBACK issue - World War Two! Nazi cultists and monsters are after Jo, as she searches for answers and comes face to face with Mr Bishop for the first time! And remember each issue of FATALE contains extra content, articles and artwork that are not available anywhere but the printed single issues.",
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
        synopsis: "A NEW ARC BEGINS! FATALE finally arrives in modern times, as Nicolas Lash's research from his prison cell draws out old enemies. And him with nowhere left to run.<br>And remember each issue of FATALE contains extra content, articles and artwork that are not available anywhere but the printed single issues.",
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
        synopsis: "Nicolas is on Josephine's trail of secrets, and they lead him back to 1990s Seattle, where a rock band, a gang of bank robbers, and a wandering serial killer all circle around a mysterious woman with no memory... And remember, each issue of FATALE contains extra content, artwork and articles that are only available in the printed single issues.",
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
        synopsis: "The Bishop disappeared in Los Angeles in the late '70s, in a fiery scream, but he's never really been gone, and now he's finally got Jo's scent again. And remember each issue of FATALE contains extra content, articles and artwork that are not available anywhere but the printed single issues.",
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
        synopsis: "NOMINATED FOR MORE 2013 EISNER AWARDS THAN ANY OTHER COMIC! Everything goes wrong when Josephine appears in a Seattle band's music video, and her effect on those who desire her runs wild, as the most exciting arc of Fatale continues. And remember, each issue of FATALE contains extra content, artwork and articles that are only available in the printed single issues.",
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
        synopsis: "Rock 'n' roll, robbery, and ritual murder collide in '90s Seattle as the fourth arc of FATALE comes to a shattering conclusion... and the secret identity of Nic's present day helper is revealed. Is he who he claims to be? And remember each issue of FATALE contains extra content, articles, and artwork that are not available anywhere but the printed single issues.",
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
        synopsis: "NEW STORY ARC! Nicolas Lash is in the deepest trouble possible, and there's only one person who can save him now... the problem is, trouble is her business. And don't forget all the back page extras you can only find in FATALE's single issues every month!",
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
        synopsis: "Part two of the most intense arc of FATALE so far! Nicolas Lash and Josephine finally meet again, as everything we know about Fatale gets flipped on its side... when the hunted becomes the hunter. And don't forget all the back page extras and articles you can only find in FATALE's single issues every month!",
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
        synopsis: "The life story of the man-monster called The Bishop. As always, every issue of FATALE includes extras and articles every month!",
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
        synopsis: "The strangest issue of FATALE yet, as Nicolas Lash finally learns the last of Josephine's secrets, and the universe will never look the same. Don't forget that every issue of FATALE contains extra art and articles not available anywhere but the single issues!",
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
        synopsis: "IT ALL ENDS HERE! The final extra-length issue of FATALE! There's so much story that we needed a lot more room. Will Josephine's final secrets be revealed? Will there be much tragedy? Will Brubaker and Phillips fans love all the crazy extras jammed into this special final issue? Yes, yes, and yes.",
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