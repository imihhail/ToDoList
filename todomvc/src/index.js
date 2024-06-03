import {
  Render,
  StoreItem,
  Point,
  GetItems,
  DeleteItem,
  ToggleItemBoolean,
  StorageBooleanCount,
  ToggleItemValue,
} from '../../mini-framework/index';

import { CreateMenu } from './menu.js';
import './menu.js';
import './helper.js';

import './index.css';

if (window.location.pathname !== '/') {
  window.location.pathname = '/';
}

Render({
  parent: 'root',
  element: 'div',
  styleClass: 'Container',
  attri: ['id', 'Container'],
});

Render({
  parent: 'Container',
  element: 'h1',
  content: 'todos',
});

Render({
  parent: 'Container',
  element: 'div',
  styleClass: 'input-container',
  attri: ['id', 'input-container'],
});

Render({
  parent: 'input-container',
  element: 'input',
  styleClass: 'new-todo',
  attributes: { id: 'new-todo', placeholder: 'What needs to be done?' },
  onKeyDown: () => {
    StoreItem('Todo', Point('new-todo').value);
    Point('contentFilters').classList.remove('hide');
    Point('new-todo').value = '';
    Point('ToDoContainer').innerHTML = '';
    GetItems('Todo').forEach(([key, value]) => renderTodo(key, value));
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
  styleClass:
    GetItems('Todo').length != 0 ? 'contentFilters' : 'contentFilters hide',
  attri: ['id', 'contentFilters'],
});

Render({
  parent: 'contentFilters',
  element: 'p',
  styleClass: 'listCount',
  attri: ['id', 'listCount'],
  content: GetItems('Todo') ? `${StorageBooleanCount('Todo')} items left!` : '',
});

// iterate items to parent
GetItems('Todo').forEach(([key, value]) => {
  renderTodo(key, value);
});

// Menu buttons
CreateMenu();

export const GetAllTodo = () => {
  Point('ToDoContainer').innerHTML = '';
  GetItems('Todo').forEach(([key, value]) => {
    renderTodo(key, value);
  });
};

export const GetCompletedTodo = () => {
  Point('ToDoContainer').innerHTML = '';
  GetItems('Todo').forEach(([key, value]) => {
    if (value[1] == 'true' || value[1] == true) {
      renderTodo(key, value);
    }
  });
};

export const GetActiveTodo = () => {
  Point('ToDoContainer').innerHTML = '';
  GetItems('Todo').forEach(([key, value]) => {
    if (value[1] == 'false' || value[1] == false) {
      renderTodo(key, value);
    }
  });
};

export const ClearCompleted = () => {
  Point('ToDoContainer').innerHTML = '';
  GetItems('Todo').forEach(([key, value]) => {
    if (value[1] == 'false' || value[1] == false) {
      renderTodo(key, value);
    } else {
      DeleteItem('Todo', key);
    }
    if (GetItems('Todo').length == 0)
      Point('contentFilters').classList.add('hide');
  });
};

function renderTodo(key, value) {
  Render({
    parent: 'ToDoContainer',
    element: 'div',
    styleClass: 'list',
    attributes: { id: key + 'list' },
  });

  Render({
    parent: key + 'list',
    element: 'input',
    styleClass: 'checkbox',
    attributes: { type: 'checkbox', id: key },
    onClick: (e) => {
      ToggleItemBoolean('Todo', e.target.id, e.target.checked);
      Point('listCount').innerHTML = `${StorageBooleanCount(
        'Todo'
      )} items left!`;
      Point(key+'text').style.textDecoration = 'line-through'
      Point(key+'text').style.opacity = '0.5'
      if (!e.target.checked) {
        Point(key+'text').style.opacity = '1'
        Point(key+'text').style.textDecoration = 'none'
      }
    },
  });

  Render({
    parent: key + 'list',
    element: 'p',
    styleClass: 'TodoStyle',
    attributes: { id: key+'text' },
    content: value[0],
    onDblClick: (e) => {
      Render({
        parent: key,
        element: 'input',
        styleClass: 'editTodo',
        attributes: { id: key + 'input' },
        onKeyDown: () => Point(key + 'input').blur(),
      });

      let editingList = Point(key + 'list');
      Point(key + 'input').value = e.target.innerText;

      editingList.replaceWith(Point(key + 'input'));

      Point(key + 'input').onblur = () => {
        ToggleItemValue('Todo', Point(key + 'input').value, key);

        let changedText = Point(key + 'input').value;
        let paragraph = editingList.querySelector('p.TodoStyle');

        paragraph.textContent = changedText;

        Point(key + 'input').replaceWith(editingList);
      };

      Point(key + 'input').focus();
    },
  });

  Render({
    parent: key + 'list',
    element: 'button',
    styleClass: 'deletebutton',
    attributes: { id: key },
    content: '+',
    onClick: (e) => {
      DeleteItem('Todo', e.target.id);
      Point(key + 'list').remove();
      Point('listCount').innerHTML = `${StorageBooleanCount(
        'Todo'
      )} items left!`;
      if (GetItems('Todo').length == 0)
      Point('contentFilters').classList.add('hide');
    },
  });

  const yourCheckbox = document.getElementById(`${key}`);
  if (value[1] == true) {
    Point(key+'text').style.textDecoration = 'line-through'
    Point(key+'text').style.opacity = '0.5'
    yourCheckbox.checked = true;
  }
}
