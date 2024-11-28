import { Opening } from '../src/common/Opening.js';
import BaseComponent from '../src/BaseComponent.js';

export class OpeningTable extends BaseComponent {
  mount() {
    this.el.replaceChildren();
    const opening = Opening.byLongestMovetext(this.props.movetext);
    if (opening) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.appendChild(document.createTextNode(`${opening[0].eco} ${opening[0].name}`));
      tr.appendChild(td);
      this.el.appendChild(tr);
    }
  }
}
