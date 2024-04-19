import { SanMovesInline, SanMovesTable } from '../src/index.js';
import * as format from '../src/index.js';

export class SanMovesFactory {
  static create = (fmt, el, props) => {
    if (fmt === format.TABLE) {
      return new SanMovesTable(el, props);
    }

    return new SanMovesInline(el, props);
  }
}
