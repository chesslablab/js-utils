export default class AbstractComponent {
  _el;
  _settings;

  constructor(el, settings) {
    this._el = el;
    this._settings = settings;

    this.domNode();
  }

  get settings() {
    return this._settings;
  }

  set settings(settings) {
    this._settings = settings;
  }

  domNode() {
    throw new Error("The domNode() method is an abstract method.");
  }
}
