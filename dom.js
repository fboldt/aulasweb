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
            let numeroSecao = subsecao.parentElement.dataset.numeroSecao;
            tituloSubsecao.textContent = `${numeroSecao}.${subsecao.dataset.numero}. ${tituloSubsecao.textContent}`;
        });
    });
}

function criaSubsecoes() {
    let tituloSubsecoes = document.querySelectorAll('h3');
    tituloSubsecoes.forEach(tituloSubsecao => {
        let subsecao = document.createElement('div');
        subsecao.classList.add('subsecao');
        tituloSubsecao.before(subsecao);
        subsecao.append(tituloSubsecao);
        let proximoElemento = subsecao.nextElementSibling;
        while (proximoElemento != null && !proximoElemento.matches('h3')) {
            subsecao.append(proximoElemento);
            proximoElemento = subsecao.nextElementSibling;
        }
    });
}

function numeraSecoes() {
    let secoes = document.querySelectorAll('section');
    let i = 0;
    secoes.forEach(secao => {
        secao.dataset.numeroSecao = ++i;
        let tituloSecao = secao.querySelector('h2');
        tituloSecao.textContent = `${secao.dataset.numeroSecao}. ${tituloSecao.textContent}`;
    });
}

function criaSecoes() {
    let titulosSecoes = document.querySelectorAll('h2');
    titulosSecoes.forEach(tituloSecao => {
        let secao = document.createElement('section');
        tituloSecao.before(secao);
        secao.append(tituloSecao);
        let proximoElemento = secao.nextElementSibling;
        while (proximoElemento != null && !proximoElemento.matches('h1,h2,footer')) {
            secao.append(proximoElemento);
            proximoElemento = secao.nextElementSibling;
        }
    });
}

function criaCabecalho() {
    let cabecalho = document.querySelector('header');
    let tituloPrincipal = document.querySelector('h1');
    if (cabecalho == null && tituloPrincipal != null) {
        cabecalho = document.createElement('header');
        document.body.prepend(cabecalho);
        cabecalho.append(tituloPrincipal);
        let proximoElemento = cabecalho.nextElementSibling;
        while (proximoElemento != null && !proximoElemento.matches("h1,h2,footer")) {
            cabecalho.append(proximoElemento);
            proximoElemento = cabecalho.nextElementSibling;
        }
    }
}

function criaRodape() {
    let rodape = document.querySelector('footer');
    if (rodape == null) {
        rodape = document.createElement('footer');
    }
    document.body.append(rodape);
    rodape.textContent = 'boldt.pro.br';
}