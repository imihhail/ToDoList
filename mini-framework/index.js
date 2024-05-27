export function createComponent(type, props, ...children) {
  return {
    type,
    props: props || {},
    children: children.flat(),
  };
}

export function render(vNode, container) {
  const dom = createDOMElement(vNode);
  container.appendChild(dom);
}

function createDOMElement(vNode) {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  const { type, props, children } = vNode;
  const element = document.createElement(type);

  Object.keys(props).forEach((key) => {
    element[key] = props[key];
  });

  children.forEach((child) => {
    element.appendChild(createDOMElement(child));
  });

  return element;
}

