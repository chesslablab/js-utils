import {
  FORMAT_INLINE,
  FORMAT_TABLE,
  RavMovesInline,
  RavMovesTable
} from '../src/index.js';

export class RavMovesFactory {
  static create = (fmt, el, props) => {
    if (fmt === FORMAT_TABLE) {
      el.classList.add(FORMAT_TABLE);
      return new RavMovesTable(el, props);
    }
    el.classList.add(FORMAT_INLINE);

    return new RavMovesInline(el, props);
  }
}
