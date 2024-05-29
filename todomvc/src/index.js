import MiniFramework from '../../mini-framework/index';

console.log('New connection!');

const root = document.querySelector('#root');
const fw = new MiniFramework(root);
// fw.Render('root', fw.NewElement('div', 'Container', 'Some Text'));
// fw.Render('Container', fw.NewElement('div', 'Menu', 'Random stuff'));
// fw.Render('Container', fw.NewElement('p', 'Content', 'Text for paragraph'));

fw.Render({
  parent: 'root',
  element: 'div',
  styleClass: 'Container',
});

fw.Render({
  parent: 'Container',
  element: 'button',
  styleClass: 'buttom',
  content: 'Click me!',
  attri: ['id', '2'],
  onClick: (e) =>
    e.target.textContent == 'I was clicked!!!'
      ? (e.target.textContent = 'Click me!')
      : (e.target.textContent = 'I was clicked!!!'),
});
