import { INPUT_EVENT_TYPE, Chessboard } from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/Chessboard.js";
import { Markers } from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/extensions/markers/Markers.js";
import { GameActionsDropdown, HistoryButtons, OpeningTable, SanMovesTable } from '../src/index.js';

let movetext = '1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Be7 5.Nf3 O-O 6.c5 b6 7.b4 bxc5 8.dxc5 a5 9.a3 d4 10.Bxf6 gxf6 11.Na4 e5 12.b5 Be6 13.g3 c6 14.bxc6 Nxc6 15.Bg2 Rb8 16.Qc1 d3 17.e3 e4 18.Nd2 f5 19.O-O Re8';

let fen = [
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
  "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3",
  "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d6",
  "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3",
  "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -",
  "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -",
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -",
  "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq -",
  "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq -",
  "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq -",
  "rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R w KQ -",
  "rnbq1rk1/ppp1bppp/4pn2/2Pp2B1/3P4/2N2N2/PP2PPPP/R2QKB1R b KQ -",
  "rnbq1rk1/p1p1bppp/1p2pn2/2Pp2B1/3P4/2N2N2/PP2PPPP/R2QKB1R w KQ -",
  "rnbq1rk1/p1p1bppp/1p2pn2/2Pp2B1/1P1P4/2N2N2/P3PPPP/R2QKB1R b KQ b3",
  "rnbq1rk1/p1p1bppp/4pn2/2pp2B1/1P1P4/2N2N2/P3PPPP/R2QKB1R w KQ -",
  "rnbq1rk1/p1p1bppp/4pn2/2Pp2B1/1P6/2N2N2/P3PPPP/R2QKB1R b KQ -",
  "rnbq1rk1/2p1bppp/4pn2/p1Pp2B1/1P6/2N2N2/P3PPPP/R2QKB1R w KQ a6",
  "rnbq1rk1/2p1bppp/4pn2/p1Pp2B1/1P6/P1N2N2/4PPPP/R2QKB1R b KQ -",
  "rnbq1rk1/2p1bppp/4pn2/p1P3B1/1P1p4/P1N2N2/4PPPP/R2QKB1R w KQ -",
  "rnbq1rk1/2p1bppp/4pB2/p1P5/1P1p4/P1N2N2/4PPPP/R2QKB1R b KQ -",
  "rnbq1rk1/2p1bp1p/4pp2/p1P5/1P1p4/P1N2N2/4PPPP/R2QKB1R w KQ -",
  "rnbq1rk1/2p1bp1p/4pp2/p1P5/NP1p4/P4N2/4PPPP/R2QKB1R b KQ -",
  "rnbq1rk1/2p1bp1p/5p2/p1P1p3/NP1p4/P4N2/4PPPP/R2QKB1R w KQ -",
  "rnbq1rk1/2p1bp1p/5p2/pPP1p3/N2p4/P4N2/4PPPP/R2QKB1R b KQ -",
  "rn1q1rk1/2p1bp1p/4bp2/pPP1p3/N2p4/P4N2/4PPPP/R2QKB1R w KQ -",
  "rn1q1rk1/2p1bp1p/4bp2/pPP1p3/N2p4/P4NP1/4PP1P/R2QKB1R b KQ -",
  "rn1q1rk1/4bp1p/2p1bp2/pPP1p3/N2p4/P4NP1/4PP1P/R2QKB1R w KQ -",
  "rn1q1rk1/4bp1p/2P1bp2/p1P1p3/N2p4/P4NP1/4PP1P/R2QKB1R b KQ -",
  "r2q1rk1/4bp1p/2n1bp2/p1P1p3/N2p4/P4NP1/4PP1P/R2QKB1R w KQ -",
  "r2q1rk1/4bp1p/2n1bp2/p1P1p3/N2p4/P4NP1/4PPBP/R2QK2R b KQ -",
  "1r1q1rk1/4bp1p/2n1bp2/p1P1p3/N2p4/P4NP1/4PPBP/R2QK2R w KQ -",
  "1r1q1rk1/4bp1p/2n1bp2/p1P1p3/N2p4/P4NP1/4PPBP/R1Q1K2R b KQ -",
  "1r1q1rk1/4bp1p/2n1bp2/p1P1p3/N7/P2p1NP1/4PPBP/R1Q1K2R w KQ -",
  "1r1q1rk1/4bp1p/2n1bp2/p1P1p3/N7/P2pPNP1/5PBP/R1Q1K2R b KQ -",
  "1r1q1rk1/4bp1p/2n1bp2/p1P5/N3p3/P2pPNP1/5PBP/R1Q1K2R w KQ -",
  "1r1q1rk1/4bp1p/2n1bp2/p1P5/N3p3/P2pP1P1/3N1PBP/R1Q1K2R b KQ -",
  "1r1q1rk1/4bp1p/2n1b3/p1P2p2/N3p3/P2pP1P1/3N1PBP/R1Q1K2R w KQ -",
  "1r1q1rk1/4bp1p/2n1b3/p1P2p2/N3p3/P2pP1P1/3N1PBP/R1Q2RK1 b - -",
  "1r1qr1k1/4bp1p/2n1b3/p1P2p2/N3p3/P2pP1P1/3N1PBP/R1Q2RK1 w - -",
  "1r1qr1k1/4bp1p/2n1b3/p1P2p2/N3p3/P2pPPP1/3N2BP/R1Q2RK1 b - -",
  "1r1qr1k1/4bp1p/4b3/p1P2p2/N2np3/P2pPPP1/3N2BP/R1Q2RK1 w - -"
];

const chessboard = new Chessboard(
  document.getElementById('chessboard'),
  {
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/assets/",
    position: fen[fen.length - 1],
    style: {pieces: {file: "pieces/staunty.svg"}},
    extensions: [{class: Markers}]
  }
);

const inputHandler = (event) => {
  switch (event.type) {
    case INPUT_EVENT_TYPE.moveInputStarted:
      return true;
    case INPUT_EVENT_TYPE.validateMoveInput:
      return true;
    case INPUT_EVENT_TYPE.moveInputCanceled:
      break;
    case INPUT_EVENT_TYPE.moveInputFinished:
      break;
    case INPUT_EVENT_TYPE.movingOverSquare:
      break;
  }
}

chessboard.enableMoveInput(inputHandler);

const sanMovesTable = new SanMovesTable(
  document.querySelector('#sanMovesTable tbody'),
  {
    chessboard: chessboard,
    movetext: movetext,
    fen: fen
  }
);

const historyButtons = new HistoryButtons(
  document.querySelector('#historyButtons'),
  {
    movesTable: sanMovesTable
  }
);

const openingTable = new OpeningTable(
  document.querySelector('#openingTable tbody'),
  {
    movetext: movetext
  }
);

const gameActionsDropdown = new GameActionsDropdown(
  document.querySelector('#gameActionsDropdown ul'),
  {
    movesTable: sanMovesTable
  }
);

sanMovesTable.mount();
