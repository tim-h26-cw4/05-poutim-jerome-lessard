import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = document.querySelector('.js-container');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }
    const btnValidate = this.element.querySelector('.js-submit');
    btnValidate.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    this.container.innerHTML = '';

    let numPoutine = 0;

    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];

      if (poutine.isActive == true) {
        numPoutine++;
      }
    }

    const p = document.createElement('p');
    p.innerText = `Nombre total de poutine(s) : ${numPoutine}`;
    this.container.appendChild(p);
  }
}
