import { Movetext } from '../src/common/Movetext.js';
import { Pgn } from '../src/common/Pgn.js';
import AbstractComponent from '../src/AbstractComponent.js';

export const ACTIVE_MOVE = 'table-active';

export class AbstractSanMoves extends AbstractComponent {
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

  _moves() {
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

  _activeMove(el) {
    Array.from(document.querySelectorAll(`.${ACTIVE_MOVE}`)).forEach(el => el.classList.remove(ACTIVE_MOVE));
    el.classList.add(ACTIVE_MOVE);
    this.props.chessboard.state.inputWhiteEnabled = false;
    this.props.chessboard.state.inputBlackEnabled = false;
    if (this.props.fen[this.current] === this.props.fen[this.props.fen.length - 1]) {
      this.props.fen[this.current].split(' ')[1] === Pgn.symbol.WHITE
        ? this.props.chessboard.state.inputWhiteEnabled = true
        : this.props.chessboard.state.inputBlackEnabled = true;
    }
  }
}
