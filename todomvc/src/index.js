import { createElement, domElement, updateElement } from 'custom-framework';

import './index.css';

const f = domElement('ul', { style: 'list-style: none;' },
    domElement('li', { className: 'item' }, 'item 1'),
    domElement('li', { className: 'item' },
    domElement('input', { type: 'checkbox', checked: true }),
    domElement('input', { type: 'text', disabled: false })
  ),
  domElement('li', { forceUpdate: true }, 'text')
);

const g = domElement('ul', { style: 'list-style: none;' },
    domElement('li', { className: 'item item2' }, 'item 1'),
    domElement('li', { style: 'background: red;' },
    domElement('input', { type: 'checkbox', checked: false }),
    domElement('input', { type: 'text', disabled: true })
  ),
  domElement('li', { forceUpdate: true }, 'text')
);


const app = document.getElementById('app');

const reload = createElement({
  type: 'button',
  props: { id: 'reload' },
  children: ['Reload']
});

const alertButton = createElement({
  type: 'button',
  props: { id: 'alert', onClick: () => alert('hi!')},
  children: ['Alert']
});

const realBoy = createElement({
  type: 'button',
  props: { id: 'realButton', onClick: () => alert('hi!')},
  children: ['Alert']
});

app.appendChild(createElement(f));
app.appendChild(reload);
app.appendChild(alertButton);

let change = true;


reload.addEventListener('click', () => {
  if (change) {
    updateElement(app, g, f);
  } else {
    updateElement(app, f, g);
  }
  change = !change;
});