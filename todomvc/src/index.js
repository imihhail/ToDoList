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
  event: ['click', addTodo],
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
  data: fw.GetItems('Todo'),
  childStyle: 'todoList'
});


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

// route button that switches all Content data to home1
fw.Route({
  parent: 'Menu',
  element: 'button',
  styleClass: 'buttom',
  content: 'Home',
  attri: ['id', 'home'],
  where: '/home',
  contentParent: 'Content',
  contentToAdd: 'home1',
});

// route button that switches all Content data to hello1
fw.Route({
  parent: 'Menu',
  element: 'button',
  styleClass: 'buttom',
  content: 'Hello',
  attri: ['id', 'hello'],
  where: '/hellohello',
  contentParent: 'Content',
  contentToAdd: 'hello1',
});


function addTodo() {
  const userInput = fw.Point('toDo').value

  fw.Render({
    parent: 'ToDoContainer',
    element: 'p', 
    content: userInput,
    attri: ['id', 'ToDo']
  })
  fw.StoreItem("Todo", userInput)
}