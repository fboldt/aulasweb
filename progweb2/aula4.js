document.addEventListener("DOMContentLoaded",  inicio)
document.addEventListener("DOMContentLoaded",  fim)

function inicio() {
	function interna(texto) {
		console.log(texto)
	}
	interna('a função "interna" funciona dentro da função "inicio"')
}

function fim() {
	console.log('a função "fim" é chamada')
	//interna('mas não consegue chamar "interna"')
}

