import { Movetext } from '../src/common/Movetext.js';
import { AbstractRavMoves } from '../src/AbstractRavMoves.js';

export class RavMovesTable extends AbstractRavMoves {
  mount() {
    this._el.replaceChildren();

    const description = Movetext.description(this.props.breakdown[0]);

    if (description) {
      const descrTr = document.createElement('div');
      const descrTd = document.createElement('span');
      const descrText = document.createTextNode(description);
      descrTd.colSpan = 3;
      descrTd.appendChild(descrText);
      descrTr.appendChild(descrTd);
      this._el.appendChild(descrTr);
    }

    const moves = this._moves();
    const colors = this._color(moves);

    moves.forEach((move, i) => {
      const tr = document.createElement('div');
      const nTd = document.createElement('span');
      const nText = document.createTextNode(move.n);
      const wTd = document.createElement('span');
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
        const bTd = document.createElement('span');
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
