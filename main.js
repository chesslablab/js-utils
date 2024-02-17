import {COLOR, Chessboard, BORDER_TYPE} from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/Chessboard.js";
import {FEN} from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/model/Position.js";
import {SanMovesTable} from './src/SanMovesTable.js';

let chessboard = new Chessboard(
  document.getElementById('board'),
  {
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/assets/",
    position: FEN.start
  }
);

let sanMoves = new SanMovesTable(
  document.querySelector('#sanMoves tbody'),
  {
    chessboard: chessboard,
    movetext: '1.e4 e5 2.Nf3',
    fen: [
      'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -',
      'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3',
      'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6',
      'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -'
    ]
  }
);
