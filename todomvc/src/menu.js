import { Route } from '../../mini-framework/index';

export function CreateMenu() {

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

  // route button that switches all Content data to original toDo list
  Route({
    parent: 'Menu',
    element: 'button',
    styleClass: 'buttom',
    content: 'Original',
    attri: ['id', 'original'],
    where: '/',
    contentParent: 'Content',
    contentToAdd: originalPoint,
  });
}

// home item to be switched
const homePoint = {
  parent: 'Content',
  element: 'p',
  styleClass: 'homeStyle',
  content: 'Home content!',
  attri: ['id', 'home1'],
};

// hello item to be switched
const helloPoint = {
  parent: 'Content',
  element: 'p',
  styleClass: 'helloStyle',
  content: 'Hello content',
  attri: ['id', 'hello1'],
};

// in the future all toDo list items to be switched
const originalPoint = {
  // parent: 'Content',
  element: 'p',
  styleClass: 'originalStyle',
  content: 'original to Do content',
  attri: ['id', 'original1'],
};