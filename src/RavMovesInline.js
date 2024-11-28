import { AbstractRavMoves } from '../src/AbstractRavMoves.js';

export class RavMovesInline extends AbstractRavMoves {
  mount() {
    this.el.replaceChildren();

    this.description();

    const moves = this.moves();
    const colors = this.color(moves);

    moves.forEach((move, i) => {
      const span = document.createElement('span');
      span.setAttribute('data-key', move.n);

      if (move.w !== '...') {
        const wSpan = document.createElement('span');
        wSpan.style.backgroundColor = colors[i].background;
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
      }

      if (move.b) {
        const bSpan = document.createElement('span');
        bSpan.style.backgroundColor = colors[i].background;
        bSpan.appendChild(document.createTextNode(move.w === '...' ? `${move.n}...${move.b}` : move.b));
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
