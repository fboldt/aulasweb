const ordem = 3;
const numerosDisponiveis = [...Array(ordem**2+1).keys()].slice(1);

document.addEventListener('DOMContentLoaded', () => {
    insereTabela(ordem);
});

function insereTabela(ordem=3) {
    const tabela = document.createElement('table');
    document.body.append(tabela);
    for (let i=0; i<ordem; i++) {
        const linha = document.createElement('tr');
        tabela.append(linha);
        for (let j=0; j<ordem; j++) {
            const celula = document.createElement('td');
            linha.append(celula);
            insereInput(celula);
            celula.id = `${i}:${j}`;
        }
    }
}

function insereInput(celula) {
    const input = document.createElement('input');
    input.maxLength = 1;
    celula.append(input);
    input.addEventListener('change', () => {
        const valor = parseInt(input.value);
        const valorAntigo = parseInt(celula.dataset.valor);
        console.log(valor,valorAntigo);
        if (!isNaN(valorAntigo) && valorAntigo != valor) {
            delete celula.dataset.valor;
            numerosDisponiveis[valorAntigo-1] = valorAntigo;
        }
        if (valorPermitido(valor)) {
            celula.dataset.valor = valor;
            delete numerosDisponiveis[valor-1];
            input.classList.remove("errado");
        } else {
            input.classList.add("errado");
        }
        console.log(numerosDisponiveis);
    });
}

function valorPermitido(valor) {
    const valorDisponivel = numerosDisponiveis.includes(valor);
    return valorDisponivel;
}