// Variáveis globais do mapa
var map;
var markersLayer = L.layerGroup();

// Lista completa de Pontos Turísticos
var pontosTuristicos = [
    // HISTÓRICOS    
    {
        tipo: "historico",
        nome: "Igreja Matriz de Nossa Sra. da Conceição",
        lat: -3.219638897310755,
        lng: -45.000738610356606,
        descricao: "Patrimônio histórico e religioso construído no século XVIII no centro da cidade.",
        imagem: "imagens/matriz.jpeg",
        audio: "audios/matriz.mp3"
    },
    {
        tipo: "historico",
        nome: "Academia Vianense de Letras - AVL",
        lat: -3.219507688224516,
        lng: -45.001613619561574,
        descricao: "Entidade cultural sediada no município de Viana, dedicada à preservação, estímulo e valorização da literatura, da história e das artes locais.",
        imagem: "imagens/avl.jpeg",
        audio: "audios/avl.mp3"
    },
    {
        tipo: "historico",
        nome: "Casas do Centro Histórico de Viana",
        lat: -3.2192066701760953,
        lng: -45.00191348342269,
        descricao: "É um importante acervo da arquitetura luso-maranhense e um dos conjuntos urbanos mais antigos do estado.",
        imagem: "imagens/centrohistorico.jpeg",
        audio: "audios/centrohistorico.mp3"
    },
    {
        tipo: "historico",
        nome: "Centro Histórico / Casarão Amarelo",
        lat: -3.219745210576752,
        lng: -45.002224661164945,
        descricao: "Conhecido historicamente como Sobrado Amarelo ou antigo prédio da Fábrica Santa Maria, é um dos principais marcos da arquitetura e da história.",
        imagem: "imagens/casarao.jpg",
        audio: "audios/casarao.mp3"
    },
    {
        tipo: "historico",
        nome: "Cais de Viana / Parque Dilu Melo",
        lat: -3.2211411322346506,
        lng: -45.00008062212574,
        descricao: "É um dos principais pontos turísticos e de lazer da cidade. O espaço recebe decorações e eventos tradicionais às margens do Lago.",
        imagem: "imagens/parquedilumelo.jpeg",
        audio: "audios/parquedilumelo.mp3"
    },
    {
        tipo: "historico",
        nome: "Igarapé do Engenho / Cais Beira Rio",
        lat: -3.207833040487924, 
        lng: -44.970730597115995,
        descricao: "Área de beleza natural com vista privilegiada. O igarapé serve como elo natural conectando o Lago de Viana ao Lago Aquiri.",
        imagem: "imagens/igarapedoengenho.jpg",
        audio: "audios/igarape.mp3"
    },

    // GEOGRÁFICOS / NATURAIS
    {
        tipo: "natural",
        nome: "Lago de Viana",
        lat: -3.2335756994663174,
        lng: -45.00794589740899,
        descricao: "Lago de várzea, integrante da bacia do rio Pindaré e com influência de campos inundáveis que lembram um pantanal maranhense.",
        imagem: "imagens/lago.jpeg",
        audio: "audios/lago.mp3"
    },
    {
        tipo: "natural",
        nome: "Outeiro do Mocoroca",
        lat: -3.2382066287533156,
        lng: -45.03744085800717,
        descricao: "Localizado às margens do Lago de Viana, no município de Viana, na Baixada Maranhense.",
        imagem: "imagens/mocoroca.jpeg",
        audio: "audios/mocoroca.mp3"
    },
    {
        tipo: "natural",
        nome: "Galega",
        lat: -3.1706342633476448,
        lng: -45.00192433350712,
        descricao: "Conhecida por sua paisagem natural e por atrações na região dos lagos da cidade.",
        imagem: "imagens/galega.jpeg",
        audio: "audios/galegas.mp3"
    },
    {
        tipo: "natural",
        nome: "Colhereiras",
        lat: -3.1892099672722307,
        lng: -44.97420655207371,
        descricao: "Próximo à região do bairro Vinagre e da Avenida Vasco da Gama, fazendo ligação com áreas de recursos hídricos e naturais.",
        imagem: "imagens/colhereira1.jpeg",
        audio: "audios/colhereira.mp3"
    },
    {
        tipo: "natural",
        nome: "Cais de Viana",
        lat: -3.2216914145365614,
        lng: -44.9997233952708,
        descricao: "Às margens do lago de viana, serve de porto para embarque de turistas na época da cheia e usado também para prática de esportes náuticos.",
        imagem: "imagens/cais.jpeg",
        audio: "audios/cais.mp3"
    }
];

// Função chamada ao clicar nas opções da tela inicial
function iniciarMapa(filtro) {
    // Esconde a tela de boas-vindas com efeito suave
    var welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.style.opacity = '0';
    setTimeout(function() {
        welcomeScreen.style.display = 'none';
    }, 400);

    // Inicializa o mapa caso ainda não tenha sido criado
    if (!map) {
        map = L.map('map').setView([-3.2078, -45.0036], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap'
        }).addTo(map);

        markersLayer.addTo(map);
    }

    // Limpa marcadores anteriores se houver
    markersLayer.clearLayers();

    // Filtra e adiciona os pontos correspondentes
    pontosTuristicos.forEach(function(ponto) {
        if (filtro === 'todos' || ponto.tipo === filtro) {
            
            // Link direto para o Google Maps com as coordenadas do ponto
            var urlGoogleMaps = `https://www.google.com/maps/dir/?api=1&destination=${ponto.lat},${ponto.lng}`;

            // Conteúdo HTML do Popup com Player de Áudio e Botão de Rota
            var conteudo = `
                <div class="popup-card">
                    <h3>${ponto.nome}</h3>
                    <p>${ponto.descricao}</p>
                    <img src="${ponto.imagem}" alt="${ponto.nome}">
                    <audio controls class="audio-player" src="${ponto.audio}"></audio>
                    <a href="${urlGoogleMaps}" target="_blank" class="btn-route">Quero conhecer este lugar</a>
                </div>
            `;

            var marker = L.marker([ponto.lat, ponto.lng]).bindPopup(conteudo);

            // Evento para parar o áudio automaticamente quando o balão for fechado
            marker.on('popupclose', function(e) {
                var popupNode = e.popup.getElement();
                if (popupNode) {
                    var audioEl = popupNode.querySelector('audio');
                    if (audioEl) {
                        audioEl.pause();
                        audioEl.currentTime = 0; // Reseta o áudio para o início
                    }
                }
            });

            markersLayer.addLayer(marker);
        }
    });

    // Força o Leaflet a recalcular o tamanho da tela após sumir com a capa
    setTimeout(function() {
        map.invalidateSize();
    }, 500);
}
