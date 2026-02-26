import Icons from './utils/Icons.js';
import Chef from './Chef.js';

class main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load(); // La ligne suivante devrait être au TOUT début du init() du Main
    const chefs = document.querySelectorAll('[data-component="Chef"]');
    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];
      new Chef(chef);
    }
  }
}
new main();
