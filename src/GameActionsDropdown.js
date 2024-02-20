import { COLOR } from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/Chessboard.js";

export class GameActionsDropdown {
  #el;
  #settings;

  constructor(el, settings) {
    this.#el = el;
    this.#settings = settings;

    this.render();
  }

  render() {
    this.#el.children.item(0).addEventListener('click', (event) => {
      event.preventDefault();
      this.#settings.chessboard.setOrientation(this.#settings.chessboard.getOrientation() === COLOR.white ? COLOR.black : COLOR.white);
    });

    this.#el.children.item(1).addEventListener('click', (event) => {
      event.preventDefault();
      // TODO
    });

    this.#el.children.item(2).addEventListener('click', (event) => {
      event.preventDefault();
      // TODO
    });
  }
}
