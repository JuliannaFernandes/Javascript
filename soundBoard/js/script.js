// array de objetos com os audios e suas legendas
let audios = [
    {
        audio: 'assets/audio/cantadas-amor-da-vida.mp3',
        legenda: 'Cantada',
    },
    {
        audio: 'assets/audio/cantadas-joelho.mp3',
        legenda: 'Cantada',
    },
    {
        audio: 'assets/audio/cavalo.mp3',
        legenda: 'CAVALO',
    },
    {
        audio: 'assets/audio/danca-gatinho.mp3',
        legenda: 'Dança Gatinho',
    },
    {
        audio: 'assets/audio/ele-gosta.mp3',
        legenda: 'Ele Gosta',
    },
    {
        audio: 'assets/audio/pare.mp3',
        legenda: 'PARE',
    },
    {
        audio: 'assets/audio/som-inentendivel.mp3',
        legenda: 'AWUAWAUWA',
    },
    {
        audio: 'assets/audio/tome.mp3',
        legenda: 'TOME',
    },
    {
        audio: 'assets/audio/ui.mp3',
        legenda: 'UI',
    },
    
];

// variaveis
let botoes = document.querySelectorAll('.botaoVermelho');
let legenda = document.querySelectorAll('p');
let audio = document.querySelector('audio');

for(let i = 0; i < 9; i++){
    legenda[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

botoes.forEach(botaoVermelho => {
    botaoVermelho.addEventListener('click', () => {
    let som = audios[botaoVermelho.getAttribute('data-item')];
    audio.setAttribute('src', som.audio);
    audio.addEventListener('loadeddata', () => { // evento que espera o audio carregar
        audio.play();
    });
});
})
