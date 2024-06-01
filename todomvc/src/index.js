import { Render, StoreItem, Point, GetItems } from '../../mini-framework/index';
import './menu.js';
import './helper.js';

Render({
  parent: 'root',
  element: 'div',
  styleClass: 'Container',
  attri: ['id', 'Container'],
});

Render({
  parent: 'Container',
  element: 'input',
  attri: ['id', 'toDo'],
});

Render({
  parent: 'Container',
  element: 'button',
  styleClass: 'buttom',
  content: 'Click me!',
  attri: ['id', '2'],
  onClick: () => {
    StoreItem(fw.Point('toDo').value);
    Point('toDo').value = '';
    Point('ToDoContainer').innerHTML = '';
    GetItems('Todo').forEach(([key, value]) => {
      Render({
        parent: 'ToDoContainer',
        element: 'input',
        styleClass: 'checkbox',
        attri: ['type', 'checkbox'],
      });

      Render({
        parent: 'ToDoContainer',
        element: 'p',
        styleClass: 'TodoStyle',
        attri: ['id', key],
        content: value,
      });
    });
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

// iterate items to parent
GetItems('Todo').forEach(([key, value]) => {
  Render({
    parent: 'ToDoContainer',
    element: 'div',
    styleClass: 'list',
    attributes: { id: value },
  });

  Render({
    parent: value,
    element: 'input',
    styleClass: 'checkbox',
    attributes: { type: 'checkbox', id: key },
  });

  Render({
    parent: value,
    element: 'p',
    styleClass: 'TodoStyle',
    attributes: { id: key },
    content: value,
  });

  Render({
    parent: value,
    element: 'button',
    styleClass: 'deletebutton',
    attributes: { id: key },
    content: 'Delete',
  });
});
