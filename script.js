document.addEventListener('DOMContentLoaded', () => {
    // Parallax Floating Effect
    document.addEventListener('mousemove', (e) => {
        const units = document.querySelectorAll('.unit');
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        units.forEach(unit => {
            const speed = unit.getAttribute('data-speed') || 1;
            unit.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
        });
    });
});

function openModal() {
    document.getElementById('articleModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('articleModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}