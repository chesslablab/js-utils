import AbstractComponent from '../src/AbstractComponent.js';

export class HistoryButtons extends AbstractComponent {
  domNode() {
    this._el.children.item(0).addEventListener('click', () => {
      this.props.movesTable.current = 0;
      this.props.movesTable.props.chessboard.setPosition(
        this.props.movesTable.props.fen[this.props.movesTable.current], true
      );
      this.props.movesTable.domNode();
    });

    this._el.children.item(1).addEventListener('click', () => {
      if (this.props.movesTable.current > 0) {
        this.props.movesTable.current = this.props.movesTable.current - 1;
        this.props.movesTable.props.chessboard.setPosition(
          this.props.movesTable.props.fen[this.props.movesTable.current], true
        );
        this.props.movesTable.domNode();
      }
    });

    this._el.children.item(2).addEventListener('click', () => {
      if (this.props.movesTable.current < this.props.movesTable.props.fen.length - 1) {
        this.props.movesTable.current = this.props.movesTable.current + 1;
        this.props.movesTable.props.chessboard.setPosition(
          this.props.movesTable.props.fen[this.props.movesTable.current], true
        );
        this.props.movesTable.domNode();
      }
    });

    this._el.children.item(3).addEventListener('click', () => {
      this.props.movesTable.current = this.props.movesTable.props.fen.length - 1;
      this.props.movesTable.props.chessboard.setPosition(
        this.props.movesTable.props.fen[this.props.movesTable.current], true
      );
      this.props.movesTable.domNode();
    });
  }
}
