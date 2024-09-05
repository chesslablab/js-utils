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

    if (this.props.username.w && this.props.username.b) {
      const usernameTr = document.createElement('tr');
      const wUsernameTd = document.createElement('td');
      const bUsernameTd = document.createElement('td');
      usernameTr.classList.add('h6');
      wUsernameTd.classList.add('text-end');
      wUsernameTd.appendChild(document.createTextNode(this.props.username.w));
      bUsernameTd.appendChild(document.createTextNode(this.props.username.b));
      usernameTr.appendChild(wUsernameTd);
      usernameTr.appendChild(bUsernameTd);
      this._el.appendChild(usernameTr);
    }

    const secondsTr = document.createElement('tr');
    const wSecondsTd = document.createElement('td');
    const bSecondsTd = document.createElement('td');
    wSecondsTd.classList.add('text-end');
    wSecondsTd.appendChild(document.createTextNode(this._convert(this.props.seconds.w)));
    bSecondsTd.appendChild(document.createTextNode(this._convert(this.props.seconds.b)));
    secondsTr.appendChild(wSecondsTd);
    secondsTr.appendChild(bSecondsTd);
    this._el.appendChild(secondsTr);
  }
}
