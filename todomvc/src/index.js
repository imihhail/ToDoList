import { Render, StoreItem, Point, GetItems, DeleteItem, ToggleItemBoolean, StorageBooleanCount } from '../../mini-framework/index';
import './menu.js';
import './helper.js';

import "./index.css"

Render({
  parent: 'root',
  element: 'div',
  styleClass: 'Container',
  attri: ['id', 'Container'],
});

Render({
  parent: 'Container',
  element: 'input',
  attri: ['id', 'Todo'],
});

Render({
  parent: 'Container',
  element: 'button',
  styleClass: 'buttom',
  content: 'Click me!',
  attri: ['id', '2'],
  onClick: () => {
    StoreItem('Todo', Point('Todo').value);
    Point('Todo').value = '';
    Point('ToDoContainer').innerHTML = '';
    GetItems('Todo').forEach(([key, value]) => renderTodo(key, value))
    Point('listCount').innerHTML = `${StorageBooleanCount('Todo')} items left!`;
  },
});

// Menu container inside Main Container
Render({
  parent: 'Container',
  element: 'div',
  styleClass: 'menuContainer',
  attri: ['id', 'Menu'],
});

// content container inside Main Container
Render({
  parent: 'Container',
  element: 'div',
  styleClass: 'contentContainer',
  attri: ['id', 'Content'],
});

// Todo list container
Render({
  parent: 'Content',
  element: 'div',
  styleClass: 'ToDoContainer',
  attri: ['id', 'ToDoContainer'],
});

Render({
  parent: 'Content',
  element: 'div',
  styleClass: 'contentFilters',
  attri: ['id', 'contentFilters'],
});

Render({
  parent: 'contentFilters',
  element: 'p',
  styleClass: 'listCount',
  attri: ['id', 'listCount'],
  content: GetItems('Todo') ? `${StorageBooleanCount('Todo')} items left!` : ''
});

// iterate items to parent
GetItems('Todo').forEach(([key, value]) => {
  renderTodo(key, value)
});

function renderTodo(key, value) {
  Render({
    parent: 'ToDoContainer',
    element: 'div',
    styleClass: 'list',
    attributes: { id: key+'list' },
  });

  Render({
    parent: key+'list',
    element: 'input',
    styleClass: 'checkbox',
    attributes: { type: 'checkbox', id: key},
    onClick: (e) => {
      ToggleItemBoolean('Todo', e.target.id, e.target.checked)
      Point('listCount').innerHTML = `${StorageBooleanCount('Todo')} items left!`;
    }
  });

  const yourCheckbox = document.getElementById(`${key}`);
  if (value[1] == true) {
      yourCheckbox.checked = true;
  }

  Render({
    parent: key+'list',
    element: 'p',
    styleClass: 'TodoStyle',
    attributes: { id: key },
    content: value[0],
  });

  Render({
    parent: key+'list',
    element: 'button',
    styleClass: 'deletebutton',
    attributes: { id: key },
    content: 'Delete',
    onClick: (e) => {
      DeleteItem('Todo', e.target.id)
      Point(key+'list').innerHTML = '';
    }
  });
}




