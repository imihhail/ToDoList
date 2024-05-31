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
  where: '/hellohello',
  contentParent: 'Content',
  contentToAdd: 'hello1',
});