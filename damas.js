document.body.append(getTabuleiro());

function getTabuleiro() {
    const size = 8;
    let tabela = document.createElement('table');
    tabela.setAttribute('id', 'tabuleiro');

    tabela.style.borderStyle = "solid";
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < size; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < size; j++) {
            let celula = document.createElement('td');
            tabela.append(celula);

            celula.style.width = '3em';
            celula.style.height = '3em';
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black';
                if (i * 8 + j <= 24) {
                    celula.append(getPeca('brown'));
                } else if (i * 8 + j >= 40) {
                    celula.append(getPeca('beige'));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    }
    return tabela;
}

function getPeca(cor = 'red') {
    peca = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    peca.setAttributeNS(null, 'width', '3em');
    peca.setAttributeNS(null, 'height', '3em');
    let circulo = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circulo.setAttributeNS(null, 'cx', '1.5em');
    circulo.setAttributeNS(null, 'cy', '1.5em');
    circulo.setAttributeNS(null, 'r', '20');
    circulo.setAttributeNS(null, 'fill', cor);
    peca.append(circulo);
    return peca;
}
