import { Route } from '../../mini-framework/index';
import { GetAllTodo, GetCompletedTodo, GetActiveTodo } from './index.js';

export function CreateMenu() {
  // route button that switches all Content data to home1
  Route({
    parent: 'contentFilters',
    element: 'button',
    styleClass: 'activityButton',
    content: 'All',
    attri: ['id', 'All'],
    where: '/',
    onClick: () => GetAllTodo(),
  });

  // route button that switches all Content data to original toDo list
  Route({
    parent: 'contentFilters',
    element: 'button',
    styleClass: 'activityButton',
    content: 'Active',
    attri: ['id', 'Active'],
    where: '/active',
    onClick: () => GetActiveTodo(),
  });

  // route button that switches all Content data to hello1
  Route({
    parent: 'contentFilters',
    element: 'button',
    styleClass: 'activityButton',
    content: 'Completed',
    attri: ['id', 'Completed'],
    where: '/completed',
    onClick: () => GetCompletedTodo(),
  });
}