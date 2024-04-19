import { FORMAT_TABLE, RavMovesInline, RavMovesTable } from '../src/index.js';

export class RavMovesFactory {
  static create = (fmt, el, props) => {
    if (fmt === FORMAT_TABLE) {
      return new RavMovesTable(el, props);
    }

    return new RavMovesInline(el, props);
  }
}
