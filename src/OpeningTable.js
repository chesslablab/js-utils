import { Opening } from '../src/common/Opening.js';

export class OpeningTable {
  #el;
  #settings;

  constructor(el, settings) {
    this.#el = el;
    this.#settings = settings;

    this.dom();
  }

  get settings() {
    return this.#settings;
  }

  set settings(settings) {
    this.#settings = settings;
  }

  dom() {
    const opening = Opening.byMovetext(this.settings.sanMovesTable.settings.movetext);
    this.#el.replaceChildren();
    if (opening) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      const tdText = document.createTextNode(`${opening[0].eco} ${opening[0].name}`);
      td.appendChild(tdText);
      tr.appendChild(td);
      this.#el.appendChild(tr);
    }
  }
}
