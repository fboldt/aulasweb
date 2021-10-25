function criaH1(id) {
    let titulo = document.createElement('h1');
    titulo.setAttribute('id', id)
    document.body.prepend(titulo);
}

function mostraHora(id) {
    let titulo = document.querySelector(`#${id}`);
    let agora = new Date();
    titulo.textContent = agora.toLocaleTimeString();
}

const mostrahoraid = 'idmh';
criaH1(mostrahoraid);
mostraHora(mostrahoraid);
setInterval(function () {
    mostraHora(mostrahoraid);
}, 1000);