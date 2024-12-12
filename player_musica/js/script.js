// Lista de músicas
const musicas = [
    { 
        nome: 'California King', 
        autor: 'Bail Bonds', 
        src: 'assets/audio/California King - Bail Bonds.mp3', 
        img: 'assets/img/california.jpg' 
    },
    { 
        nome: 'Carousel Dreams', 
        autor: 'The Soundlings', 
        src: 'assets/audio/Carousel Dreams - The Soundlings.mp3', 
        img: 'assets/img/carousel.jpg' 
    },
    { 
        nome: 'Deck The Halls', 
        autor: 'The Soundlings', 
        src: 'assets/audio/Deck The Halls - The Soundlings.mp3', 
        img: 'assets/img/guitar.jpg'
    },
    { 
        nome: 'Going Home', 
        autor: 'The Soundlings', 
        src: 'assets/audio/Going Home - The Soundlings.mp3', 
        img: 'assets/img/house.jpg' 
    },
    { 
        nome: 'Jingle Bells', 
        autor: 'The Soundlings', 
        src: 'assets/audio/Jingle Bells - The Soundlings.mp3', 
        img: 'assets/img/garland.jpg' 
    },
    { 
        nome: 'I Know That I Need You', 
        autor: 'Bail Bonds', 
        src: 'assets/audio/I Know That I Need You - Bail Bonds.mp3', 
        img: 'assets/img/love.jpg' 
    },
    { 
        nome: 'On my Own', 
        autor: 'Bail Bonds', 
        src: 'assets/audio/On My Own - Bail Bonds.mp3', 
        img: 'assets/img/train.jpg'
    },
    { 
        nome: 'Silent Night', 
        autor: 'The Soundlings', 
        src: 'assets/audio/Silent Night - The Soundlings.mp3', 
        img: 'assets/img/silent.jpg' 
    },
];


// Seleção de elementos
const musica = document.querySelector('audio');
let indexMusica = 0;
const btnPlay = document.querySelector('.btn-play');
const btnPause = document.querySelector('.btn-pause');
const barraProgresso = document.querySelector('progress');
const tempoDecorrido = document.querySelector('.inicioMusica');
const duracaoMusica = document.querySelector('.fimMusica');
const imagem = document.querySelector('img');
const nomeMusica = document.querySelector('.descricao h2');
const autor = document.querySelector('.descricao i');
const musicaAnterior = document.querySelector('.anterior');
const proximaMusica = document.querySelector('.proxima');

// Eventos
btnPlay.addEventListener('click', tocarMusica);
btnPause.addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
musica.addEventListener('loadedmetadata', atualizarDuracao);
musica.addEventListener('ended', () => {
    indexMusica = (indexMusica + 1) % musicas.length;
    renderizarMusica(indexMusica);
});

musicaAnterior.addEventListener('click', () => {
    indexMusica = (indexMusica - 1 + musicas.length) % musicas.length;
    renderizarMusica(indexMusica);
});

proximaMusica.addEventListener('click', () => {
    indexMusica = (indexMusica + 1) % musicas.length;
    renderizarMusica(indexMusica);
});

// Funções
function tocarMusica() {
    musica.play();
    alternarBotaoPlayPause(true);
}

function pausarMusica() {
    musica.pause();
    alternarBotaoPlayPause(false);
}

function alternarBotaoPlayPause(estaTocando) {
    btnPlay.style.display = estaTocando ? 'none' : 'block';
    btnPause.style.display = estaTocando ? 'block' : 'none';
}

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    imagem.setAttribute('src', musicas[index].img);
    nomeMusica.textContent = musicas[index].nome;
    autor.textContent = musicas[index].autor;
    musica.load();
    tocarMusica();
}

function atualizarBarra() {
    const progresso = (musica.currentTime / musica.duration) * 100;
    barraProgresso.style.width = progresso + '%';
    tempoDecorrido.textContent = formatarTempo(Math.floor(musica.currentTime));
}

function atualizarDuracao() {
    duracaoMusica.textContent = formatarTempo(Math.floor(musica.duration));
}

function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = Math.floor(segundos % 60).toString().padStart(2, '0');
    return `${minutos}:${segundosRestantes}`;
}

