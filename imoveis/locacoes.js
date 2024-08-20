document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores dos filtros
    const tipo = document.getElementById('tipo').value;
    const preco = document.getElementById('preco').value;
    const localizacao = document.getElementById('localizacao').value;
    const aceitaPet = document.getElementById('aceita-pet').value;
    const garagem = document.getElementById('garagem').value;

    // Aqui você pode adicionar a lógica para filtrar os imóveis com base nos valores capturados.
    // Por enquanto, isso apenas imprime os valores no console.
    console.log({
        tipo,
        preco,
        localizacao,
        aceitaPet,
        garagem
    });

    // Exemplo de como os imóveis podem ser filtrados e exibidos:
    // Atualizar a listagem de imóveis com base nos filtros.
    updatePropertyListing(tipo, preco, localizacao, aceitaPet, garagem);
});

function updatePropertyListing(tipo, preco, localizacao, aceitaPet, garagem) {
    const propertyGrid = document.getElementById('property-grid');
    propertyGrid.innerHTML = ''; // Limpa a listagem atual

    // Aqui você pode adicionar o código para exibir os imóveis que correspondem aos filtros.
    // Exemplo fictício:
    const filteredProperties = [
        // Adicione objetos representando os imóveis filtrados
        { id: 1, name: 'Apartamento 1', image: 'img1.jpg', price: 'R$ 2.500', location: 'Centro', pet: 'Sim', garage: 'Sim' },
        { id: 2, name: 'Casa 2', image: 'img2.jpg', price: 'R$ 3.000', location: 'Zona Sul', pet: 'Não', garage: 'Sim' },
        // Outros imóveis...
    ];

    filteredProperties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.className = 'property';
        propertyDiv.innerHTML = `
            <img src="${property.image}" alt="${property.name}">
            <div class="property-details">
                <h3>${property.name}</h3>
                <p>Preço: ${property.price}</p>
                <p>Localização: ${property.location}</p>
                <p>Aceita Pet: ${property.pet}</p>
                <p>Garagem: ${property.garage}</p>
            </div>
        `;
        propertyGrid.appendChild(propertyDiv);
    });
}
