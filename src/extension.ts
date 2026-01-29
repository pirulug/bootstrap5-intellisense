import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  const jsonPath = path.join(context.extensionPath, "classes.json");

  try {
    const classData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    const classSuggestions: string[] = classData.classes || [];

    const provider = vscode.languages.registerCompletionItemProvider(
      ["html", "php"],
      {
        provideCompletionItems(
          document: vscode.TextDocument,
          position: vscode.Position
        ) {
          const line = document.lineAt(position).text;
          const beforeCursor = line.slice(0, position.character);

          // Detectar class="" o class='' en HTML o dentro de strings PHP
          const inClassDouble = /class\s*=\s*"[^"]*$/.test(beforeCursor);
          const inClassSingle = /class\s*=\s*'[^']*$/.test(beforeCursor);

          if (!inClassDouble && !inClassSingle) {
            return;
          }

          // Obtener solo el fragmento después de class="
          const match = beforeCursor.match(/class\s*=\s*["']([^"']*)$/);

          const currentWord = match ? match[1].split(/\s+/).pop() || "" : "";

          const start = position.translate(0, -currentWord.length);
          const range = new vscode.Range(start, position);

          return classSuggestions
            .filter((cls) => cls.startsWith(currentWord))
            .map((cls) => {
              const item = new vscode.CompletionItem(
                cls,
                vscode.CompletionItemKind.Keyword
              );
              item.detail = "Bootstrap 5 IntelliSense";
              item.range = range;
              item.insertText = cls;
              return item;
            });
        },
      },
      " ",
      '"',
      "'"
    );

    context.subscriptions.push(provider);
  } catch (error) {
    console.error("Error loading classes.json:", error);
  }
}

export function deactivate() {}
