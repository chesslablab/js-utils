import { FORMAT_TABLE, SanMovesInline, SanMovesTable } from '../src/index.js';

export class SanMovesFactory {
  static create = (fmt, el, props) => {
    if (fmt === FORMAT_TABLE) {
      return new SanMovesTable(el, props);
    }

    return new SanMovesInline(el, props);
  }
}
