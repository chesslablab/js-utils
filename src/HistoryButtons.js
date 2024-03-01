import AbstractComponent from '../src/AbstractComponent.js';

export class HistoryButtons extends AbstractComponent {
  domNode() {
    this._el.children.item(0).addEventListener('click', () => {
      this.props.sanMovesTable.current = 0;
      this.props.sanMovesTable.props.chessboard.setPosition(
        this.props.sanMovesTable.props.fen[this.props.sanMovesTable.current], true
      );
      this.props.sanMovesTable.domNode();
    });

    this._el.children.item(1).addEventListener('click', () => {
      if (this.props.sanMovesTable.current > 0) {
        this.props.sanMovesTable.current = this.props.sanMovesTable.current - 1;
        this.props.sanMovesTable.props.chessboard.setPosition(
          this.props.sanMovesTable.props.fen[this.props.sanMovesTable.current], true
        );
        this.props.sanMovesTable.domNode();
      }
    });

    this._el.children.item(2).addEventListener('click', () => {
      if (this.props.sanMovesTable.current < this.props.sanMovesTable.props.fen.length - 1) {
        this.props.sanMovesTable.current = this.props.sanMovesTable.current + 1;
        this.props.sanMovesTable.props.chessboard.setPosition(
          this.props.sanMovesTable.props.fen[this.props.sanMovesTable.current], true
        );
        this.props.sanMovesTable.domNode();
      }
    });

    this._el.children.item(3).addEventListener('click', () => {
      this.props.sanMovesTable.current = this.props.sanMovesTable.props.fen.length - 1;
      this.props.sanMovesTable.props.chessboard.setPosition(
        this.props.sanMovesTable.props.fen[this.props.sanMovesTable.current], true
      );
      this.props.sanMovesTable.domNode();
    });
  }
}
