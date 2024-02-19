export class HistoryButtons {
  constructor(el, settings) {
    this.el = el;
    this.settings = settings;

    this.render();
  }

  getSettings() {
    return this.settings;
  }

  setSettings(settings) {
    this.settings = settings;

    return this;
  }

  render() {
    this.el.children.item(0).addEventListener('click', () => {
      this.settings.sanMovesTable.setCurrent(0);
      this.settings.sanMovesTable.getSettings().chessboard.setPosition(
        this.settings.sanMovesTable.getSettings().fen[this.settings.sanMovesTable.getCurrent()], true
      );
      this.settings.sanMovesTable.render();
    });

    this.el.children.item(1).addEventListener('click', () => {
      if (this.settings.sanMovesTable.getCurrent() > 0) {
        this.settings.sanMovesTable.setCurrent(this.settings.sanMovesTable.getCurrent() - 1);
        this.settings.sanMovesTable.getSettings().chessboard.setPosition(
          this.settings.sanMovesTable.getSettings().fen[this.settings.sanMovesTable.getCurrent()], true
        );
        this.settings.sanMovesTable.render();
      }
    });

    this.el.children.item(2).addEventListener('click', () => {
      if (this.settings.sanMovesTable.getCurrent() < this.settings.sanMovesTable.getSettings().fen.length - 1) {
        this.settings.sanMovesTable.setCurrent(this.settings.sanMovesTable.getCurrent() + 1);
        this.settings.sanMovesTable.getSettings().chessboard.setPosition(
          this.settings.sanMovesTable.getSettings().fen[this.settings.sanMovesTable.getCurrent()], true
        );
        this.settings.sanMovesTable.render();
      }
    });

    this.el.children.item(3).addEventListener('click', () => {
      this.settings.sanMovesTable.setCurrent(this.settings.sanMovesTable.getSettings().fen.length - 1);
      this.settings.sanMovesTable.getSettings().chessboard.setPosition(
        this.settings.sanMovesTable.getSettings().fen[this.settings.sanMovesTable.getCurrent()], true
      );
      this.settings.sanMovesTable.render();
    });
  }
}
