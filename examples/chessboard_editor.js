import Modal from 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/js/src/modal.js';

import {
  Chessboard,
  FEN
} from 'https://cdn.jsdelivr.net/npm/@chesslablab/chessboard@0.0.4/src/index.min.js';

import {
  ChessboardEditor
} from '../src/index.js';

const chessboard = new Chessboard(
  document.getElementById('chessboard'),
  {
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/assets/",
    position: FEN.start,
    style: {pieces: {file: "pieces/staunty.svg"}}
  }
);

const chessboardEditor = new ChessboardEditor({
  el: document.querySelector('#chessboardEditor'),
  props() {
    return({
      chessboard: chessboard,
      modal: new Modal(this.el.querySelector('.modal')),
      pieces: this.el.querySelector('.modal-body .pieces'),
      pieceButtons: this.el.querySelector('.modal-body .buttons'),
      sq: '',
      form: this.el.querySelector('form'),
      editButtons: this.el.querySelector('form .buttons')
    });
  }
});
