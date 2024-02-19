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
      // TODO
      console.log('Backward');
    });

    this.el.children.item(1).addEventListener('click', () => {
      // TODO
      console.log('Step backward');
    });

    this.el.children.item(2).addEventListener('click', () => {
      // TODO
      console.log('Step forward');
    });

    this.el.children.item(3).addEventListener('click', () => {
      // TODO
      console.log('Forward');
    });
  }
}
