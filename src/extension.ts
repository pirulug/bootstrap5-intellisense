import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

/**
 * Bootstrap 5 IntelliSense Extension
 */
export function activate(context: vscode.ExtensionContext) {
  const jsonPath = path.join(context.extensionPath, "classes.json");

  let classSuggestions: string[] = [];
  try {
    const classData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    classSuggestions = classData.classes || [];
  } catch (error) {
    console.error("Error loading classes.json:", error);
    return;
  }

  const selector = [
    "html",
    "php",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ];

  // Register Completion Provider
  const completionProvider = vscode.languages.registerCompletionItemProvider(
    selector,
    new BootstrapCompletionProvider(classSuggestions),
    " ",
    '"',
    "'",
    "="
  );

  // Register Hover Provider
  const hoverProvider = vscode.languages.registerHoverProvider(
    selector,
    new BootstrapHoverProvider(classSuggestions)
  );

  context.subscriptions.push(completionProvider, hoverProvider);
}

/**
 * Completion Item Provider for Bootstrap 5 classes
 */
class BootstrapCompletionProvider implements vscode.CompletionItemProvider {
  constructor(private classes: string[]) {}

  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.CompletionItem[] | undefined {
    const line = document.lineAt(position).text;
    const beforeCursor = line.slice(0, position.character);

    // Regex to detect if we are inside a class or className attribute
    // Supports class="...", className="...", class='...', etc.
    const classAttributeRegex = /(?:class|className)\s*=\s*["']([^"']*)$/;
    const match = beforeCursor.match(classAttributeRegex);

    if (!match) {
      return undefined;
    }

    const currentWord = match[1].split(/\s+/).pop() || "";
    const start = position.translate(0, -currentWord.length);
    const range = new vscode.Range(start, position);

    return this.classes.map((cls) => {
      const item = new vscode.CompletionItem(cls);
      
      // Determine the kind of completion item (Color if applicable)
      const color = getColorHex(cls);
      if (color) {
        item.kind = vscode.CompletionItemKind.Color;
        item.detail = `Color: ${color}`;
        item.documentation = new vscode.MarkdownString(`Bootstrap 5 Color: **${cls}**\n\nHex: \`${color}\``);
      } else {
        item.kind = vscode.CompletionItemKind.Keyword;
        item.detail = "Bootstrap 5 Class";
      }

      item.range = range;
      item.insertText = cls;
      return item;
    });
  }
}

/**
 * Hover Provider for Bootstrap 5 classes
 */
class BootstrapHoverProvider implements vscode.HoverProvider {
  private classSet: Set<string>;
  constructor(private classes: string[]) {
    this.classSet = new Set(classes);
  }

  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.Hover | undefined {
    const range = document.getWordRangeAtPosition(position, /[-\w]+/);
    if (!range) {
      return undefined;
    }

    const word = document.getText(range);

    // Check if the word is a known bootstrap class
    if (!this.classSet.has(word)) {
      return undefined;
    }

    const description = getClassDescription(word);
    const color = getColorHex(word);
    
    let content = `### Bootstrap 5: \`${word}\`\n\n`;
    if (description) {
      content += `${description}\n\n`;
    }
    if (color) {
      content += `Hex: \`${color}\`\n\n`;
    }
    content += `[Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/search/?q=${word})`;

    const markdown = new vscode.MarkdownString(content);
    markdown.isTrusted = true;

    return new vscode.Hover(markdown, range);
  }
}

/**
 * Basic mapping for Bootstrap colors
 */
function getColorHex(cls: string): string | undefined {
  const colors: { [key: string]: string } = {
    primary: "#0d6efd",
    secondary: "#6c757d",
    success: "#198754",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#0dcaf0",
    light: "#f8f9fa",
    dark: "#212529",
    white: "#ffffff",
    black: "#000000",
    body: "#212529",
    transparent: "transparent",
  };

  // Check for common color suffixes/prefixes
  for (const [name, hex] of Object.entries(colors)) {
    if (cls.endsWith("-" + name) || cls === name) {
      return hex;
    }
  }
  return undefined;
}

/**
 * Simple description provider based on common Bootstrap prefixes
 */
function getClassDescription(cls: string): string | undefined {
  const prefixes: { [key: string]: string } = {
    "btn-": "Bootstrap Button style",
    "bg-": "Background color utility",
    "text-": "Text color or alignment utility",
    "border-": "Border utility",
    "m-": "Margin utility",
    "p-": "Padding utility",
    "d-": "Display utility",
    "flex-": "Flexbox utility",
    "col-": "Grid column utility",
    "row": "Grid row container",
    "container": "Layout container",
    "alert-": "Alert component style",
    "card-": "Card component component style",
    "nav-": "Navigation component style",
    "navbar-": "Navbar component style",
    "fs-": "Font size utility",
    "fw-": "Font weight utility",
    "rounded-": "Border radius utility",
    "shadow-": "Box shadow utility",
    "w-": "Width utility",
    "h-": "Height utility",
    "align-": "Alignment utility",
    "justify-": "Flexbox justify-content utility",
  };

  for (const [prefix, desc] of Object.entries(prefixes)) {
    if (cls.startsWith(prefix)) {
      return desc;
    }
  }
  return "Bootstrap 5 Utility/Component class";
}

export function deactivate() {}
