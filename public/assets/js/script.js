const API_URL = 'http://localhost:3000/api/comics';
const LOADING_TIMEOUT = 10000;

let allComics = [];
let isLoading = false;

let comicCardsContainer;
let nameSearch;

function getDOMElements() {
    comicCardsContainer = document.getElementById('cards');
    nameSearch = document.getElementById('search');

    if (!comicCardsContainer || !nameSearch) {
        console.error('❌ Elementos DOM não encontrados');
        return false;
    } 
    return true;
}

function showLoading() {
    isLoading = true;
    comicCardsContainer.innerHTML = `
        <div class="loading-message">
            <h3>🔄 Carregando quadrinhos...</h3>
            <p>Isso pode levar alguns segundos...</p>
        </div>
    `;
}

function showError(message, showRetry = true) {
    isLoading = false;
    comicCardsContainer.innerHTML = `
        <div class="error-message">
            <h3>😔 ${message}</h3>
            <p>Não foi possível carregar os quadrinhos.</p>
            ${showRetry ? '<button onclick="initializeComics()" class="retry-btn">Tentar Novamente</button>' : ''}
        </div>
    `;
}

async function fetchComicsFromAPI() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), LOADING_TIMEOUT);
        
        const response = await fetch(API_URL, {
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();

        if (result.success) {
            allComics = result.data;
            renderComics(allComics);
            console.log('✅ Dados carregados da API:', allComics.length, 'quadrinhos');
            return true;
        } else {
            throw new Error(result.error || 'Erro desconhecido na API');
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('❌ Timeout na requisição');
            throw new Error('Tempo limite excedido');
        }
        console.error('❌ Erro na requisição:', error.message);
        throw error;
    }
}


function renderComics(comicsToRender) {
    if (!comicCardsContainer) return;
    
    comicCardsContainer.innerHTML = '';
    isLoading = false;
    
    if (!comicsToRender || comicsToRender.length === 0) {
        comicCardsContainer.innerHTML = `
            <div class="no-comics-message">
                <h3>😔 Não há quadrinhos por aqui!</h3>
                <p>Tente novamente mais tarde ou verifique sua conexão.</p>
                <button onclick="initializeComics()" class="retry-btn">Tentar Novamente</button>
            </div>
        `;
        return;
    }
    
    comicsToRender.forEach(comic => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const idiomName = comic.idiom?.name || comic.idiom || 'N/A';
        
        card.innerHTML = `
            <a href="comic.html?id=${comic.id}">
                <img src="${comic.cover}" alt="${comic.title} Cover">
            </a>
            <div class="card-text">
                <a href="comic.html?id=${comic.id}">
                    <h2>${comic.title}</h2>
                </a>
                <a href="comic.html?id=${comic.id}">
                    <p class="issue-year">
                        <strong>Edições:</strong> ${comic.issues} | 
                        <strong>Lançamento:</strong> ${comic.year} | 
                        <strong>Idioma:</strong> ${idiomName}
                    </p>
                </a>
            </div>
        `;
        comicCardsContainer.appendChild(card);
    });
}

async function initializeComics() {
    if (!getDOMElements()) {
        showError('Erro ao inicializar a aplicação', false);
        return;
    }
    
    console.log('🔄 Iniciando carregamento dos quadrinhos...');
    showLoading();

    try {
        const apiSuccess = await fetchComicsFromAPI();
        
        if (apiSuccess) {
            return;
        }
    } catch (error) {
        console.log('⚠️ API falhou, tentando fallback...');
    }
    
    try {
        console.log('⚠️ Usando dados estáticos como fallback');
        allComics = FALLBACK_COMICS;
        renderComics(allComics);
    } catch (error) {
        console.error('❌ Erro ao carregar dados estáticos:', error);
        showError('Erro ao carregar quadrinhos');
    }
}

function filterComics() {
    if (!nameSearch || isLoading) return;
    
    const searchTerm = nameSearch.value.toLowerCase();
    
    const filteredComics = allComics.filter(comic =>
        comic.title.toLowerCase().includes(searchTerm)
    );
    
    renderComics(filteredComics);
}

function setupEventListeners() {
    if (nameSearch) {
        nameSearch.addEventListener('input', filterComics);
    }
}
window.addEventListener('load', () => {
    initializeComics();
    setupEventListeners();
});