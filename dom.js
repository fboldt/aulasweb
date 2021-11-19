criaRodape();
criaCabecalho();
criaSecoes();
numeraSecoes();
criaSubsecoes();
numeraSubsecoes();

function numeraSubsecoes() {
    let secoes = document.querySelectorAll('section')
    secoes.forEach(secao => {
        let subsecoes = secao.querySelectorAll('.subsecao');
        let i = 0;
        subsecoes.forEach(subsecao => {
            subsecao.dataset.numero = ++i;
            let tituloSubsecao = subsecao.querySelector('h3');
            let numeroSecao = subsecao.parentElement.dataset.numero;
            tituloSubsecao.textContent = `${numeroSecao}.${subsecao.dataset.numero}. ${tituloSubsecao.textContent}`;
        });
    });
}

function criaSubsecoes() {
    let titulosSubsecoes = document.querySelectorAll("h3");
    titulosSubsecoes.forEach(tituloSubsecao => {
        let subsecao = document.createElement('div');
        subsecao.classList.add('subsecao');
        tituloSubsecao.before(subsecao);
        subsecao.append(tituloSubsecao);
        let proximo = subsecao.nextElementSibling;
        while (proximo != null && !proximo.matches("h3")) {
            subsecao.append(proximo);
            proximo = subsecao.nextElementSibling;
        }
    });
}

function numeraSecoes() {
    let secoes = document.querySelectorAll('section');
    let i = 0;
    secoes.forEach(secao => {
        secao.dataset.numero = ++i;
        let tituloSecao = secao.querySelector('h2');
        tituloSecao.textContent = `${secao.dataset.numero}. ${tituloSecao.textContent}`;
    });
}

function criaSecoes() {
    let titulosSecoes = document.querySelectorAll("h2");
    titulosSecoes.forEach(tituloSecao => {
        let secao = document.createElement('section');
        tituloSecao.before(secao);
        secao.append(tituloSecao);
        let proximo = secao.nextElementSibling;
        while (proximo != null && !proximo.matches("h2,footer")) {
            secao.append(proximo);
            proximo = secao.nextElementSibling;
        }
    });
}

function criaCabecalho() {
    let cabecalho = document.body.querySelector('header');
    let tituloPrincipal = document.body.querySelector('h1');
    if (cabecalho == null && tituloPrincipal != null) {
        cabecalho = document.createElement('header');
        document.body.prepend(cabecalho);
        cabecalho.append(tituloPrincipal);
        let proximo = cabecalho.nextElementSibling;
        while (proximo != null && !proximo.matches("h2,footer")) {
            cabecalho.append(proximo);
            proximo = cabecalho.nextElementSibling;
        }
    }
}

function criaRodape() {
    let rodape = document.querySelector('footer');
    if (rodape == null) {
        rodape = document.createElement('footer');
    }
    document.body.append(rodape);
    rodape.innerHTML = 'boldt.pro.br';
}

