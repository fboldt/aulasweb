
const tarefa2 = () => {
	const lista = document.createElement('ol')
	lista.id = 'indexlist'
	const h1 = document.querySelector('h1')
	if (h1) {
		h1.after(lista)
	} else {
		document.body.prepend(lista)
	}
	const h2s = document.querySelectorAll('h2')
	for (let i = 0; i < h2s.length; i++) {
		const h2 = h2s[i]
		h2.id = `sec${i+1}`
		const item = document.createElement('li')
		item.innerHTML = `<a href="#sec${i+1}">${h2.textContent}</a>`
		lista.appendChild(item)
		const lnkidx = document.createElement('a')
		lnkidx.href = "#indexlist"
		lnkidx.textContent = 'índice'
		h2.after(lnkidx)
	}
}
tarefa2()

const tarefa4 = () => {
	const title = document.querySelector('h1, h2, h3, h4, h5, h6')
	if (title) {
		const tag = title.tagName
		switch (tag) {
			case 'H1': title.style.fontSize = '2em'
			break
			case 'H2': title.style.fontSize = '1.5em'
			break
			case 'H3': title.style.fontSize = '1.17em'
			break
			case 'H4': title.style.fontSize = '1em'
			break
			case 'H5': title.style.fontSize = '0.83em'
			break
			case 'H6': title.style.fontSize = '0.67em'
			break
			default: title.style.fontSize = '2em'
		}
		const plus = document.createElement('button')
		plus.textContent = '+'
		const minus = document.createElement('button')
		minus.textContent = '-'
		title.after(plus)
		title.after(minus)
		minus.addEventListener('click', reduce)
		plus.addEventListener('click', increase)
	}
	function reduce() {
		changeSize(0.75)
	}
	function increase() {
		changeSize(1.33)
	}
	function changeSize(proportion) {
		let fontSize = title.style.fontSize
		fontSize = fontSize.slice(0, fontSize.indexOf('em'))
		let size = Number.parseFloat(fontSize)
		size = (size*proportion)
		title.style.fontSize = `${size}em`
	}
}
tarefa4()
/*

		*/