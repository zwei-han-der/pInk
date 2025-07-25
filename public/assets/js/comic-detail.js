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
    } catch {
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
            <a href="#" class="modal-trigger">
                <img src="${issue.cover}" alt="${issue.title} Cover">
            </a>
            <div class="card-text">
                <a href="#" class="modal-trigger">
                    <h2>${issue.title}</h2>
                </a>
                <a href="#" class="modal-trigger">
                    <p class="issue-year">
                        <strong>Ano:</strong> ${issue.year} | 
                        <strong>Idioma:</strong> ${idiomName} |
                        <strong>Tamanho:</strong> ${issue.size || 'N/A'}
                    </p>
                </a>
            </div>
        `;
        // Adiciona evento para abrir modal em todos os elementos com a classe modal-trigger
        card.querySelectorAll('.modal-trigger').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(issue);
            });
        });
        issuesListContainer.appendChild(card);
    });
}

function openModal(issue) {
    const idiomName = issue.idiom?.name || issue.idiom || 'N/A';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-container">
            <div class="modal-img">
                <img src="${issue.cover}" alt="${issue.title} Cover">
            </div>
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="modal-content-header">
                    <h2>${issue.title}</h2>
                    <a href="${getSafeLink(issue.link)}" download target="_blank">Download (${issue.size})</a>
                </div>
                <div class="modal-content-synopsis">
                    <h2>Sinopse</h2> <hr>
                    <p>${issue.synopsis || 'Sem sinopse disponível.'}</p>
                </div>
                <div class="modal-content-text">
                    <h2>Detalhes</h2> <hr>
                    <p><strong>Série:</strong> ${issue.series || 'N/A'}</p>
                    <p><strong>Gênero(s):</strong> ${issue.genres || 'N/A'}</p>
                    <p><strong>Lançamento:</strong> ${issue.year || 'N/A'}</p>
                    <strong>Tamanho:</strong> ${issue.size || 'N/A'}
                    <p><strong>Idioma:</strong> ${idiomName}</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    window.addEventListener('click', function handler(event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
            window.removeEventListener('click', handler);
        }
    });
}

function getSafeLink(link) {
  if (!link) return '#';
  if (link.startsWith('http')) return link;
  if (!link.startsWith('/')) return '/' + link;
  return link;
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