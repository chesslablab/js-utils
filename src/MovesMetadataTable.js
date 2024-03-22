import AbstractComponent from '../src/AbstractComponent.js';

export class MovesMetadataTable extends AbstractComponent {
  mount() {
    this._el.replaceChildren();

    const tr = document.createElement('tr');
    const leftTd = document.createElement('td');
    const centerTd = document.createElement('td');
    const rightTd = document.createElement('td');

    centerTd.classList.add('text-center');
    rightTd.classList.add('text-end');

    leftTd.appendChild(document.createTextNode(`${this.props.White}`));
    leftTd.appendChild(document.createElement('br'));
    leftTd.appendChild(document.createTextNode(`${this.props.WhiteElo}`));

    centerTd.appendChild(document.createTextNode(`${this.props.Result}`));
    centerTd.appendChild(document.createElement('br'));
    centerTd.appendChild(document.createTextNode(`${this.props.Event}`));
    centerTd.appendChild(document.createElement('br'));
    centerTd.appendChild(document.createTextNode(`${this.props.Site}, ${this.props.Date}, ${this.props.ECO}`));

    rightTd.appendChild(document.createTextNode(`${this.props.Black}`));
    rightTd.appendChild(document.createElement('br'));
    rightTd.appendChild(document.createTextNode(`${this.props.BlackElo}`));

    tr.appendChild(leftTd);
    tr.appendChild(centerTd);
    tr.appendChild(rightTd);

    this._el.appendChild(tr);
  }
}
