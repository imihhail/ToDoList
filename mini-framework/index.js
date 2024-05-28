export default class MiniFramework {
  constructor(dom) {
    this.dom = dom;
    this.newDom = document.createElement('div');
    this.newDom.setAttribute('id', 'root');
  }

  NewElement = (tag, elClass, elText) => {
    const newElement = document.createElement(tag);
    if (elClass != null) {
      newElement.classList = elClass;
    }
    if (elText != null) {
      if (tag == 'button') {
        newElement.textContent = elText;
      } else {
        newElement.innerHTML = elText;
      }
    }
    return newElement;
  };

  RenderChild(parent, child) {
    parent.appendChild(child);
  }

  Render() {
    this.dom.innerHTML = '';
    this.dom.appendChild(this.newDom);
  }
}
