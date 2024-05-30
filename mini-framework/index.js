export default class MiniFramework {
  constructor() {
    this.dom = this.Point("root");
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
    return target;
  }

  Render(data) {
    let element = this.NewElement(data.element, data.styleClass, data.content);
    if (data.event != null) {
      element.addEventListener(data.event[0], data.event[1]);
    }
    if (data.attri != null) {
      element.setAttribute(data.attri[0], data.attri[1]);
    }
    this.Point(data.parent).appendChild(element);
  }
}
