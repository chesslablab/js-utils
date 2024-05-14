import {
  Chessboard,
  FEN,
  PIECE
} from "https://cdn.jsdelivr.net/npm/@chesslablab/cmblab@0.0.1/src/index.min.js";

import {
  ChessboardEditor
} from '../src/index.js';

const chessboard = new Chessboard(
  document.getElementById('chessboard'),
  {
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/assets/",
    position: FEN.empty,
    style: {pieces: {file: "pieces/staunty.svg"}}
  }
);

const chessboardEditor = new ChessboardEditor(
  document.querySelector('#chessboardEditor'),
  {
    chessboard: chessboard
  }
);

chessboardEditor.props.chessboard.setPiece('e5', PIECE.wn);

chessboardEditor.props.chessboard.context.addEventListener('mousedown', (event) => {
  event.preventDefault();
  if (event.button == 0) {
    console.log("left click");
  }
});
