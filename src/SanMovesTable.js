import { Movetext } from '../src/common/Movetext.js';

export const ACTIVE_MOVE = 'active-move';

export class SanMovesTable {
  #el;
  #settings;
  #current;

  constructor(el, settings) {
    this.#el = el;
    this.#settings = settings;
    this.#current = settings.fen.length;

    this.render();
  }

  get settings() {
    return this.#settings;
  }

  set settings(settings) {
    this.#settings = settings;
  }

  get current() {
    return this.#current;
  }

  set current(current) {
    this.#current = current;
  }

  #moves() {
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

  #toggleMoveInput(el) {
    Array.from(document.querySelectorAll(`.${ACTIVE_MOVE}`)).forEach(el => el.classList.remove(ACTIVE_MOVE));
    el.classList.add(ACTIVE_MOVE);
    this.settings.chessboard.disableMoveInput();
    if (this.settings.fen[this.current] === this.settings.fen[this.settings.fen.length - 1]) {
      this.settings.chessboard.enableMoveInput(this.settings.inputHandler);
    }
  }

  render() {
    this.#el.replaceChildren();

    this.#moves().forEach(move => {
      const tr = document.createElement('tr');
      const nTd = document.createElement('td');
      const nText = document.createTextNode(move.n);
      const wTd = document.createElement('td');
      const wText = document.createTextNode(move.w);

      nTd.appendChild(nText);
      tr.appendChild(nTd);

      wTd.appendChild(wText);
      wTd.addEventListener('click', () => {
        this.current = move.wFen;
        this.settings.chessboard.setPosition(this.settings.fen[this.current], true);
        this.#toggleMoveInput(wTd);
      });
      if (move.wFen === this.current) {
        this.#toggleMoveInput(wTd);
      }
      tr.appendChild(wTd);

      if (move.b) {
        const bTd = document.createElement('td');
        const bText = document.createTextNode(move.b);
        bTd.appendChild(bText);
        bTd.addEventListener('click', () => {
          this.current = move.bFen;
          this.settings.chessboard.setPosition(this.settings.fen[this.current], true);
          this.#toggleMoveInput(bTd);
        });
        if (move.bFen === this.current) {
          this.#toggleMoveInput(bTd);
        }
        tr.appendChild(bTd);
      }

      this.#el.appendChild(tr);
    });
  }
}
