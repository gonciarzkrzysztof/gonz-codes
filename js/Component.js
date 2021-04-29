class Component {
  constructor(comp) {
    this.el = comp;
    this.name = this.el.dataset.component;
  }

  getChildren(name) {
    let children = this.el.querySelectorAll(`[data-${this.name}-${name}]`);
    children = children.length <= 1 && children[0];

    return children;
  }
}

export default Component;
