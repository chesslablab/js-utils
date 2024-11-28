import { AbstractRavMoves } from '../src/AbstractRavMoves.js';

export class RavMovesTable extends AbstractRavMoves {
  mount() {
    this.el.replaceChildren();

    this.description();

    const moves = this.moves();
    const colors = this.color(moves);

    moves.forEach((move, i) => {
      const div = document.createElement('div');
      const nSpan = document.createElement('span');
      const wSpan = document.createElement('span');

      nSpan.style.backgroundColor = colors[i].background;
      nSpan.appendChild(document.createTextNode(move.n));
      div.appendChild(nSpan);

      wSpan.style.backgroundColor = colors[i].background;
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
        bSpan.style.backgroundColor = colors[i].background;
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
  }
}
