import AbstractComponent from '../src/AbstractComponent.js';

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

  domElem() {
    this._el.replaceChildren();
    const tr = document.createElement('tr');
    const wTd = document.createElement('td');
    const wText = document.createTextNode(this._convert(this.props.timer.w));
    const bTd = document.createElement('td');
    const bText = document.createTextNode(this._convert(this.props.timer.b));
    wTd.classList.add('text-end');
    wTd.appendChild(wText);
    bTd.appendChild(bText);
    tr.appendChild(wTd);
    tr.appendChild(bTd);
    this._el.appendChild(tr);
  }
}
