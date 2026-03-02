import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = element.querySelector('.js-container');
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

    this.createHeader();
    this.createListItem();

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

  createHeader(){

    const h2 = document.createElement('h2');
    h2.innerText = "Voici le résumé de votre commande : ";
    this.container.appendChild(h2);

  }

  createListItem(){
    let numPoutine = 1;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      if(poutine.isActive == true){
        const p = document.createElement('p');
        p.innerText = `Poutine #${numPoutine++} - ${poutine.selectedType}`;
        this.container.appendChild(p);
      }
    }
  }
}
