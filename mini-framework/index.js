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

  GetItems(key) {
    let listObject = JSON.parse(localStorage.getItem(key))
    return listObject;
  }
  
  StoreItem(key, value) {
    const uuid = generateUUID();

    let existingValue = localStorage.getItem(key);
    if (existingValue) {
        existingValue = JSON.parse(existingValue);
    } else {
        existingValue = [];
    }
    existingValue.push({uniqueKey: uuid, value: value});
    localStorage.setItem(key, JSON.stringify(existingValue));
  }

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
    if (data.parent != null) {
      this.Point(data.parent).appendChild(element);
    }
    if (data.data != null) {
      let newElement 
      for (const [key, value] of Object.entries(data.data)) {
        if(data.childStyle != null){
          newElement = this.NewElement('p', data.childStyle, value.value)
        } else {
          newElement = this.NewElement('p', 'todoClass', value.value)
        }
       newElement.setAttribute('id', value.uniqueKey);
       element.appendChild(newElement)
      }
    }
  }
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}