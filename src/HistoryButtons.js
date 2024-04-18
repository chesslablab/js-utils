import AbstractComponent from '../src/AbstractComponent.js';

export class HistoryButtons extends AbstractComponent {
  mount() {
    this._el.children.item(0).addEventListener('click', () => {
      this.props.moves.current = 0;
      this.props.moves.props.chessboard.setPosition(
        this.props.moves.props.fen[this.props.moves.current], true
      );
      this.props.moves.mount();
    });

    this._el.children.item(1).addEventListener('click', () => {
      if (this.props.moves.current > 0) {
        this.props.moves.current = this.props.moves.current - 1;
        this.props.moves.props.chessboard.setPosition(
          this.props.moves.props.fen[this.props.moves.current], true
        );
        this.props.moves.mount();
      }
    });

    this._el.children.item(2).addEventListener('click', () => {
      if (this.props.moves.current < this.props.moves.props.fen.length - 1) {
        this.props.moves.current = this.props.moves.current + 1;
        this.props.moves.props.chessboard.setPosition(
          this.props.moves.props.fen[this.props.moves.current], true
        );
        this.props.moves.mount();
      }
    });

    this._el.children.item(3).addEventListener('click', () => {
      this.props.moves.current = this.props.moves.props.fen.length - 1;
      this.props.moves.props.chessboard.setPosition(
        this.props.moves.props.fen[this.props.moves.current], true
      );
      this.props.moves.mount();
    });
  }
}
