import { Route } from '../../mini-framework/index';
import { GetAllTodo, GetCompletedTodo, GetActiveTodo } from './helper.js';

export function CreateMenu() {

  // route button that switches all Content data to home1
  Route({
    parent: 'Menu',
    element: 'button',
    styleClass: 'button',
    content: 'All',
    attri: ['id', 'All'],
    where: '/',
    contentParent: 'ToDoContainer',
    onClick: GetAllTodo,
  });

  // route button that switches all Content data to hello1
  Route({
    parent: 'Menu',
    element: 'button',
    styleClass: 'buttom',
    content: 'Completed',
    attri: ['id', 'Completed'],
    where: '/completed',
    contentParent: 'ToDoContainer',
    onClick: GetCompletedTodo,
  });

  // route button that switches all Content data to original toDo list
  Route({
    parent: 'Menu',
    element: 'button',
    styleClass: 'buttom',
    content: 'Active',
    attri: ['id', 'Active'],
    where: '/active',
    contentParent: 'ToDoContainer',
    onClick: GetActiveTodo,
  });
}