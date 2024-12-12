let musica = document.querySelector('audio'); // pegando tag audio

document.querySelector('.btn-play').addEventListener('click', tocarMusica); // adicionando evento de click no botão play

document.querySelector('.btn-pause').addEventListener('click', pausarMusica);  

function tocarMusica() {
    musica.play();
    document.querySelector('.btn-pause').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.btn-play').style.display = 'block';
    document.querySelector('.btn-pause').style.display = 'none';
}