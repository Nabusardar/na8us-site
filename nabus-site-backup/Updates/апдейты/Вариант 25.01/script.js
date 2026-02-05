/* ═══════════════════════════════════════════════════════════
   NABUS EXPANSION — SCRIPT.JS v4.0
   На основе текущего сайта + согласованные изменения
   ═══════════════════════════════════════════════════════════ */

// === SERVICE MODAL (оригинал) ===
const serviceData = {
    1: {
        number: '01',
        title: 'СИНТЕЗ ЦИФРОВЫХ ЛИЧНОСТЕЙ',
        desc: 'Создаём AI-ассистентов, которые понимают ваш бизнес. Telegram-боты, чат-боты на сайт, голосовые помощники. Обучение на ваших данных, интеграция с CRM, работа 24/7 без перерывов.'
    },
    2: {
        number: '02',
        title: 'GEO-ЭКСПАНСИЯ',
        desc: 'Продвижение в эпоху AI-поиска. Оптимизация под ChatGPT, Perplexity, Gemini, ЯндексGPT. Ваш бизнес станет источником данных для ответов нейросетей.'
    },
    3: {
        number: '03',
        title: 'НЕЙРО-АВТОМАТИЗАЦИЯ',
        desc: 'Связываем сервисы через n8n и Make. CRM + почта + календарь + Telegram = единая система. Автоматические отчёты, уведомления, обработка заявок.'
    },
    4: {
        number: '04',
        title: 'АРХИТЕКТУРА БИЗНЕС-ЯДРА',
        desc: 'Внедряем ИИ внутрь компании. Анализ данных, генерация документов, автоматизация рутины. AI становится частью вашей команды.'
    },
    5: {
        number: '05',
        title: 'ВАЙБКОДИНГ',
        desc: 'Быстрое создание MVP, сайтов, лендингов через AI. Код через нейросети — в 5 раз быстрее и дешевле традиционной разработки. От идеи до продакшна за дни, не месяцы.'
    }
};

function openServiceModal(serviceId) {
    const data = serviceData[serviceId];
    if (!data) return;
    
    const modal = document.getElementById('service-modal');
    modal.querySelector('.service-number-large').textContent = data.number;
    modal.querySelector('.modal-title').textContent = data.title;
    modal.querySelector('.modal-desc').textContent = data.desc;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    document.getElementById('service-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// === ARTICLE MODAL ===
function openArticleModal(articleId) {
    const modal = document.getElementById('article-modal');
    const body = document.getElementById('article-body');
    
    body.innerHTML = '<div style="text-align: center; padding: 40px; color: #00f3ff;">Загрузка...</div>';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    fetch(`logs/articles/${articleId}/${articleId}.md`)
        .then(response => {
            if (!response.ok) throw new Error('Not found');
            return response.text();
        })
        .then(markdown => {
            body.innerHTML = parseMarkdown(markdown);
        })
        .catch(error => {
            body.innerHTML = '<div style="text-align: center; padding: 40px; color: #ff4d4d;">Ошибка загрузки статьи</div>';
        });
}

function closeArticleModal() {
    document.getElementById('article-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// === ABOUT MODAL (НОВОЕ) ===
function openAboutModal() {
    document.getElementById('about-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAboutModal() {
    document.getElementById('about-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// === MARKDOWN PARSER ===
function parseMarkdown(markdown) {
    let content = markdown.replace(/^---[\s\S]*?---\n*/m, '');
    content = content.replace(/^(title|date|author|image|tags|category):.*\n/gm, '');
    
    content = content.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    content = content.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    content = content.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
    content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    content = content.replace(/^\* (.*$)/gim, '<li>$1</li>');
    content = content.replace(/^- (.*$)/gim, '<li>$1</li>');
    content = content.replace(/\n\n/g, '</p><p>');
    content = '<p>' + content + '</p>';
    content = content.replace(/<p>\s*<\/p>/g, '');
    content = content.replace(/<p>\s*<h/g, '<h');
    content = content.replace(/<\/h(\d)>\s*<\/p>/g, '</h$1>');
    
    return content;
}

// === EVENT LISTENERS ===
document.addEventListener('DOMContentLoaded', function() {
    
    // Клик по карточкам услуг
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            if (serviceId) {
                openServiceModal(parseInt(serviceId));
            }
        });
    });
    
    // Клик по карточкам статей
    document.querySelectorAll('.log-card').forEach(card => {
        card.addEventListener('click', function() {
            const articleId = this.getAttribute('data-article');
            if (articleId) {
                openArticleModal(articleId);
            }
        });
    });
    
    // Закрытие модалок по клику вне контента
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = '';
        }
    });
    
});

// === SCROLL ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Стили для анимации
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
