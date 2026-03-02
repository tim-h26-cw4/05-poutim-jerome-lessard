export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = element.querySelectorAll('.js-type');
    this.selectedType = '';
    this.isActive = false;
    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
      type.addEventListener('click', this.unselectType.bind(this));
      
    }
  }

  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    event.currentTarget.classList.toggle('is-active');
    this.isActive = true
    this.selectedType = event.currentTarget.innerText;

    this.updatePhoto();
  }

  unselectType(event){
    event.currentTarget.classList.remove('is-active');
    this.isActive = false
    this.selectedType = '';

    this.updatePhoto();
  }

  updatePhoto() {
    const image = this.element.querySelector('.js-image');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
