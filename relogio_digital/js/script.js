function atualizaRelogio() {
    let agora = new Date(); // Objeto Date
    let hora = agora.getHours(); // Método getHours
    let minuto = agora.getMinutes(); // Método getMinutes
    let segundo = agora.getSeconds(); // Método getSeconds

    let relogio = document.querySelector('.display'); // Seleciona o elemento com a classe display
    relogio.innerHTML = `${hora}:${minuto}:${segundo}`; // Insere o conteúdo no elemento
}


setInterval(atualizaRelogio, 1000); // Função que executa a cada 1000 milissegundos (1 segundo)