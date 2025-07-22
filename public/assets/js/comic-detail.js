const API_BASE_URL = '/api';

let issuesListContainer, searchInput;
let allIssues = [];
let filteredIssues = [];

function getDOMElements() {
    issuesListContainer = document.getElementById('issues-list');
    searchInput = document.getElementById('search');
    return issuesListContainer && searchInput;
}

function showMessageInIssues(html) {
    if (issuesListContainer) issuesListContainer.innerHTML = html;
}

function showLoadingInIssues() {
    showMessageInIssues(`
        <div class="no-issues-message">
            <h3>🔄 Carregando...</h3>
            <p>Aguarde enquanto carregamos os detalhes da edição.</p>
        </div>
    `);
}

function showErrorInIssues(message) {
    showMessageInIssues(`
        <div class="no-issues-message">
            <h3>😔 ${message}</h3>
            <p>Não foi possível carregar as edições deste quadrinho.</p>
            <button onclick="loadComicData()" class="retry-btn">Tentar Novamente</button>
        </div>
    `);
}

function showNoIssuesMessage() {
    showMessageInIssues(`
        <div class="no-issues-message">
            <h3>📚 Nenhuma edição encontrada</h3>
            <p>Este quadrinho ainda não possui edições cadastradas.</p>
        </div>
    `);
}

function getComicIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return id ? parseInt(id) : null;
}

async function loadComicData() {
    if (!getDOMElements()) return;
    showLoadingInIssues();

    const comicId = getComicIdFromURL();
    if (!comicId) {
        showErrorInIssues('ID do quadrinho não encontrado');
        return;
    }

    try {
        await loadComicIssues(comicId);
        setupSearch();
    } catch (error) {
        showErrorInIssues('Erro ao carregar dados do quadrinho');
    }
}

function setPageTitle(comicTitle) {
    document.title = `pInk - ${comicTitle}`
}

async function loadComicIssues(comicId) {
    const response = await fetch(`${API_BASE_URL}/comics/${comicId}/issues`);
    if (!response.ok) throw new Error('Erro ao buscar issues');
    const result = await response.json();
    if (!result.success) throw new Error(result.error || 'Erro ao buscar issues');
    allIssues = result.data;
    filteredIssues = [...allIssues];
    renderIssues();
    
    const breadcrumbElement = document.getElementById('breadcrumb');
    if (breadcrumbElement && allIssues.length > 0) {
        const comicName = allIssues[0].series || `Quadrinho ${comicId}`;
        breadcrumbElement.innerHTML = `<a href="comic.html?id=${comicId}" style="text-decoration: none; color: #f4c1ed;">${comicName}</a>`;
        setPageTitle(comicName);
    }
}

function renderIssues() {
    if (!issuesListContainer) return;
    if (!filteredIssues.length) {
        showNoIssuesMessage();
        return;
    }
    issuesListContainer.innerHTML = '';
    filteredIssues.forEach(issue => {
        const idiomName = issue.idiom?.name || issue.idiom || 'N/A';
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <a href="${issue.link}" target="_blank">
                <img src="${issue.cover}" alt="${issue.title} Cover">
            </a>
            <div class="card-text">
                <a href="${issue.link}" target="_blank">
                    <h2>${issue.title}</h2>
                </a>
                <a href="${issue.link}" target="_blank">
                    <p class="issue-year">
                        <strong>Edição:</strong> ${issue.issueNumber} | 
                        <strong>Ano:</strong> ${issue.year} | 
                        <strong>Tamanho:</strong> ${issue.size} | 
                        <strong>Idioma:</strong> ${idiomName}
                    </p>
                </a>
            </div>
        `;
        issuesListContainer.appendChild(card);
    });
}



function setupSearch() {
    if (!searchInput) return;
    searchInput.addEventListener('input', filterIssues);
}

function filterIssues() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredIssues = allIssues.filter(issue =>
        issue.title.toLowerCase().includes(searchTerm) ||
        issue.issueNumber.toString().includes(searchTerm) ||
        issue.year.toString().includes(searchTerm)
    );
    renderIssues();
}

window.addEventListener('load', loadComicData);