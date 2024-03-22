import AbstractComponent from '../src/AbstractComponent.js';

export class MovesMetadataTable extends AbstractComponent {
  _leftTd() {
    const leftTd = document.createElement('td');

    if (this.props?.White) {
      leftTd.appendChild(document.createTextNode(`${this.props.White}`));
      leftTd.appendChild(document.createElement('br'));
    }

    if (this.props?.WhiteElo) {
      leftTd.appendChild(document.createTextNode(`${this.props.WhiteElo}`));
    }

    return leftTd;
  }

  _centerTd() {
    const centerTd = document.createElement('td');

    let data = '';

    if (this.props?.Result) {
      centerTd.appendChild(document.createTextNode(`${this.props.Result}`));
      centerTd.appendChild(document.createElement('br'));
    }

    if (this.props?.Event) {
      data += `${this.props.Event}, `;
    }

    if (this.props?.Round) {
      data += `Rd ${this.props.Round}, `;
    }

    if (this.props?.Site) {
      data += `${this.props.Site}, `;
    }

    if (this.props?.Date) {
      data += `${this.props.Date}, `;
    }

    if (this.props?.ECO) {
      data += `${this.props.ECO}, `;
    }

    centerTd.appendChild(document.createTextNode(data.slice(0, -2)));
    centerTd.classList.add('text-center');

    return centerTd;
  }

  _rightTd() {
    const rightTd = document.createElement('td');

    if (this.props?.Black) {
      rightTd.appendChild(document.createTextNode(`${this.props.Black}`));
      rightTd.appendChild(document.createElement('br'));
    }

    if (this.props?.BlackElo) {
      rightTd.appendChild(document.createTextNode(`${this.props.BlackElo}`));
    }

    rightTd.classList.add('text-end');

    return rightTd;
  }

  mount() {
    this._el.replaceChildren();

    const tr = document.createElement('tr');
    tr.appendChild(this._leftTd());
    tr.appendChild(this._centerTd());
    tr.appendChild(this._rightTd());

    this._el.appendChild(tr);
  }
}
