(function() {
    'use strict';
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        document.documentElement.classList.add('is-mobile');
        
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            document.documentElement.classList.add('is-ios');
            
            const scrollableElements = document.querySelectorAll('.scrollable-content');
            scrollableElements.forEach(element => {
                element.style.webkitOverflowScrolling = 'touch';
            });
        }
        
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function (event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
        
        document.addEventListener('touchstart', function() {}, {passive: true});
    }
    
    let ticking = false;
    function updateScrollState() {
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollState);
            ticking = true;
        }
    }
    
    const scrollElements = document.querySelectorAll('.scrollable-content');
    scrollElements.forEach(element => {
        element.addEventListener('scroll', requestTick, {passive: true});
    });
    
    function optimizeImages() {
        const images = document.querySelectorAll('img');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        img.style.opacity = '0';
                        img.style.transition = 'opacity 0.3s ease';
                        
                        img.addEventListener('load', () => {
                            img.style.opacity = '1';
                            observer.unobserve(img);
                        });
                        
                        img.addEventListener('error', () => {
                            img.style.opacity = '0.5';
                            img.alt = 'Erro ao carregar imagem';
                            observer.unobserve(img);
                        });
                    }
                });
            }, {
                rootMargin: '50px'
            });
            
            images.forEach(img => {
                if (img.src) {
                    imageObserver.observe(img);
                }
            });
        }
    }
    
    function enhanceModals() {
        document.addEventListener('click', function(e) {
            const modal = e.target.closest('.modal');
            if (modal && e.target === modal) {
                if ('vibrate' in navigator && isMobile) {
                    navigator.vibrate(10);
                }
            }
        });
        
        const modalObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1 && node.classList && node.classList.contains('modal')) {
                        document.body.style.overflow = 'hidden';
                        
                        // Focus trap para acessibilidade
                        const focusableElements = node.querySelectorAll(
                            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                        );
                        if (focusableElements.length > 0) {
                            focusableElements[0].focus();
                        }
                    }
                });
                
                mutation.removedNodes.forEach(function(node) {
                    if (node.nodeType === 1 && node.classList && node.classList.contains('modal')) {
                        document.body.style.overflow = '';
                    }
                });
            });
        });
        
        modalObserver.observe(document.body, { childList: true });
    }
    
    function addTouchFeedback() {
        const interactiveElements = document.querySelectorAll('.card, .retry-btn, .modal-content a, .close');
        
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
                this.style.transition = 'transform 0.1s ease';
            }, {passive: true});
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
            }, {passive: true});
            
            element.addEventListener('touchcancel', function() {
                this.style.transform = '';
            }, {passive: true});
        });
    }
    
    function enhanceSearchInput() {
        const searchInput = document.getElementById('search');
        if (!searchInput) return;
        
        searchInput.setAttribute('autocomplete', 'off');
        searchInput.setAttribute('autocorrect', 'off');
        searchInput.setAttribute('autocapitalize', 'off');
        searchInput.setAttribute('spellcheck', 'false');
        
        let searchTimeout;
        const originalHandler = searchInput.oninput;
        
        searchInput.oninput = function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (originalHandler) {
                    originalHandler.call(this, e);
                }
            }, isMobile ? 300 : 150);
        };
        
        if (isMobile) {
            const clearButton = document.createElement('button');
            clearButton.innerHTML = '×';
            clearButton.style.cssText = `
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                background: none;
                border: none;
                color: var(--secondary-font);
                font-size: 18px;
                cursor: pointer;
                padding: 4px;
                opacity: 0;
                transition: opacity 0.2s ease;
            `;
            
            const searchContainer = searchInput.parentNode;
            searchContainer.style.position = 'relative';
            searchContainer.appendChild(clearButton);
            
            searchInput.addEventListener('input', function() {
                clearButton.style.opacity = this.value ? '1' : '0';
            });
            
            clearButton.addEventListener('click', function() {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
                searchInput.focus();
            });
        }
    }
    
    function handleOrientationChange() {
        window.addEventListener('orientationchange', function() {
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
                
                const openModals = document.querySelectorAll('.modal');
                if (openModals.length > 0 && isMobile) {
                    openModals.forEach(modal => {
                        modal.style.opacity = '0';
                        setTimeout(() => {
                            if (modal.parentNode) {
                                modal.parentNode.removeChild(modal);
                            }
                        }, 200);
                    });
                }
            }, 100);
        });
    }
    
    function optimizeForConnection() {
        if ('connection' in navigator) {
            const connection = navigator.connection;
            
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                document.documentElement.classList.add('slow-connection');
                
                const style = document.createElement('style');
                style.textContent = `
                    .slow-connection * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                    
                    .slow-connection .modal-container img:hover {
                        transform: none !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    }
    
    function preventDoubleZoom() {
        const preventZoomElements = document.querySelectorAll('.card, .modal-content a, .retry-btn');
        
        preventZoomElements.forEach(element => {
            element.addEventListener('touchend', function(e) {
                e.preventDefault();
                setTimeout(() => {
                    this.click();
                }, 10);
            });
        });
    }
    
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        try {
            optimizeImages();
            enhanceModals();
            addTouchFeedback();
            enhanceSearchInput();
            handleOrientationChange();
            optimizeForConnection();
            
            if (isMobile) {
                preventDoubleZoom();
            }
            
            console.log('✅ Melhorias mobile inicializadas');
        } catch (error) {
            console.error('❌ Erro ao inicializar melhorias mobile:', error);
        }
    }
    
    init();
    
    window.mobileEnhancements = {
        isMobile: isMobile,
        optimizeImages: optimizeImages,
        addTouchFeedback: addTouchFeedback
    };
    
})();