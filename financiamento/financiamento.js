function formatarValor(valor) {
    return valor.replace(/\D/g, "")
                .replace(/(\d)(\d{17})$/, "$1.$2")
                .replace(/(\d)(\d{14})$/, "$1.$2")
                .replace(/(\d)(\d{11})$/, "$1.$2")
                .replace(/(\d)(\d{8})$/, "$1.$2")
                .replace(/(\d)(\d{5})$/, "$1.$2")
                .replace(/(\d)(\d{2})$/, "$1,$2");
}

function calcularTaxaJuros(valorImovel, salarioMensal) {
    return (salarioMensal / valorImovel) * 0.1;
}

function calcularFinanciamento() {
    const valorImovelInput = document.getElementById('valorImovel').value.replace(/\./g, '').replace(',', '.');
    const salarioMensalInput = document.getElementById('salarioMensal').value.replace(/\./g, '').replace(',', '.');
    const parcelas = parseInt(document.getElementById('parcelas').value, 10);

    const valorImovel = parseFloat(valorImovelInput);
    const salarioMensal = parseFloat(salarioMensalInput);

    if (isNaN(valorImovel) || isNaN(salarioMensal) || isNaN(parcelas)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const taxaJuros = calcularTaxaJuros(valorImovel, salarioMensal);

    const valorFinanciado = valorImovel;
    const parcelaMensal = valorFinanciado * (taxaJuros * Math.pow(1 + taxaJuros, parcelas)) / (Math.pow(1 + taxaJuros, parcelas) - 1);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Valor da Parcela: R$ ${formatarValor(parcelaMensal.toFixed(2).replace('.', ','))}`;
}

document.getElementById('valorImovel').addEventListener('input', function() {
    this.value = formatarValor(this.value);
});

document.getElementById('salarioMensal').addEventListener('input', function() {
    this.value = formatarValor(this.value);
});
