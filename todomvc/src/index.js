import MiniFramework from '../../mini-framework/index';
const fw = new MiniFramework(root);

fw.Render({
  parent: 'root',
  element: 'div',
  styleClass: 'Container',
  attri: ['id', 'Container'],
});

fw.Render({
  parent: 'Container',
  element: 'button',
  styleClass: 'buttom',
  content: 'Click me!',
  attri: ['id', '2'],
  event: ['click', test],
});

const test = () => console.log('Clicked');
