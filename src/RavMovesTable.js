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

    // TODO

    return null;
  }

  domNode() {
    this._el.replaceChildren();

    // TODO
  }
}
