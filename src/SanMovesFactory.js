import {
  FORMAT_TABLE,
  SanMovesInline,
  SanMovesTable
} from '../src/index.js';

export class SanMovesFactory {
  static create = (fmt, params) => {
    params.el.classList.add(fmt);
    if (fmt === FORMAT_TABLE) {
      return new SanMovesTable(params);
    }

    return new SanMovesInline(params);
  }
}
