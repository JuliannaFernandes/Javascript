let musica = document.querySelector('audio'); // pegando tag audio

document.querySelector('.btn-play').addEventListener('click', tocarMusica); // adicionando evento de click no botão play

function tocarMusica() {
    musica.play();
    document.querySelector('.btn-pause').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none';

}
