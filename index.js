const MonacoEditor = require('monaco-editor');

const node = document.createElement('div');
document.body.appendChild(node);

const editor = MonacoEditor.editor.create(node, {
  value: 'SELECT 1 + 1;',
  language: 'sql',
  scrollBeyondLastLine: false,
});

editor.layout({
  height: 200,
  width: 600,
});
