// 1. Inicializa o mapa centralizado no município de Viana - MA (zoom nível 14)
var map = L.map('map').setView([-3.2157904043627688, -44.998129493382734], 20);

// 2. Carrega as imagens do mapa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// 3. Cadastre os pontos turísticos no Array abaixo
var pontosTuristicos = [
// HISTÓRICOS    
    {
        nome: "Igreja Matriz de Nossa Sra. da Conceição",
        lat: -3.219638897310755,
        lng: -45.000738610356606,
        descricao: "Patrimônio histórico e religioso construído no século XVIII no centro da cidade.",
        imagem: "imagens/matriz.jpeg"
    },
    {
        nome: "Academia Vianense de Letras - AVL",
        lat: -3.219507688224516,
        lng: -45.001613619561574,
        descricao: "Entidade cultural sediada no município de Viana, no Maranhão, dedicada à preservação, estímulo e valorização da literatura, da história e das artes locais.",
        imagem: "imagens/avl.jpeg"
    },
    {
        nome: "Casas do Centro Histórico de Viana",
        lat: -3.2192066701760953,
        lng: -45.00191348342269,
        descricao: "É um importante acervo da arquitetura luso-maranhense e um dos conjuntos urbanos mais antigos do estado.",
        imagem: "imagens/centrohistorico.jpeg"
    },
    {
        nome: "Centro Histórico / Casarão Amarelo",
        lat: -3.219745210576752,
        lng: -45.002224661164945,
        descricao: "Conhecido historicamente como Sobrado Amarelo ou antigo prédio da Fábrica Santa Maria, é um dos principais marcos da arquitetura e da história do município de Viana, na Baixada Maranhense.",
        imagem: "imagens/casarao.jpg"
    },
    {
        nome: "Cais de Viana / Parque Dilu Melo",
        lat: -3.2216914145365614,
        lng: -44.9997233952708,
        descricao: "É um dos principais pontos turísticos e de lazer da cidade. O espaço recebe decorações e eventos tradicionais. Localizado às margens do Lago de Viana.",
        imagem: "imagens/cais.jpeg"
    },
    {
        nome: "Igarapé do Engenho / Cais Beira Rio",
        lat: -3.207833040487924, 
        lng: -44.970730597115995,
        descricao: "Área de beleza natural com vista privilegiada para as águas da baixada vianense. O igarapé serve como um elo natural que conecta o Lago de Viana ao Lago Aquiri.",
        imagem: "imagens/igarapedoengenho.jpg"
    },

// GEOGRÁFICOS
    {
        nome: "Lago de Viana",
        lat: -3.2335756994663174,
        lng: -45.00794589740899,
        descricao: "Lago de várzea, integrante da bacia do rio Pindaré e com influência de campos inundáveis que lembram um pantanal maranhense.",
        imagem: "imagens/lago1.jpeg"
    },
    {
        nome: "Outeiro do Mocoroca",
        lat: -3.2382066287533156,
        lng: -45.03744085800717,
        descricao: "Localizado às margens do Lago de Viana, no município de Viana, na Baixada Maranhense.",
        imagem: "imagens/mocoroca.jpeg"
    },
    {
        nome: "Galega",
        lat: -3.1706342633476448,
        lng: -45.00192433350712,
        descricao: "Conhecida por sua paisagem natural e por atrações na região dos lagos da cidade.",
        imagem: "imagens/galega1.jpeg"
    },
    {
        nome: "Colhereiras",
        lat: -3.1892099672722307,
        lng: -44.97420655207371,
        descricao: "Próximo à região do bairro Vinagre e da Avenida Vasco da Gama, fazendo ligação com áreas de recursos hídricos e naturais da região, como o Igarapé do Engenho.",
        imagem: "imagens/colhereira1.jpeg"
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
