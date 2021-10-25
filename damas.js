const tamanhoCelula = 4;
let circId = 0;
document.body.append(criaTabuleiro());

function criaTabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
            linha.append(celula);

            celula.style.width = `${tamanhoCelula}em`;
            celula.style.height = `${tamanhoCelula}em`;
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black';
                let peca = criaPeca();
                celula.append(peca);
                let circulo;
                if (i * 8 + j <= 24) {
                    circulo = criaCirculo('brown');
                    peca.append(circulo);
                } else if (i * 8 + j >= 40) {
                    circulo = criaCirculo('beige')
                    peca.append(circulo);
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
    return tabela;
}

function criaPeca() {
    let peca = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    peca.setAttributeNS(null, 'width', `${tamanhoCelula}em`);
    peca.setAttributeNS(null, 'height', `${tamanhoCelula}em`);
    return peca;
}

function criaCirculo(cor = 'red') {
    let circulo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circulo.setAttributeNS(null, 'cx', `${tamanhoCelula / 2}em`);
    circulo.setAttributeNS(null, 'cy', `${tamanhoCelula / 2}em`);
    circulo.setAttributeNS(null, 'r', `${tamanhoCelula / 2.15}em`);
    circulo.setAttributeNS(null, 'fill', cor);
    circulo.setAttribute('id', `circulo-${circId++}`);
    return circulo;
}
