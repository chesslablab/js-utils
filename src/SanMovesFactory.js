import {
  FORMAT_INLINE,
  FORMAT_TABLE,
  SanMovesInline,
  SanMovesTable
} from '../src/index.js';

export class SanMovesFactory {
  static create = (fmt, params) => {
    if (fmt === FORMAT_TABLE) {
      params.el.classList.add(fmt);
      return new SanMovesTable(params);
    }
    params.el.classList.add(FORMAT_INLINE);

    return new SanMovesInline(params);
  }
}
