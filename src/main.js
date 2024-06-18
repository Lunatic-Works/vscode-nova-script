const vscode = require('vscode');
const jump_to_definition = require('./jump_to_definition.js');
const provideHover = require('./hover.js');

exports.activate = function(context) {
    //context.subscriptions.push(vscode.languages.registerDefinitionProvider(['novascript'], new jump_to_definition(context)));
    context.subscriptions.push(vscode.languages.registerHoverProvider(['novascript'], new provideHover(context)));
};
