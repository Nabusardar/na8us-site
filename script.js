document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Modal Logic
    const modal = document.getElementById('log-modal');
    const btn = document.getElementById('read-log-001');
    const span = document.getElementsByClassName('close-modal')[0];
    const modalBody = document.getElementById('modal-body');

    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            fetch('logs/articles/article1/article1.md')
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.text();
                })
                .then(text => {
                    modalBody.textContent = text;
                    modal.style.display = 'block';
                })
                .catch(error => {
                    modalBody.textContent = 'Error loading log: ' + error.message;
                    modal.style.display = 'block';
                });
        });
    }

    if (span) {
        span.onclick = function () {
            modal.style.display = 'none';
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});