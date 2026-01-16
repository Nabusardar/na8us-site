let articleLoaded = false;

function openModal() {
    document.getElementById('articleModal').classList.add('active');
    document.body.style.overflow = 'hidden';

    if (!articleLoaded) {
        fetchArticle();
    }
}

function closeModal() {
    document.getElementById('articleModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function fetchArticle() {
    const path = 'logs/articles/article1/article1.md';
    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error('Article not found (404)');
            return response.text();
        })
        .then(text => {
            const html = parseMarkdown(text);
            document.getElementById('modal-content').innerHTML = html;
            articleLoaded = true;
        })
        .catch(err => {
            console.error(err);
            document.getElementById('modal-content').innerHTML = `<p style="color:red; text-align:center;">Ошибка загрузки статьи: ${err.message}<br>Проверьте путь: ${path}</p>`;
        });
}

function parseMarkdown(text) {
    // Simple Markdown Parser
    let html = text;

    // Remove Frontmatter (between ---)
    html = html.replace(/^---[\s\S]*?---/, '');

    // Image (Assuming the image path in MD is relative, we might need to fix it or use the one from HTML)
    // We will inject the main cover image manually first
    const coverImg = '<img src="logs/articles/article1/article1.jpg" alt="Cover" class="modal-cover">';

    // Headers
    html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');

    // Bold
    html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');

    // Lists
    html = html.replace(/^\d\.\s+(.*)$/gm, '<li>$1</li>');
    // Wrap lis in ol (simple hack, assumes contiguous lists)
    // For this specific article structure, we can just wrap the whole thing in paragraphs

    // Paragraphs (double newline)
    html = html.split(/\n\n/).map(p => {
        if (p.trim().startsWith('<h') || p.trim().startsWith('<li')) return p;
        return `<p>${p.replace(/\n/g, '<br>')}</p>`;
    }).join('');

    return coverImg + html;
}