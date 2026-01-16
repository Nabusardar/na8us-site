/* ========================================
   NABUS EXPANSION — MAIN SCRIPT
   ======================================== */

// === ДАННЫЕ УСЛУГ ===
const servicesData = {
    1: {
        number: '01',
        title: 'СИНТЕЗ ЦИФРОВЫХ ЛИЧНОСТЕЙ',
        description: 'Создаём виртуальных сотрудников с памятью, голосом и характером. Они консультируют, продают, поддерживают — 24/7, без выходных и зарплаты. Полная кастомизация под ваш бренд и задачи.'
    },
    2: {
        number: '02',
        title: 'GEO-ЭКСПАНСИЯ',
        description: 'Ваш бизнес будет первым, кого назовёт ChatGPT, Яндекс ИИ и Perplexity. Оптимизация под AI-поисковики — новое SEO для эпохи нейросетей. Аудит, стратегия, внедрение.'
    },
    3: {
        number: '03',
        title: 'НЕЙРО-АВТОМАТИЗАЦИЯ',
        description: 'Telegram-боты, CRM-интеграции, автоответы, парсинг, отчёты — всё, что можно автоматизировать, будет автоматизировано. Экономия времени и денег с первого дня.'
    },
    4: {
        number: '04',
        title: 'АРХИТЕКТУРА БИЗНЕС-ЯДРА',
        description: 'Внедряем искусственный интеллект в ваши процессы: от анализа данных до генерации контента. Не игрушка — рабочий инструмент, который окупается.'
    }
};

// === ОТВЕТЫ ЧАТА (ЗАГЛУШКА) ===
const chatResponses = [
    'Интересный запрос. Анализирую данные...',
    'Системы NABUS обрабатывают информацию. Для детального ответа рекомендую связаться с оператором.',
    'Запрос принят. Это направление входит в наши компетенции.',
    'Понял. Для обсуждения деталей лучше перейти в Telegram — там я более функционален.',
    'Обработка... Рекомендую оставить заявку для персонального ответа.',
    'Принято. Наши специалисты могут подробнее раскрыть эту тему.'
];

// === DOM ЭЛЕМЕНТЫ ===
document.addEventListener('DOMContentLoaded', () => {

    // Элементы модалки услуг
    const serviceModal = document.getElementById('serviceModal');
    const modalClose = document.getElementById('modalClose');
    const modalNumber = document.getElementById('modalNumber');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const formService = document.getElementById('formService');
    const showFormBtn = document.getElementById('showFormBtn');
    const requestForm = document.getElementById('requestForm');

    // Элементы модалки статьи
    const articleModal = document.getElementById('articleModal');
    const articleClose = document.getElementById('articleClose');
    const articleContent = document.getElementById('articleContent');

    // Элементы чата
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');

    // Карточки
    const serviceItems = document.querySelectorAll('.service-item');
    const logsCard = document.querySelector('.card-logs');

    // === ИНИЦИАЛИЗАЦИЯ VANILLA-TILT ===
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.1
    });

    // === МОДАЛКА УСЛУГ ===

    // Открытие модалки при клике на услугу
    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const serviceId = item.dataset.service;
            const service = servicesData[serviceId];

            if (service) {
                modalNumber.textContent = service.number;
                modalTitle.textContent = service.title;
                modalDescription.textContent = service.description;
                formService.value = service.title;

                // Сброс формы
                requestForm.classList.remove('active');
                requestForm.reset();

                serviceModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Закрытие модалки услуг
    modalClose.addEventListener('click', closeServiceModal);
    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) closeServiceModal();
    });

    function closeServiceModal() {
        serviceModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Показать форму заявки
    showFormBtn.addEventListener('click', () => {
        requestForm.classList.toggle('active');
    });

    // Отправка формы (пока в консоль, потом подключим n8n)
    requestForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(requestForm);
        const data = {
            name: formData.get('name'),
            contact: formData.get('contact'),
            service: formData.get('service')
        };

        console.log('Заявка:', data);

        // TODO: Отправка в n8n webhook
        // fetch('https://n8n.na8us.com/webhook/...', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });

        // Показываем сообщение
        alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        closeServiceModal();
    });

    // === МОДАЛКА СТАТЬИ ===

    // Открытие статьи
    logsCard.addEventListener('click', async () => {
        articleModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        articleContent.innerHTML = '<p style="color: var(--cyan);">Загрузка...</p>';

        try {
            const response = await fetch('logs/articles/article1/article1.md');
            if (!response.ok) throw new Error('Файл не найден');

            const markdown = await response.text();
            articleContent.innerHTML = marked.parse(markdown);
        } catch (error) {
            articleContent.innerHTML = '<p style="color: #ff4444;">Ошибка загрузки статьи. Попробуйте позже.</p>';
            console.error('Ошибка загрузки статьи:', error);
        }
    });

    // Закрытие модалки статьи
    articleClose.addEventListener('click', closeArticleModal);
    articleModal.addEventListener('click', (e) => {
        if (e.target === articleModal) closeArticleModal();
    });

    function closeArticleModal() {
        articleModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // === ЧАТ (ЗАГЛУШКА) ===

    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Добавляем сообщение пользователя
        addMessage(text, 'user');
        chatInput.value = '';

        // Имитация ответа бота
        setTimeout(() => {
            const randomResponse = chatResponses[Math.floor(Math.random() * chatResponses.length)];
            addMessage(randomResponse, 'bot');
        }, 800 + Math.random() * 1000);
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

    // Защита от XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Отправка по клику
    chatSend.addEventListener('click', sendMessage);

    // Отправка по Enter
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // === ЗАКРЫТИЕ МОДАЛОК ПО ESC ===
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeServiceModal();
            closeArticleModal();
        }
    });

});