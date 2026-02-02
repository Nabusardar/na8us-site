/* ========================================
   NABUS EXPANSION — MAIN SCRIPT v4
   Original + All Agreed Changes
   ======================================== */

// === ДАННЫЕ УСЛУГ ===
const servicesData = {
    1: {
        number: '01',
        title: 'AI-АССИСТЕНТЫ',
        description: 'Создаём виртуальных сотрудников с памятью, голосом и характером. Telegram-боты и чат-боты на базе GPT/Claude. Консультируют, продают, поддерживают — 24/7, без выходных. Полная кастомизация под ваш бренд.'
    },
    2: {
        number: '02',
        title: 'N8N АВТОМАТИЗАЦИЯ',
        description: 'Связываем сервисы в единую систему. CRM, почта, календарь, Telegram — всё работает само. Автоматические отчёты, уведомления, обработка заявок. Экономия времени с первого дня.'
    },
    3: {
        number: '03',
        title: 'GEO-ПРОДВИЖЕНИЕ',
        description: 'Ваш бизнес будет первым, кого назовёт ChatGPT, Perplexity и Gemini. Оптимизация под AI-поисковики — новое SEO для эпохи нейросетей. Аудит, стратегия, внедрение.'
    },
    4: {
        number: '04',
        title: 'ВАЙБКОДИНГ',
        description: 'Быстрое создание сайтов, лендингов, MVP через AI. Код через нейросети — в 5 раз быстрее и дешевле традиционной разработки. От идеи до продакшна за дни, не месяцы.'
    }
};

// === ДАННЫЕ СТАТЕЙ ===
const articlesData = {
    1: {
        path: 'logs/articles/article1/article1.md',
        image: 'logs/articles/article1/article1.jpg'
    },
    2: {
        path: 'logs/articles/article2/article2.md',
        image: 'logs/articles/article2/article2.jpg'
    },
    3: {
        path: 'logs/articles/article3/article3.md',
        image: 'logs/articles/article3/article3.png'
    }
};

// === ОТВЕТЫ ЧАТА ===
const chatResponses = [
    'Интересный запрос. Анализирую данные...',
    'Системы NABUS обрабатывают информацию. Для детального ответа свяжитесь через Telegram.',
    'Запрос принят. Это направление входит в наши компетенции.',
    'Понял. Для обсуждения деталей лучше перейти в Telegram @nabus79.',
    'Обработка завершена. Рекомендую оставить заявку для персонального ответа.',
    'Принято. Наши специалисты могут подробнее раскрыть эту тему.',
    'Сканирую базу знаний... Найдено несколько релевантных протоколов.',
    'Запрос классифицирован. Рекомендую изучить секцию DEPLOYMENT_LOG для примеров.'
];

// === ИНИЦИАЛИЗАЦИЯ ===
document.addEventListener('DOMContentLoaded', () => {

    // AOS Init
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        offset: 100
    });

    // DOM Elements
    const serviceModal = document.getElementById('serviceModal');
    const modalClose = document.getElementById('modalClose');
    const modalNumber = document.getElementById('modalNumber');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const formService = document.getElementById('formService');
    const showFormBtn = document.getElementById('showFormBtn');
    const requestForm = document.getElementById('requestForm');

    const articleModal = document.getElementById('articleModal');
    const articleClose = document.getElementById('articleClose');
    const articleContent = document.getElementById('articleContent');

    const aboutModal = document.getElementById('aboutModal');
    const aboutClose = document.getElementById('aboutClose');

    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');

    const serviceCards = document.querySelectorAll('.service-card');
    const logsCards = document.querySelectorAll('.logs-card');

    // === SERVICES MODAL ===
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.dataset.service;
            const service = servicesData[serviceId];

            if (service) {
                modalNumber.textContent = service.number;
                modalTitle.textContent = service.title;
                modalDescription.textContent = service.description;
                formService.value = service.title;
                requestForm.classList.remove('active');
                requestForm.reset();
                openModal(serviceModal);
            }
        });
    });

    modalClose.addEventListener('click', () => closeModal(serviceModal));
    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) closeModal(serviceModal);
    });

    showFormBtn.addEventListener('click', () => {
        requestForm.classList.toggle('active');
    });

    requestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(requestForm);
        const data = {
            name: formData.get('name'),
            contact: formData.get('contact'),
            service: formData.get('service'),
            timestamp: new Date().toISOString()
        };
        console.log('📨 Заявка:', data);
        alert('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        closeModal(serviceModal);
    });

    // === ARTICLE MODAL ===
    logsCards.forEach(card => {
        card.addEventListener('click', async () => {
            const articleId = card.dataset.article;
            const article = articlesData[articleId];

            if (!article) return;

            openModal(articleModal);
            articleContent.innerHTML = '<p style="color: var(--cyan); text-align: center;">⏳ Загрузка...</p>';

            try {
                const response = await fetch(article.path);
                if (!response.ok) throw new Error('Файл не найден');

                let markdown = await response.text();
                markdown = markdown.replace(/^---[\s\S]*?---\n*/m, '');
                const parsedHtml = marked.parse(markdown);
                const imageHtml = `<img src="${article.image}" alt="Article cover" class="article-image">`;
                articleContent.innerHTML = imageHtml + parsedHtml;

            } catch (error) {
                articleContent.innerHTML = `
                    <p style="color: #ff4444; text-align: center;">
                        ❌ Ошибка загрузки статьи.<br>
                        <small style="color: var(--text-dim);">${error.message}</small>
                    </p>
                `;
                console.error('Ошибка загрузки статьи:', error);
            }
        });
    });

    articleClose.addEventListener('click', () => closeModal(articleModal));
    articleModal.addEventListener('click', (e) => {
        if (e.target === articleModal) closeModal(articleModal);
    });

    // === ABOUT MODAL ===
    if (aboutClose) {
        aboutClose.addEventListener('click', () => closeModal(aboutModal));
    }
    if (aboutModal) {
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) closeModal(aboutModal);
        });
    }

    // === CHAT ===
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        chatInput.value = '';

        setTimeout(() => {
            const randomResponse = chatResponses[Math.floor(Math.random() * chatResponses.length)];
            addMessage(randomResponse, 'bot');
        }, 800 + Math.random() * 1200);
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;
        const prefix = sender === 'user' ? '[YOU]:' : '[NABUS]:';
        messageDiv.innerHTML = `
            <span class="message-prefix">${prefix}</span>
            <span class="message-text">${escapeHtml(text)}</span>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // === MODAL HELPERS ===
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // === CLOSE ON ESC ===
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(serviceModal);
            closeModal(articleModal);
            if (aboutModal) closeModal(aboutModal);
        }
    });

    // === PARALLAX ===
    const heroBg = document.querySelector('.hero-bg');
    const heroGrid = document.querySelector('.hero-grid');

    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
            if (heroGrid) {
                heroGrid.style.opacity = Math.max(0, 1 - scrolled / 500);
            }
        });
    }

    console.log('🚀 NABUS EXPANSION v4 initialized');
    console.log('📡 Systems online. Ready for deployment.');
});

// === GLOBAL: About Modal ===
function openAboutModal() {
    const aboutModal = document.getElementById('aboutModal');
    if (aboutModal) {
        aboutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
