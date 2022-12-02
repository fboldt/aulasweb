document.addEventListener("DOMContentLoaded", insereFormulario)

function insereFormulario() {
	const elem = document.createElement('form')
	elem.innerHTML = `
	<input type="text" id="novotitulo" placeholder="Novo Título"><br>
	<input type="text" id="novacor" placeholder="Nova Cor"><br>
	<button>Muda título</button>`

	const titulo = document.querySelector('h1')
	if (titulo != null) {
		const proximoIrmao = titulo.nextElementSibling;
		titulo.parentElement.insertBefore(elem, proximoIrmao)
	}
	const botao = elem.querySelector('button')
	botao.addEventListener('click', mudatitulo)
}

function mudatitulo(evento) {
	evento.preventDefault()
    const formulario = evento.target.parentElement
	const novotitulo = formulario.querySelector('#novotitulo')
	if (novotitulo && novotitulo.value != "") {
		mudatextotitulo(novotitulo.value)
	}
	const novacor = formulario.querySelector('#novacor')
	if (novacor && novacor.value != "") {
		mudacortitulo(novacor.value)
	}
}

function mudatextotitulo(novotexto) {
	const titulo = document.querySelector('h1')
	if (titulo != null) {
		titulo.innerText = novotexto
	}
}

function mudacortitulo(novacor) {
	const titulo = document.querySelector('h1')
	if (titulo != null) {
		titulo.style.color = novacor
	}
}

