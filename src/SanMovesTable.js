import Movetext from '../src/common/Movetext.js';

export default class SanMovesTable {
  constructor(id, movetext, fen) {
    this.id = id;
    this.movetext = movetext;
    this.fen = fen;

    this.createElements();
  }

  moves() {
    let j = 1;

    let rows = Movetext.toRows(
      this.movetext?.replace(/\s?\{[^}]+\}/g, '')
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

  createElements() {
    const tbody = document.querySelector(`#${this.id} tbody`);
    this.moves().forEach(move => {
      const tr = document.createElement('tr');

      const nTd = document.createElement('td');
      const nText = document.createTextNode(move.n);
      nTd.appendChild(nText);
      tr.appendChild(nTd);

      const wTd = document.createElement('td');
      const wText = document.createTextNode(move.w);
      wTd.appendChild(wText);
      tr.appendChild(wTd);

      if (move.b) {
        const bTd = document.createElement('td');
        const bText = document.createTextNode(move.b);
        bTd.appendChild(bText);
        tr.appendChild(bTd);
      }

      tbody.appendChild(tr);
    });
  }
}
