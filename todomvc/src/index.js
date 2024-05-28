import MiniFramework from '../../mini-framework/index';

console.log('New connection!');

const root = document.querySelector('#root');
const fw = new MiniFramework(root);
const firstElement = fw.NewElement('div', 'aClass', 'Some Text');

const secondElement = fw.NewElement('div', 'bClass', 'Random stuff');
fw.RenderChild(firstElement, secondElement);

fw.RenderChild(fw.newDom, firstElement);

fw.Render();
