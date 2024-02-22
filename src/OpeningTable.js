import { Opening } from '../src/common/Opening.js';
import AbstractComponent from '../src/AbstractComponent.js';

export class OpeningTable extends AbstractComponent {
  domNode() {
    const opening = Opening.byMovetext(this.settings.sanMovesTable.settings.movetext);
    this._el.replaceChildren();
    if (opening) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      const tdText = document.createTextNode(`${opening[0].eco} ${opening[0].name}`);
      td.appendChild(tdText);
      tr.appendChild(td);
      this._el.appendChild(tr);
    }
  }
}
