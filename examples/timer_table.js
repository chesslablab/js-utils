import {
  FEN,
  Chessboard,
  Markers
} from "https://cdn.jsdelivr.net/npm/@chesslablab/chessboard@0.0.4/src/index.min.js";

import {
  TimerTable
} from '../src/index.js';

const chessboard = new Chessboard(
  document.getElementById('chessboard'),
  {
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/assets/",
    position: FEN.start,
    style: {pieces: {file: "pieces/staunty.svg"}},
    extensions: [{class: Markers}]
  }
);

const timerTable = new TimerTable({
  el: document.querySelector('#timerTable tbody'),
  props() {
    return({
      turn: 'w',
      seconds: {
        w: 300,
        b: 300
      },
      username: {
        w: 'Alice',
        b: 'Bob'
      }
    });
  }
});

setInterval(() => {
  timerTable.count().mount();
}, 1000);
