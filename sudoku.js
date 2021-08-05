document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    criarTitulo();
    let grid = criarGrid(9);
    mostrarGrid(grid);
}

function criarTitulo() {
    const h1 = document.createElement('h1');
    h1.innerHTML = "Sudoku";
    document.body.append(h1);
}

function criarGrid(ordem) {
    let grid = Array(ordem**2);
    let pos;
    const offset = Math.ceil(Math.random()*ordem);
    const raiz = Math.floor(Math.sqrt(ordem));
    let mix = 0;
    while (mix % raiz == 0) {
        mix = Math.ceil(Math.random()*ordem);
    }
    for (let i=0; i<ordem; i++) {
        for (j=0; j<ordem; j++) {
            pos = i*ordem+j;
            grid[pos] = (i*raiz+j*mix+Math.floor(i/raiz)+offset)%(ordem)+1;
        }
    }
    for (let i=0; i<raiz; i++) {
        ori = Math.floor(Math.random()*raiz)+i*raiz;
        des = Math.floor(Math.random()*raiz)+i*raiz;
        trocalinhas(grid, ordem, ori, des);
    }
    for (let i=0; i<raiz; i++) {
        ori = Math.floor(Math.random()*raiz)+i*raiz;
        des = Math.floor(Math.random()*raiz)+i*raiz;
        trocacolunas(grid, ordem, ori, des);
    }
    return grid;
}

function trocalinhas(vetor, ordem, ori, des) {
    let tmp;
    for (let i=0; i<ordem; i++) {
        tmp = vetor[ordem*des+i];
        vetor[ordem*des+i] = vetor[ordem*ori+i];
        vetor[ordem*ori+i] = tmp;
    }
}

function trocacolunas(vetor, ordem, ori, des) {
    let tmp;
    for (let i=0; i<ordem; i++) {
        tmp = vetor[des+ordem*i];
        vetor[des+ordem*i] = vetor[ori+ordem*i];
        vetor[ori+ordem*i] = tmp;
    }
}

function mostrarGrid(grid) {
    const ordem = Math.floor(Math.sqrt(grid.length));
    const raiz = Math.floor(Math.sqrt(ordem));
    const table = document.createElement('table');
    for(let i=0; i<ordem; i++) {
        const tr = document.createElement('tr');
        for(let j=0; j<ordem; j++) {
            const td = document.createElement('td');
            td.innerText = grid[i*ordem+j];
            tr.append(td);
            if (j%raiz == raiz-1 && j<ordem-1) {
                td.style.borderRight = 'solid 3px';
            }
        }
        table.append(tr);
        if (i%raiz == raiz-1 && i<ordem-1) {
            tr.style.borderBottom = 'solid 3px';
        }
    }
    document.body.append(table);
}
