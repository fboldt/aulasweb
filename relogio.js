function mostraHora() {
    let titulo = document.querySelector('h1');
    let agora = new Date();
    titulo.textContent = agora.toLocaleTimeString();
}
mostraHora();
setInterval(mostraHora, 1000);