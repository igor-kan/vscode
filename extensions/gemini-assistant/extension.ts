import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "gemini-assistant" is now active!');

    let disposable = vscode.commands.registerCommand('gemini-assistant.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from Gemini Assistant!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}