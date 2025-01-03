const newsModal = document.getElementById('newsModal');

function openModal() {
    newsModal.style.display = "flex";
}

function closeModal() {
    newsModal.style.display = "none";
}

document.addEventListener('click', function(event) {
    const closeNewsModal = document.querySelector('.newsletter__modal');

    if (event.target === closeNewsModal) {
        closeModal();
    }
});