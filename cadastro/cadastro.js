document.getElementById('loginFormElement').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = '../index.html';
});

document.getElementById('cadastroFormElement').addEventListener('submit', function(event) {
    event.preventDefault();

    const requiredFields = document.querySelectorAll('#cadastroFormElement [required]');
    let allFilled = true;

    requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
            allFilled = false;
        }
    });

    if (allFilled) {
        window.location.href = '../financiamento/financiamento.html';
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});
