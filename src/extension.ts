import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  // Ruta al archivo JSON
  const jsonPath = path.join(context.extensionPath, "classes.json");

  try {
    // Leer el archivo JSON de manera síncrona
    const classData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

    const provider = vscode.languages.registerCompletionItemProvider(
      ["html", "php"],
      {
        provideCompletionItems(
          document: vscode.TextDocument,
          position: vscode.Position
        ) {
          const lineText = document.lineAt(position).text;

          // Verificar si estamos dentro de un atributo class="" o class=''
          const doubleQuoteMatch = /class\s*=\s*"[^"]*$/.test(
            lineText.slice(0, position.character)
          );
          const singleQuoteMatch = /class\s*=\s*'[^']*$/.test(
            lineText.slice(0, position.character)
          );

          if (!doubleQuoteMatch && !singleQuoteMatch) {
            return undefined;
          }

          // Obtener la lista de clases desde el archivo JSON
          const classSuggestions = classData.classes;

          return classSuggestions.map((className: string) => {
            const item = new vscode.CompletionItem(
              className,
              vscode.CompletionItemKind.Keyword
            );
            item.detail = "Pirulug";
            return item;
          });
        },
      },
      '"',
      "'"
    );

    context.subscriptions.push(provider);
  } catch (error) {
    console.error("Error loading classes.json:", error);
  }
}

export function deactivate() {}
