import MiniFramework from '../../mini-framework/index';

export const fw = new MiniFramework();

fw.Render({
  parent: 'root',
  element: 'div',
  styleClass: 'Container',
  attri: ['id', 'Container'],
});

fw.Render({
  parent: 'Container',
  element: 'input',
  attri: ['id', 'toDo'],
});

fw.Render({
  parent: 'Container',
  element: 'button',
  styleClass: 'buttom',
  content: 'Click me!',
  attri: ['id', '2'],
  onClick: () => fw.StoreItem(fw.Point('toDo').value),
});

// Menu container inside Main Container
fw.Render({
  parent: 'Container',
  element: 'div',
  styleClass: 'menuContainer',
  attri: ['id', 'Menu'],
});

// content container inside Main Container
fw.Render({
  parent: 'Container',
  element: 'div',
  styleClass: 'contentContainer',
  attri: ['id', 'Content'],
});

// Todo list container
fw.Render({
  parent: 'Content',
  element: 'div',
  styleClass: 'ToDoContainer',
  attri: ['id', 'ToDoContainer'],
});

// iterate items to parent
fw.Populate({
  parent: 'ToDoContainer',
  content: fw.GetItems('Todo').forEach(([key, value]) => {
    fw.Render({
      parent: 'ToDoContainer',
      element: 'p',
      styleClass: 'TodoStyle',
      attri: ['id', key],
      content: value,
    });
  }),
}),

  // home item to be swtiched
  fw.Render({
    element: 'p',
    styleClass: 'asd',
    content: 'Home content!',
    attri: ['id', 'home1'],
  });

// hello item to be switched
fw.Render({
  element: 'p',
  styleClass: 'dsa',
  content: 'Hello content',
  attri: ['id', 'hello1'],
});

// // route button that switches all Content data to home1
// fw.Route({
//   parent: 'Menu',
//   element: 'button',
//   styleClass: 'buttom',
//   content: 'Home',
//   attri: ['id', 'home'],
//   where: '/home',
//   contentParent: 'Content',
//   contentToAdd: 'home1',
// });

// // route button that switches all Content data to hello1
// fw.Route({
//   parent: 'Menu',
//   element: 'button',
//   styleClass: 'buttom',
//   content: 'Hello',
//   attri: ['id', 'hello'],
//   where: '/hellohello',
//   contentParent: 'Content',
//   contentToAdd: 'hello1',
// });
