import AbstractComponent from '../src/AbstractComponent.js';
import { Pgn } from '../src/index.js';

export class TimerTable extends AbstractComponent {
  _convert(count) {
    const h = Math.floor(count / (60 * 60)).toString().padStart(2, '0');
    const m = Math.floor(count / 60 % 60).toString().padStart(2, '0');
    const s = Math.floor(count % 60).toString().padStart(2, '0');
    if (h > 0) {
      return `${h}:${m}:${s}`;
    }

    return `${m}:${s}`;
  }

  count() {
    if (this.props.turn === Pgn.symbol.WHITE) {
      if (this.props.seconds.w > 0) {
        this.props.seconds.w -= 1;
      }
    } else {
      if (this.props.seconds.b > 0) {
        this.props.seconds.b -= 1;
      }
    }

    return this;
  }

  mount() {
    this._el.replaceChildren();

    let tr;
    let wTd;
    let bTd;

    if (this.props.username.w && this.props.username.b) {
      tr = document.createElement('tr');
      wTd = document.createElement('td');
      wTd.classList.add('text-end', 'w-50');
      bTd = document.createElement('td');
      bTd.classList.add('w-50');
      wTd.appendChild(document.createTextNode(this.props.username.w));
      bTd.appendChild(document.createTextNode(this.props.username.b));
      tr.appendChild(wTd);
      tr.appendChild(bTd);
      this._el.appendChild(tr);
    }

    tr = document.createElement('tr');
    tr.classList.add('h4');
    wTd = document.createElement('td');
    wTd.classList.add('text-end', 'w-50');
    bTd = document.createElement('td');
    bTd.classList.add('w-50');
    wTd.appendChild(document.createTextNode(this._convert(this.props.seconds.w)));
    bTd.appendChild(document.createTextNode(this._convert(this.props.seconds.b)));
    tr.appendChild(wTd);
    tr.appendChild(bTd);
    this._el.appendChild(tr);
  }
}
