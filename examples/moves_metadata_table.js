import {
  Chessboard
} from "https://cdn.jsdelivr.net/npm/@chesslablab/chessboard@0.0.4/src/index.min.js";

import {
  FORMAT_TABLE,
  MovesMetadataTable,
  HistoryButtons,
  OpeningTable,
  SanMovesFactory
} from '../src/index.js';

// -----------------------------------------------------------------------------
// Initialization
// -----------------------------------------------------------------------------

let movetext = '1.e4 e5 2.Nf3';

let fen = [
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -',
  'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3',
  'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6',
  'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -'
];

const chessboard = new Chessboard(
  document.getElementById('chessboard'),
  {
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/assets/",
    position: fen[fen.length - 1],
    style: {pieces: {file: "pieces/staunty.svg"}}
  }
);

const sanMovesBrowser = SanMovesFactory.create(FORMAT_TABLE, {
  el: document.querySelector('#movesBrowser'),
  props() {
    return({
      chessboard: chessboard,
      movetext: movetext,
      fen: fen
    });
  }
});

const historyButtons = new HistoryButtons({
  el: document.querySelector('#historyButtons'),
  props() {
    return({
      movesBrowser: sanMovesBrowser
    });
  }
});

const openingTable = new OpeningTable({
  el: document.querySelector('#openingTable tbody'),
  props() {
    return({
      movetext: movetext
    });
  }
});

const movesMetadataTable = new MovesMetadataTable({
  el: document.querySelector('#movesMetadataTable tbody'),
  props() {
    return({
      Event: 'Amber Rapid',
      Site: 'Monte Carlo MNC',
      Date: '2005.03.20',
      White: 'Anand,V',
      WhiteElo: '2786',
      Result: '1-0',
      Black: 'Topalov,V',
      BlackElo: '2757',
      ECO: 'C67'
    });
  }
});

movesMetadataTable.mount();
sanMovesBrowser.mount();
