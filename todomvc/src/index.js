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
  type: 'button',
  props: { id: 'reload' },
  children: ['Reload']
});
$app.appendChild($reload);

let isA = true;
updateElement($app, a);

$reload.addEventListener('click', () => {
  if (isA) {
    updateElement($app, b, a, 1);
  } else {
    updateElement($app, a, b, 1);
  }
  isA = !isA;
});