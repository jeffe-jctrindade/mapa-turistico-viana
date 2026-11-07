// 1. Inicializa o mapa centralizado no município de Viana - MA (zoom nível 14)
var map = L.map('map').setView([-3.2238, -45.0036], 14);

// 2. Carrega as imagens do mapa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// 3. Cadastre os pontos turísticos no Array abaixo
var pontosTuristicos = [
    {
        nome: "Igreja Matriz de Nossa Sra. da Conceição",
        lat: -3.2240,
        lng: -45.0040,
        descricao: "Patrimônio histórico e religioso construído no século XVIII no centro da cidade.",
        imagem: "imagens/matriz.jpg"
    },
    {
        nome: "Parque dos Igarapés / Lagos",
        lat: -3.2280,
        lng: -45.0080,
        descricao: "Área de beleza natural com vista privilegiada para as águas da baixada vianense.",
        imagem: "imagens/lagoa.jpg"
    }
];

// 4. Percorre a lista e insere os marcadores com as caixas de texto (popups)
pontosTuristicos.forEach(function(ponto) {
    var conteudo = `
        <div class="popup-card">
            <h3>${ponto.nome}</h3>
            <p>${ponto.descricao}</p>
            <img src="${ponto.imagem}" alt="${ponto.nome}">
        </div>
    `;

    L.marker([ponto.lat, ponto.lng])
     .addTo(map)
     .bindPopup(conteudo);
});