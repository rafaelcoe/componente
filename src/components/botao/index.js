import './style.css';

class Botao {
	constructor() {
		this.callback = function () {};
	}

	setTitle(t) {
		this.title = t;
	}

	setClick(f) {
		this.callback = f;
	}

	criarBotao() {
		let b = document.createElement('button');
		b.classList.add('btn');
		b.innerHTML = this.title;
		b.addEventListener('click', this.callback);

		return b;
	}
}

export default Botao;
