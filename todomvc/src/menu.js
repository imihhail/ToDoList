import fw from "index.js"



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
  where: '/hello',
  contentParent: 'Content',
  contentToAdd: 'hello1',
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