import {
  PIECE
} from 'https://cdn.jsdelivr.net/npm/@chesslablab/cmblab@0.0.1/src/index.min.js';

import AbstractComponent from '../src/AbstractComponent.js';

export class ChessboardEditor extends AbstractComponent {
  _fen() {
    return `${this.props.chessboard.getPosition()} ${this.props.form.querySelector('select[name="turn"]').value}`;
  }

  mount() {
    this.props.chessboard.context.addEventListener('mousedown', (event) => {
      event.preventDefault();
      if (event.button == 0) {
        this.props.sq = event.target.getAttribute('data-square');
        this.props.modal.show();
      }
    });

    this.props.pieces.addEventListener('mousedown', (event) => {
      event.preventDefault();
      if (event.button == 0) {
        const piece = event.target.getAttribute('xlink:href');
        if (piece) {
          this.props.chessboard.setPiece(this.props.sq, PIECE[piece.substring(1)]);
          this.props.form.querySelector('input[name="fen"]').value = this._fen();
          this.props.modal.hide();
        }
      }
    });

    this.props.buttons.children.item(0).addEventListener('click', (event) => {
      event.preventDefault();
      this.props.chessboard.setPiece(this.props.sq, '');
      this.props.form.querySelector('input[name="fen"]').value = this._fen();
      this.props.modal.hide();
    });

    this.props.form.querySelector('select[name="turn"]').addEventListener('change', (event) => {
      event.preventDefault();
      this.props.form.querySelector('input[name="fen"]').value = this._fen();
    });

    this.props.form.querySelector('input[name="fen"]').value = this._fen();
  }
}
