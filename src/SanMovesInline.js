import { AbstractSanMoves } from '../src/AbstractSanMoves.js';

export class SanMovesInline extends AbstractSanMoves {
  mount() {
    this.el.replaceChildren();

    this.moves().forEach(move => {
      const span = document.createElement('span');
      const wSpan = document.createElement('span');

      span.setAttribute('data-key', move.n);

      wSpan.appendChild(document.createTextNode(`${move.n}.${move.w}`));
      wSpan.addEventListener('click', () => {
        this.current = move.wFen;
        this.props.chessboard.setPosition(this.props.fen[this.current], true);
        this.activeMove(wSpan);
      });
      if (move.wFen === this.current) {
        this.activeMove(wSpan);
      }
      span.appendChild(wSpan);

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
        span.appendChild(bSpan);
      }

      this.el.appendChild(span);
    });
  }
}
