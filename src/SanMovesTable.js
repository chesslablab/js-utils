import { Movetext } from '../src/common/Movetext.js';

export const ACTIVE_MOVE_CLASS_NAME = 'active-move';

export class SanMovesTable {
  constructor(el, settings) {
    this.el = el;
    this.settings = settings;
    this.current = settings.fen.length;

    this.render();
  }

  getSettings() {
    return this.settings;
  }

  setSettings(settings) {
    this.settings = settings;

    return this;
  }

  getCurrent() {
    return this.current;
  }

  setCurrent(current) {
    this.current = current;

    return this;
  }

  moves() {
    let j = 1;

    let rows = Movetext.toRows(
      this.settings.movetext?.replace(/\s?\{[^}]+\}/g, '')
        .replace(/\s?\$[1-9][0-9]*/g, '')
        .trim()
    );

    rows.forEach((row, i) => {
      if (row.w !== '...') {
        row.wFen = j;
        j += 1;
      }
      if (row.b) {
        row.bFen = j;
        j += 1;
      }
    });

    return rows;
  }

  render() {
    this.el.replaceChildren();

    this.moves().forEach(move => {
      const tr = document.createElement('tr');
      const nTd = document.createElement('td');
      const nText = document.createTextNode(move.n);
      const wTd = document.createElement('td');
      const wText = document.createTextNode(move.w);

      nTd.appendChild(nText);
      tr.appendChild(nTd);

      wTd.appendChild(wText);
      wTd.addEventListener('click', () => {
        Array.from(document.querySelectorAll(`.${ACTIVE_MOVE_CLASS_NAME}`)).forEach(
          (el) => el.classList.remove(ACTIVE_MOVE_CLASS_NAME)
        );
        wTd.classList.add(ACTIVE_MOVE_CLASS_NAME);
        this.current = move.wFen;
        this.settings.chessboard.setPosition(this.settings.fen[this.current], true);
        this.settings.chessboard.disableMoveInput();
        if (this.settings.fen[this.current] === this.settings.fen[this.settings.fen.length - 1]) {
          this.settings.chessboard.enableMoveInput(this.settings.inputHandler);
        }
      });
      if (move.wFen === this.current) {
        wTd.classList.add(ACTIVE_MOVE_CLASS_NAME);
      }
      tr.appendChild(wTd);

      if (move.b) {
        const bTd = document.createElement('td');
        const bText = document.createTextNode(move.b);
        bTd.appendChild(bText);
        bTd.addEventListener('click', () => {
          Array.from(document.querySelectorAll(`.${ACTIVE_MOVE_CLASS_NAME}`)).forEach(
            (el) => el.classList.remove(ACTIVE_MOVE_CLASS_NAME)
          );
          bTd.classList.add(ACTIVE_MOVE_CLASS_NAME);
          this.current = move.bFen;
          this.settings.chessboard.setPosition(this.settings.fen[this.current], true);
          this.settings.chessboard.disableMoveInput();
          if (this.settings.fen[this.current] === this.settings.fen[this.settings.fen.length - 1]) {
            this.settings.chessboard.enableMoveInput(this.settings.inputHandler);
          }
        });
        if (move.bFen === this.current) {
          bTd.classList.add(ACTIVE_MOVE_CLASS_NAME);
        }
        tr.appendChild(bTd);
      }

      this.el.appendChild(tr);
    });
  }
}
