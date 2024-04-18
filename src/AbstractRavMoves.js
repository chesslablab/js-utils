import { Movetext } from '../src/common/Movetext.js';
import AbstractMoves from '../src/AbstractMoves.js';

export class AbstractRavMoves extends AbstractMoves {
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
    Array.from(document.querySelectorAll(`.${this._className}`)).forEach(el => el.classList.remove(this._className));
    el.classList.add(this._className);
  }
}
