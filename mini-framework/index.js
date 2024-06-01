
export const NewElement = (tag, elClass, elText) => {
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

export const GetItems = (key) => {
  let listObject = JSON.parse(localStorage.getItem(key));
  return Object.entries(listObject);
};

export const DeleteItem = (key, valueId) => {
  let existingValue = Object.entries(JSON.parse(localStorage.getItem(key)));
  let filteredValues = existingValue.filter((value)=> value[0] != valueId)

  let filteredObject = Object.fromEntries(filteredValues);
  
  localStorage.setItem(key, JSON.stringify(filteredObject))
};

export const StoreItem = (key, value) => {
  const uuid = generateUUID();

  let existingValue = localStorage.getItem(key);

  existingValue == null ? existingValue = {} : existingValue = JSON.parse(existingValue);
  existingValue[uuid] = value;

  localStorage.setItem(key, JSON.stringify(existingValue));
};

export const Point = (item) => {
  let target = document.querySelector(`#${item}`);
  return target;
};

export const Render = (data) => {
  let element = NewElement(data.element, data.styleClass, data.content);

  if (data.onClick != null) {
    element.addEventListener('click', data.onClick);
  }
  if (data.attri != null) {
    element.setAttribute(data.attri[0], data.attri[1]);
  }
  if (data.parent != null) {
    Point(data.parent).appendChild(element);
  }
  if (data.attributes != null) {
    let attributes = Object.entries(data.attributes);
    attributes.forEach((attr) => element.setAttribute(attr[0], attr[1]));
  }
  if (data.attri != null) {
    element.setAttribute(data.attri[0], data.attri[1]);
  }
  return element;
};

export const Route = (data) => {
  let element = NewElement(data.element, data.styleClass, data.content);

  if (data.onClick != null) {
    element.addEventListener('click', data.onClick);
  }
  if (data.attri != null) {
    element.setAttribute(data.attri[0], data.attri[1]);
  }

  Point(data.parent).appendChild(element);
  if (data.where != null) {

    element.addEventListener('click', () => {
      window.history.pushState({}, '', data.where);
      
      let parent = Point(data.contentParent);
      parent.innerHTML = '';

      let child = Render({
        parent: data.contentParent,
        element: data.contentToAdd.element,
        styleClass: data.contentToAdd.styleClass,
        content: data.contentToAdd.content,
        attri: ['id', data.contentToAdd.attri[1]],
      });

      parent.appendChild(child);
    });
  }
}

function generateUUID() {
  return 'axxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
