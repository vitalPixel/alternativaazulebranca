const newsModal = document.getElementById('newsModal');
const socioInput = document.getElementById('socioInput');
const emailInput = document.getElementById('email');

function openModal() {
    emailValue = emailInput.value;
    if (!emailValue) {
        alert('Preenche o campo de email, por favor');
        return;
    }
    console.log(emailValue)
    newsModal.style.display = "block";
}

function updateSocioValue(value) {
    socioInput.value = value;
    console.log(socioInput.value);
}

function submitForm() {
    const form = document.querySelector('.newsletter__form');
    const socioValue = document.getElementById('socioInput').value;

    if (!socioValue) {
        alert('Seleciona uma opção, por favor');
        return;
    }

    console.log(socioInput.value);
    console.log(emailInput.value);
    form.submit();
    newsModal.style.display = "none";
    form.reset();
}