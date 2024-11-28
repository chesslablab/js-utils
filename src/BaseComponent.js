export default class BaseComponent {
  el;
  props;

  constructor(params) {
    this.el = params.el ? params.el : null;
    this.props = params.el && params.props ? params.props() : null;

    this.mount();
  }

  mount() {
    // abstract method
  }
}
