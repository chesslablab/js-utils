import {
  FORMAT_TABLE,
  RavMovesInline,
  RavMovesTable
} from '../src/index.js';

export class RavMovesFactory {
  static create = (fmt, params) => {
    params.el.classList.add(fmt);
    if (fmt === FORMAT_TABLE) {
      return new RavMovesTable(params);
    }

    return new RavMovesInline(params);
  }
}
