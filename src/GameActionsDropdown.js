import { COLOR } from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/Chessboard.js";
import AbstractComponent from '../src/AbstractComponent.js';

export class GameActionsDropdown extends AbstractComponent {
  mount() {
    this._el.children.item(0).addEventListener('click', (event) => {
      event.preventDefault();
      this._props.movesTable.props.chessboard.setOrientation(
        this._props.movesTable.props.chessboard.getOrientation() === COLOR.white ? COLOR.black : COLOR.white
      );
    });

    this._el.children.item(1).addEventListener('click', (event) => {
      event.preventDefault();
      navigator.clipboard.writeText(this._props.movesTable.props.movetext);
    });

    this._el.children.item(2).addEventListener('click', (event) => {
      event.preventDefault();
      navigator.clipboard.writeText(this._props.movesTable.props.fen[this._props.movesTable.current]);
    });
  }
}
