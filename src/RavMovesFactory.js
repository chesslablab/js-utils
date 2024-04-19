import { RavMovesInline, RavMovesTable } from '../src/index.js';
import * as format from '../src/index.js';

export class RavMovesFactory {
  static create = (fmt, el, props) => {
    if (fmt === format.TABLE) {
      return new RavMovesTable(el, props);
    }

    return new RavMovesInline(el, props);
  }
}
