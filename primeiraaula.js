document.addEventListener("DOMContentLoaded", () => {
    criainputs();
    criabotao();
});
function mudatitulo(novotexto="Novo Texto") {
    const h1 = document.querySelector('h1');
    h1.innerText = novotexto;
}
function mudacor(novacor) {
    const h1 = document.querySelector('h1');
    h1.style.color = novacor;
}
function criabotao() {
    const botao = document.createElement('button');
    document.body.append(botao);
    botao.innerText = "Mudar Título";
    botao.addEventListener("click", () => {
        const inputtitulo = document.querySelector('#titulo');
        if (inputtitulo.value != "") {
            mudatitulo(inputtitulo.value);
        }
        const inputcor = document.querySelector('#cor');
        if (inputcor.value != "") {
            mudacor(inputcor.value);
        }                
        inputtitulo.value = '';
        inputcor.value = '';
    });
}
function criainputs() {
    const inputtitulo = document.createElement('input');
    document.body.append(inputtitulo);
    document.body.append(document.createElement('br'));
    inputtitulo.setAttribute("placeholder", "Novo Título");
    inputtitulo.setAttribute("id", "titulo");
    const inputcor = document.createElement('input');
    document.body.append(inputcor);
    document.body.append(document.createElement('br'));
    inputcor.setAttribute("placeholder", "Nova Cor");
    inputcor.setAttribute("id", "cor");
}
