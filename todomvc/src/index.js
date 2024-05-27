import { createComponent, render } from 'custom-framework';

const App = createComponent(
  'div',
  { className: 'app' },
  createComponent('h1', null, 'TodoMVC'),
  createComponent('input', {
    type: 'text',
    placeholder: 'What needs to be done?',
  }),
  createComponent(
    'ul',
    null,
    createComponent('li', null, 'Sample Todo 1'),
    createComponent('li', null, 'Sample Todo 2')
  )
);

const container = document.getElementById('app');
render(App, container);
