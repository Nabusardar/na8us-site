function openModal() {
    document.getElementById('articleModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('articleModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}