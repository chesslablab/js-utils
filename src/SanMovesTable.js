import { AbstractSanMoves } from '../src/AbstractSanMoves.js';

export class SanMovesTable extends AbstractSanMoves {
  mount() {
    this._el.replaceChildren();

    this._moves().forEach(move => {
      const tr = document.createElement('div');
      const nTd = document.createElement('span');
      const nText = document.createTextNode(move.n);
      const wTd = document.createElement('span');
      const wText = document.createTextNode(move.w);

      nTd.appendChild(nText);
      tr.appendChild(nTd);

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

    this._el.parentNode.parentNode.scrollTop = this._el.parentNode.parentNode.scrollHeight;
  }
}
