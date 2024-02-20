import AbstractComponent from '../src/AbstractComponent.js';

export class HistoryButtons extends AbstractComponent {
  dom() {
    this._el.children.item(0).addEventListener('click', () => {
      this.settings.sanMovesTable.current = 0;
      this.settings.sanMovesTable.settings.chessboard.setPosition(
        this.settings.sanMovesTable.settings.fen[this.settings.sanMovesTable.current], true
      );
      this.settings.sanMovesTable.dom();
    });

    this._el.children.item(1).addEventListener('click', () => {
      if (this.settings.sanMovesTable.current > 0) {
        this.settings.sanMovesTable.current = this.settings.sanMovesTable.current - 1;
        this.settings.sanMovesTable.settings.chessboard.setPosition(
          this.settings.sanMovesTable.settings.fen[this.settings.sanMovesTable.current], true
        );
        this.settings.sanMovesTable.dom();
      }
    });

    this._el.children.item(2).addEventListener('click', () => {
      if (this.settings.sanMovesTable.current < this.settings.sanMovesTable.settings.fen.length - 1) {
        this.settings.sanMovesTable.current = this.settings.sanMovesTable.current + 1;
        this.settings.sanMovesTable.settings.chessboard.setPosition(
          this.settings.sanMovesTable.settings.fen[this.settings.sanMovesTable.current], true
        );
        this.settings.sanMovesTable.dom();
      }
    });

    this._el.children.item(3).addEventListener('click', () => {
      this.settings.sanMovesTable.current = this.settings.sanMovesTable.settings.fen.length - 1;
      this.settings.sanMovesTable.settings.chessboard.setPosition(
        this.settings.sanMovesTable.settings.fen[this.settings.sanMovesTable.current], true
      );
      this.settings.sanMovesTable.dom();
    });
  }
}
