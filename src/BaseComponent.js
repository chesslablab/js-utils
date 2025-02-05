export default class BaseComponent {
  el;
  props;

  constructor(params) {
    if (params.el) {
      this.el = params.el;
      this.props = params.props ? params.props() : null;
      this.mount();
    }
  }

  mount() {
    // abstract method
  }
}
