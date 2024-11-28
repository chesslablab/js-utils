import { COLOR } from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/Chessboard.js";
import { Movetext } from '../src/common/Movetext.js';
import BaseComponent from '../src/BaseComponent.js';

export class BoardActionsDropdown extends BaseComponent {
  mount() {
    this.el.children.item(0).addEventListener('click', (event) => {
      event.preventDefault();
      this.props.movesBrowser.props.chessboard.setOrientation(
        this.props.movesBrowser.props.chessboard.getOrientation() === COLOR.white ? COLOR.black : COLOR.white
      );
    });

    this.el.children.item(1).addEventListener('click', (event) => {
      event.preventDefault();
      const back = (this.props.movesBrowser.props.fen.length - this.props.movesBrowser.current - 1) * -1;
      navigator.clipboard.writeText(Movetext.substring(this.props.movesBrowser.props.movetext, back));
    });

    this.el.children.item(2).addEventListener('click', (event) => {
      event.preventDefault();
      navigator.clipboard.writeText(this.props.movesBrowser.props.fen[this.props.movesBrowser.current]);
    });
  }
}
