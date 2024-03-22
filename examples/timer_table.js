import { FEN, Chessboard } from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/Chessboard.js";
import { Markers } from "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/src/extensions/markers/Markers.js";
import { TimerTable } from '../src/index.js';

const chessboard = new Chessboard(
  document.getElementById('chessboard'),
  {
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/assets/",
    position: FEN.start,
    style: {pieces: {file: "pieces/staunty.svg"}},
    extensions: [{class: Markers}]
  }
);

const timerTable = new TimerTable(
  document.querySelector('#timerTable tbody'),
  {
    turn: 'w',
    w: 300,
    b: 300
  }
);

setInterval(() => {
  timerTable.count().mount();
}, 1000);