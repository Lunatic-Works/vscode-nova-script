const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

class Hover{
    constructor(context) {
        const resourcePath = path.join(context.extensionPath, "nova_api.json");
        let api_json = fs.readFileSync(resourcePath, 'utf-8');
        this.api = JSON.parse(api_json);
    }

    provideHover(document, position, token) {
        const fileName    = document.fileName;
        const word        = document.getText(document.getWordRangeAtPosition(position));

        if (word in this.api) {
            return new vscode.Hover(word + ":" + this.api[word]["zh-cn"]);
        }
    }
}

module.exports = Hover;