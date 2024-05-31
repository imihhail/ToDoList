import { v4 as uuidv4 } from 'uuid';

export default class MiniFramework {
  constructor() {
    this.dom = this.Point('root');
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

  GetItems() {
    let listObject = JSON.parse(localStorage.getItem('Todo'));
    return Object.entries(listObject);
  }

  StoreItem(value) {
    const uuid = generateUUID();
    let existingValue = localStorage.getItem('Todo');
    if (existingValue == null) {
      existingValue = {};
    } else {
      existingValue = JSON.parse(existingValue);
    }
    existingValue[uuid] = value;
    localStorage.setItem('Todo', JSON.stringify(existingValue));
  }

  Point(item) {
    let target = document.querySelector(`#${item}`);
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
    if (data.parent != null) {
      this.Point(data.parent).appendChild(element);
    }
  }

  Populate(data) {
    if (data.parent != null) {
      if (data.content != null) {
        this.Point(data.parent).appendChild(data.content);
      }
    }
  }
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
