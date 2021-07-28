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

function criarGrid(tamanho) {
    let grid = [...Array(tamanho**2).keys()];
    return grid;
}

function mostrarGrid(grid) {
    const tamanho = Math.floor(Math.sqrt(grid.length));
    const table = document.createElement('table');
    for(i=0; i<tamanho; i++) {
        const tr = document.createElement('tr');
        for(j=0; j<tamanho; j++) {
            const td = document.createElement('td');
            td.innerHTML = grid[i*tamanho+j];
            tr.append(td);
            if (j%3 == 2 && j<tamanho-1) {
                td.style.borderRight = 'solid 3px';
            }
        }
        table.append(tr);
        if (i%3 == 2 && i<tamanho-1) {
            tr.style.borderBottom = 'solid 3px';
        }
    }
    document.body.append(table);
}
