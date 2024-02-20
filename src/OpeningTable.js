import { Opening } from '../src/common/Opening.js';

export class OpeningTable {
  #el;
  #settings;

  constructor(el, settings) {
    this.#el = el;
    this.#settings = settings;

    this.render();
  }

  get settings() {
    return this.#settings;
  }

  set settings(settings) {
    this.#settings = settings;
  }

  render() {
    const opening = Opening.byMovetext(this.settings.sanMovesTable.settings.movetext);
    this.#el.replaceChildren();
    if (opening) {
      const tr = document.createElement('tr');
      const ecoTd = document.createElement('td');
      const ecoText = document.createTextNode(opening[0].eco);
      const nameTd = document.createElement('td');
      const nameText = document.createTextNode(opening[0].name);
      ecoTd.appendChild(ecoText);
      nameTd.appendChild(nameText);
      tr.appendChild(ecoTd);
      tr.appendChild(nameTd);
      this.#el.appendChild(tr);
    }
  }
}
