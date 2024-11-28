import { AbstractSanMoves } from '../src/AbstractSanMoves.js';

export class SanMovesTable extends AbstractSanMoves {
  mount() {
    this.el.replaceChildren();

    this.moves().forEach(move => {
      const div = document.createElement('div');
      const nSpan = document.createElement('span');
      const wSpan = document.createElement('span');

      nSpan.appendChild(document.createTextNode(move.n));
      div.appendChild(nSpan);

      wSpan.appendChild(document.createTextNode(move.w));
      wSpan.addEventListener('click', () => {
        this.current = move.wFen;
        this.props.chessboard.setPosition(this.props.fen[this.current], true);
        this.activeMove(wSpan);
      });
      if (move.wFen === this.current) {
        this.activeMove(wSpan);
      }
      div.appendChild(wSpan);

      if (move.b) {
        const bSpan = document.createElement('span');
        bSpan.appendChild(document.createTextNode(move.b));
        bSpan.addEventListener('click', () => {
          this.current = move.bFen;
          this.props.chessboard.setPosition(this.props.fen[this.current], true);
          this.activeMove(bSpan);
        });
        if (move.bFen === this.current) {
          this.activeMove(bSpan);
        }
        div.appendChild(bSpan);
      }

      this.el.appendChild(div);
    });

    this.el.parentNode.parentNode.scrollTop = this.el.parentNode.parentNode.scrollHeight;
  }
}
