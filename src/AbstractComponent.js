export default class AbstractComponent {
  _el;
  _props;

  constructor(el, props) {
    this._el = el;
    this._props = props;

    this.domNode();
  }

  get props() {
    return this._props;
  }

  set props(props) {
    this._props = props;
  }

  domNode() {
    throw new Error("The domNode() method is an abstract method.");
  }
}
