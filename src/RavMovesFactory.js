import {
  FORMAT_INLINE,
  FORMAT_TABLE,
  RavMovesInline,
  RavMovesTable
} from '../src/index.js';

export class RavMovesFactory {
  static create = (fmt, params) => {
    if (fmt === FORMAT_TABLE) {
      params.el.classList.add(fmt);
      return new RavMovesTable(params);
    }
    params.el.classList.add(FORMAT_INLINE);

    return new RavMovesInline(params);
  }
}
