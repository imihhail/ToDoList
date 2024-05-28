import { createElement, domElement, updateElement } from 'custom-framework';

const a = domElement('ul', { class: 'list' },
  domElement('li', null, 'item 1'),
  domElement('li', null, 'item 2')
);

const b = domElement('ul', { class: 'list' },
  domElement('li', null, 'item 1'),
  domElement('li', null, 'hello')
);
console.log(a);
console.log(b);


const $app = document.getElementById('app');
// const $reload = document.getElementById('reload');
// $root.appendChild(createElement(a));
const $reload = createElement({
  type: 'div',
  props: { id: 'reload' },
  children: ['Reload']
});
$app.appendChild($reload);

updateElement($app, a);
$reload.addEventListener('click', () => {
  updateElement($app, b, a);
});