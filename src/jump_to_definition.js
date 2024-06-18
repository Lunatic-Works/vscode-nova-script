const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

class Definition{
    constructor(context) {
        const resourcePath = path.join(context.extensionPath, "nova_api.json");
        let api_json = fs.readFileSync(resourcePath, 'utf-8');
        this.api = JSON.parse(api_json);
    }

    provideDefinition (document, position, token) {
        const word        = document.getText(document.getWordRangeAtPosition(position));
        return null;
    }
}

module.exports = Definition;
