import { Movetext } from '../src/common/Movetext.js';
import AbstractComponent from '../src/AbstractComponent.js';

export const ACTIVE_MOVE = 'table-active';

export class RavMovesTable extends AbstractComponent {
  _current;

  constructor(el, props) {
    super(el, props);

    this._current = props.fen.length;
  }

  level(rows) {
    let haystack = Movetext.haystack(stateRavMovesTable?.filtered);
    let needles = Movetext.needles(rows, stateRavMovesTable?.breakdown);
    for (let i = needles.length - 1; i >= 0; i--) {
      const position = haystack.lastIndexOf(needles[i]);
      rows[i].level = Movetext.openParentheses(haystack.substring(0, position));
      haystack = haystack.substring(0, position).slice(0, -1).trim();
    }

    return rows;
  }

  color(rows) {
    return level(rows).map(row => {
      return {
        background: Movetext.rgb(255 - (row.level * 10), 255 - (row.level * 10), 255 - (row.level * 10))
      }
    });
  }

  description() {
    const comment = Movetext.description(stateRavMovesTable?.breakdown[0]);
    if (comment) {
      return (
        <tr style={styles.tr}>
          <td style={styles.td} colSpan='3'>{comment}</td>
        </tr>
      );
    }

    return null;
  }

  moves() {
    let j = 1;
    let rows = [];
    stateRavMovesTable?.breakdown.forEach((breakdown, i) => {
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

    const colors = color(rows);

    return rows.map((row, i) => {
      let wTdStyle = {...styles.td, ...colors[i]};
      let bTdStyle = {...styles.td, ...colors[i]};

      if (row.wFen === hoveredRow) {
        row.w !== '...' ? wTdStyle = {...wTdStyle, ...styles.td.hover} : wTdStyle.cursor = 'default';
      } else if (isActiveMove(row.wFen)) {
        wTdStyle = {...wTdStyle, ...styles.td.active};
      }

      if (row.bFen === hoveredRow) {
        row.b ? bTdStyle = {...bTdStyle, ...styles.td.hover} : bTdStyle.cursor = 'default';
      } else if (isActiveMove(row.bFen)) {
        bTdStyle = {...bTdStyle, ...styles.td.active};
      }

      domNode() {
        this._el.replaceChildren();

      }
    });
  }
}
