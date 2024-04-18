import AbstractComponent from '../src/AbstractComponent.js';

export default class AbstractMoves extends AbstractComponent {
  _className = 'active-move';

  _current;

  constructor(el, props) {
    super(el, props);

    this._current = props.fen.length;
  }

  get current() {
    return this._current;
  }

  set current(current) {
    this._current = current;
  }
}
