import AbstractComponent from '../src/AbstractComponent.js';

export class ChessboardEditor extends AbstractComponent {
  mount() {
    this.props.pieces.addEventListener('mousedown', (event) => {
      event.preventDefault();
      if (event.button == 0) {
        const piece = event.target.getAttribute('xlink:href');
        if (piece) {
          console.log(`left click on a ${piece}`);
          event.target.parentElement.style.background = "#ccc";
        }
      }
    });
  }
}
