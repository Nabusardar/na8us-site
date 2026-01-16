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
    // Remove Frontmatter
    let html = text.replace(/^---[\s\S]*?---/, '');

    // Inject Cover Image
    const coverImg = '<img src="logs/articles/article1/article1.jpg" alt="Cover">';

    // Headers
    html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');

    // Bold & Italic
    html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');

    // Lists
    html = html.replace(/^\d\.\s+(.*)$/gm, '<li>$1</li>');
    html = html.replace(/^\s*[\-\*]\s+(.*)$/gm, '<li>$1</li>');

    // Paragraphs
    html = html.split(/\n\n/).map(p => {
        if (p.trim().match(/^<(h|li)/)) return p;
        return `<p>${p.replace(/\n/g, '<br>')}</p>`;
    }).join('');

    return coverImg + html;
}

// Close on outside click
window.onclick = function (e) {
    const modal = document.getElementById('articleModal');
    if (e.target === modal) closeModal();
}