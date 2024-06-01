import { Render, Route } from '../../mini-framework/index';

// route button that switches all Content data to home1
Route({
  parent: 'Menu',
  element: 'button',
  styleClass: 'buttom',
  content: 'Home',
  attri: ['id', 'home'],
  where: '/home',
  contentParent: 'Content',
  contentToAdd: homePoint,
});

// route button that switches all Content data to hello1
Route({
  parent: 'Menu',
  element: 'button',
  styleClass: 'buttom',
  content: 'Hello',
  attri: ['id', 'hello'],
  where: '/hello',
  contentParent: 'Content',
  contentToAdd: helloPoint,
});

// home item to be swtiched
const homePoint = Render({
  element: 'p',
  styleClass: 'asd',
  content: 'Home content!',
  attri: ['id', 'home1'],
});

// hello item to be switched
const helloPoint = Render({
  element: 'p',
  styleClass: 'dsa',
  content: 'Hello content',
  attri: ['id', 'hello1'],
});
