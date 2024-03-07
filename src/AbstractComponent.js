export default class AbstractComponent {
  _el;
  _props;

  constructor(el, props) {
    this._el = el;
    this._props = props;

    this.domElem();
  }

  get props() {
    return this._props;
  }

  set props(props) {
    this._props = props;
  }

  domElem() {
    throw new Error("The domElem() method is an abstract method.");
  }
}
