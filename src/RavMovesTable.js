import { Movetext } from '../src/common/Movetext.js';
import AbstractComponent from '../src/AbstractComponent.js';

export const ACTIVE_MOVE = 'active-move';

export class RavMovesTable extends AbstractComponent {
  _current;

  constructor(el, props) {
    super(el, props);

    this._current = props.fen.length;
  }

  get current() {
    return this._current;
  }

  set current(current) {
    this._current = current;
  }

  _level(rows) {
    let haystack = Movetext.haystack(this.props.filtered);
    let needles = Movetext.needles(rows, this.props.breakdown);
    for (let i = needles.length - 1; i >= 0; i--) {
      const position = haystack.lastIndexOf(needles[i]);
      rows[i].level = Movetext.openParentheses(haystack.substring(0, position));
      haystack = haystack.substring(0, position).slice(0, -1).trim();
    }

    return rows;
  }

  _color(rows) {
    return this._level(rows).map(row => {
      return {
        background: Movetext.rgb(255 - (row.level * 10), 255 - (row.level * 10), 255 - (row.level * 10))
      }
    });
  }

  _moves() {
    let j = 1;
    let rows = [];
    this.props.breakdown.forEach((breakdown, i) => {
      rows = [...rows, ...Movetext.toCommentedRows(breakdown, i)];
    });
    rows.forEach((row, i) => {
      if (row.w !== '...') {
        row.wFen = j;
        j += 1;
      }
      if (row.b) {
        row.bFen = j;
        j += 1;
      }
    });

    return rows;
  }

  _activeMove(el) {
    Array.from(document.querySelectorAll(`.${ACTIVE_MOVE}`)).forEach(el => el.classList.remove(ACTIVE_MOVE));
    el.classList.add(ACTIVE_MOVE);
  }

  mount() {
    this._el.replaceChildren();

    const description = Movetext.description(this.props.breakdown[0]);

    if (description) {
      const descrTr = document.createElement('tr');
      const descrTd = document.createElement('td');
      const descrText = document.createTextNode(description);
      descrTd.colSpan = 3;
      descrTd.appendChild(descrText);
      descrTr.appendChild(descrTd);
      this._el.appendChild(descrTr);
    }

    const moves = this._moves();
    const colors = this._color(moves);

    moves.forEach((move, i) => {
      const tr = document.createElement('tr');
      const nTd = document.createElement('td');
      const nText = document.createTextNode(move.n);
      const wTd = document.createElement('td');
      const wText = document.createTextNode(move.w);

      nTd.style.backgroundColor = colors[i].background;
      nTd.appendChild(nText);
      tr.appendChild(nTd);

      wTd.style.backgroundColor = colors[i].background;
      wTd.appendChild(wText);
      wTd.addEventListener('click', () => {
        this.current = move.wFen;
        this.props.chessboard.setPosition(this.props.fen[this.current], true);
        this._activeMove(wTd);
      });
      if (move.wFen === this.current) {
        this._activeMove(wTd);
      }
      tr.appendChild(wTd);

      if (move.b) {
        const bTd = document.createElement('td');
        const bText = document.createTextNode(move.b);
        bTd.style.backgroundColor = colors[i].background;
        bTd.appendChild(bText);
        bTd.addEventListener('click', () => {
          this.current = move.bFen;
          this.props.chessboard.setPosition(this.props.fen[this.current], true);
          this._activeMove(bTd);
        });
        if (move.bFen === this.current) {
          this._activeMove(bTd);
        }
        tr.appendChild(bTd);
      }

      this._el.appendChild(tr);
    });
  }
}
