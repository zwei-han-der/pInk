const nameSearch = document.getElementById('search');

function filterComics() {
    const searchTerm = nameSearch.value.toLowerCase();

    const filteredComics = comics.filter(comic =>
        comic.title.toLowerCase().includes(searchTerm)
    );
    
    renderComics(filteredComics);
}

nameSearch.addEventListener('input', filterComics);