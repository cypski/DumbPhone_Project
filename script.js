const apps = [
  { name: 'App1', shortcut: 'Open App1' }, // names of shortcuts must match those chosen in this script 
  { name: 'App2', shortcut: 'Open App2' },
  { name: 'App3', shortcut: 'Open App3' },
  { name: 'App4', shortcut: 'Open App4' },
  { name: 'App5', shortcut: 'Open App5' },
  { name: 'App6', shortcut: 'Open App6' },
  { name: 'App7', shortcut: 'Open App7' },
  { name: 'App8', shortcut: 'Open App8' },
  { name: 'App9', shortcut: 'Open App9' },
  { name: 'App10', shortcut: 'Open App10' },
  { name: 'App11', shortcut: 'Open App11' },
  { name: 'App12', shortcut: 'Open App12' }
];

// establishes widget using ListWidget() library
let widget = new ListWidget();

// background color
widget.backgroundColor = new Color('#000000');

// creates stacks
let firstColumn = apps.slice(0, 6);
let secondColumn = apps.slice(6);

// adds apps from list to widget
let stack = widget.addStack();
stack.layoutHorizontally();

// column 1
let column1 = stack.addStack();
column1.layoutVertically();

for (let app of firstColumn) {
  let appText = column1.addText(app.name);
  appText.textColor = Color.white();
  appText.font = Font.systemFont(25);
  appText.url = `shortcuts://run-shortcut?name=${encodeURIComponent(app.shortcut)}`;
  column1.addSpacer(20);
}

stack.addSpacer(20);

// column 2
let column2 = stack.addStack();
column2.layoutVertically();

for (let app of secondColumn) {
  let appText = column2.addText(app.name);
  appText.textColor = Color.white();
  appText.font = Font.systemFont(25);
  appText.url = `shortcuts://run-shortcut?name=${encodeURIComponent(app.shortcut)}`;
  column2.addSpacer(20);
}

// displays widget
if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentMedium();
}

// runs script
Script.complete();
