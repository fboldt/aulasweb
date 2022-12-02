const tamanhoCelula = 40
let pecaId = 0
let imgid
document.body.append(criaTabuleiro())

function criaTabuleiro() {
  const tamanho = 8
  const tabela = document.createElement('table')

  tabela.style.borderStyle = 'solid'
  tabela.style.borderSpacing = 0
  tabela.style.margin = 'auto'

  for (let i = 0; i < tamanho; i++) {
    const linha = document.createElement('tr')
    tabela.append(linha)
    for (let j = 0; j < tamanho; j++) {
      const celula = document.createElement('td')
	  celula.dataset.lin = i
	  celula.dataset.col = j
	  linha.append(celula)
      celula.style.width = `${tamanhoCelula}px`
      celula.style.height = `${tamanhoCelula}px`
      if (i % 2 == j % 2) {
		celula.addEventListener('dragover', permiteDropar)
        celula.style.backgroundColor = 'black'
        if (i * 8 + j <= 24) {
		  const peca = criaPeca('black')
		  peca.setAttribute('draggable', 'false')
          celula.append(peca)
		  celula.removeEventListener('dragover', permiteDropar)
        } else if (i * 8 + j >= 40) {
          celula.append(criaPeca('red'))
		  celula.removeEventListener('dragover', permiteDropar)
        }
      } else {
        celula.style.backgroundColor = 'white'
      }
    }
  };
  return tabela
}

function criaPeca(cor) {
  const imagem = document.createElement('img')
  imagem.classList.add('peca')
  imagem.id = `p${pecaId++}` 
  imagem.setAttribute('src', `img/${cor}.png`)
  imagem.setAttribute('width', `${tamanhoCelula-4}px`)
  imagem.setAttribute('height', `${tamanhoCelula-4}px`)
  imagem.addEventListener('drag', drag)
  return imagem
}

function permiteDropar(evento) {
  evento.preventDefault()
  const imagem = document.querySelector(`#${imgid}`) 
  const destino = evento.target
  
  if (jogadaValida()) {
	evento.target.addEventListener('drop', drop)
  } else {
	evento.target.removeEventListener('drop', drop)
  }
  
  function jogadaValida() {
	const {linori, colori, lindes, coldes} = extraiOrigemDestino()
	if (imagem.getAttribute('src') == 'img/red.png') {
	  return jogadaRed()
	}
	if (imagem.getAttribute('src') == 'img/black.png') {
	  return jogadaBlack()
	}
	return false
	  
	function extraiOrigemDestino() {
	  const linori = imagem.parentElement.dataset.lin
	  const colori = imagem.parentElement.dataset.col
	  const lindes = destino.dataset.lin
	  const coldes = destino.dataset.col
	  return {linori, colori, lindes, coldes}
	}
	
	function jogadaRed() {
	  return jogadaComum() 
	  function jogadaComum() {
		return linhaAcima() && colunaVizinha()
	  }	  
	}

	function jogadaBlack() {
	  return jogadaComum()
	  function jogadaComum() {
		return linhaAbaixo() && colunaVizinha()
	  }	  
	}
	
	function linhaAcima() {
	  return (lindes == linori-1)
	}
	function linhaAbaixo() {
	  return (lindes-1 == linori)
	}
	function colunaVizinha() {
	  return (colori == coldes-1) || (colori-1 == coldes)
	}
  }
}

function drag(evento) {
  imgid = evento.target.id
}

function drop(evento) {
  const imagem = document.querySelector(`#${imgid}`)
  imagem.parentElement.addEventListener('dragover', permiteDropar)
  evento.target.appendChild(imagem)
  imagem.parentElement.removeEventListener('dragover', permiteDropar)
  trocaVezJogador()
  
  function trocaVezJogador() {
	const pecas = document.querySelectorAll('.peca')
	pecas.forEach(peca => {
	  peca.draggable = !peca.draggable
	})
  }
}
