import BaseComponent from '../src/BaseComponent.js';

export default class AbstractMoves extends BaseComponent {
  className = 'active-move';
  current;

  constructor(params) {
    super(params);

    this.current = this.props.fen.length;
  }
}
