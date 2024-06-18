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
        const word        = document.getText(document.getWordRangeAtPosition(position));

        var def = this.api[word];
        if (def) {
            var content = def[vscode.env.language];
            if (!content) {
                content = def["zh-cn"];
            }
            return new vscode.Hover(word + ":" + content);
        }
    }
}

module.exports = Hover;
