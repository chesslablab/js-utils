import {
  COLOR,
  FEN,
  PIECE
} from 'https://cdn.jsdelivr.net/npm/@chesslablab/cmblab@0.0.1/src/index.min.js';

import AbstractComponent from '../src/AbstractComponent.js';

export class ChessboardEditor extends AbstractComponent {
  _fen() {
    const wCastling = this.props.form.querySelector('select[name="wCastling"]').value;
    const bCastling = this.props.form.querySelector('select[name="bCastling"]').value;

    let castling = wCastling || bCastling
      ? `${this.props.form.querySelector('select[name="wCastling"]').value}${this.props.form.querySelector('select[name="bCastling"]').value}`
      : '-';

    const enPassant = this.props.form.querySelector('input[name="enPassant"]').value;

    return this.props.chessboard.getPosition() + ' ' +
      this.props.form.querySelector('select[name="turn"]').value + ' ' +
      castling + ' ' +
      enPassant
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

    this.props.pieceButtons.children.item(0).addEventListener('click', (event) => {
      event.preventDefault();
      this.props.chessboard.setPiece(this.props.sq, '');
      this.props.form.querySelector('input[name="fen"]').value = this._fen();
      this.props.modal.hide();
    });

    this.props.form.querySelector('select[name="turn"]').addEventListener('change', (event) => {
      event.preventDefault();
      this.props.form.querySelector('input[name="fen"]').value = this._fen();
    });

    this.props.form.querySelector('select[name="wCastling"]').addEventListener('change', (event) => {
      event.preventDefault();
      this.props.form.querySelector('input[name="fen"]').value = this._fen();
    });

    this.props.form.querySelector('select[name="bCastling"]').addEventListener('change', (event) => {
      event.preventDefault();
      this.props.form.querySelector('input[name="fen"]').value = this._fen();
    });

    this.props.form.querySelector('input[name="enPassant"]').addEventListener('change', (event) => {
      event.preventDefault();
      this.props.form.querySelector('input[name="fen"]').value = this._fen();
    });

    this.props.editButtons.children.item(0).addEventListener('click', (event) => {
      event.preventDefault();
      this.props.chessboard.setOrientation(
        this.props.chessboard.getOrientation() === COLOR.white ? COLOR.black : COLOR.white
      );
    });

    this.props.editButtons.children.item(1).addEventListener('click', (event) => {
      event.preventDefault();
      this.props.chessboard.setPosition(FEN.start);
      this.props.form.querySelector('select[name="turn"]').value = COLOR.white;
      this.props.form.querySelector('select[name="wCastling"]').value = 'KQ';
      this.props.form.querySelector('select[name="bCastling"]').value = 'kq';
      this.props.form.querySelector('input[name="enPassant"]').value = '-';
      this.props.form.querySelector('input[name="fen"]').value = this._fen();
    });

    this.props.editButtons.children.item(2).addEventListener('click', (event) => {
      event.preventDefault();
      this.props.chessboard.setPosition(FEN.empty);
      this.props.form.querySelector('select[name="turn"]').value = COLOR.white;
      this.props.form.querySelector('select[name="wCastling"]').value = '';
      this.props.form.querySelector('select[name="bCastling"]').value = '';
      this.props.form.querySelector('input[name="enPassant"]').value = '-';
      this.props.form.querySelector('input[name="fen"]').value = this._fen();
    });

    this.props.form.querySelector('input[name="fen"]').value = this._fen();
  }
}
