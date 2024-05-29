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
  styleClass: "Container",
  content: 'Some Text',
  onClick: () => console.log('Im clicked'),
});
