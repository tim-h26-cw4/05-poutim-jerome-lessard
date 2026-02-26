import Icons from './utils/Icons.js';

// La ligne suivante devrait être au TOUT début du init() du Main
class main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
  }
}
new main();
