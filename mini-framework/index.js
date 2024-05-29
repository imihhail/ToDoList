export default class MiniFramework {
  constructor(dom) {
    this.dom = dom;
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

  Point(item) {
    let target = document.querySelector(`#${item}`);
    if (target === null) {
      target = document.querySelectorAll(`.${item}`);
    }
    if (target.length === 1) {
      return target[0];
    }
    return target;
  }

  Render(data) {
    let element = this.NewElement(data.element, data.styleClass, data.content);
    if (data.onClick != null) {
      element.addEventListener('click', data.onClick);
    }
    if (data.attri != null) {
      element.setAttribute(data.attri[0], data.attri[1]);
    }
    this.Point(data.parent).appendChild(element);
  }
}
