import { Movetext } from '../src/common/Movetext.js';
import { Pgn } from '../src/common/Pgn.js';
import AbstractMoves from '../src/AbstractMoves.js';

export class AbstractSanMoves extends AbstractMoves {
  moves() {
    let j = 1;

    let rows = Movetext.toRows(
      this.props.movetext?.replace(/\s?\{[^}]+\}/g, '')
        .replace(/\s?\$[1-9][0-9]*/g, '')
        .trim()
    );

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

  activeMove(el) {
    Array.from(document.querySelectorAll(`.${this.className}`)).forEach(el => el.classList.remove(this.className));
    el.classList.add(this.className);
    this.props.chessboard.state.inputWhiteEnabled = false;
    this.props.chessboard.state.inputBlackEnabled = false;
    if (this.props.fen[this.current] === this.props.fen[this.props.fen.length - 1]) {
      this.props.fen[this.current].split(' ')[1] === Pgn.symbol.WHITE
        ? this.props.chessboard.state.inputWhiteEnabled = true
        : this.props.chessboard.state.inputBlackEnabled = true;
    }
  }
}
