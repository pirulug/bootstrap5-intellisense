# Bootstrap 5 IntelliSense

![GitHub package.json version](https://img.shields.io/github/package-json/v/pirulug/bootstrap5-intellisense?style=for-the-badge)
[![GitHub stars](https://img.shields.io/github/stars/pirulug/bootstrap5-intellisense?style=for-the-badge)](https://github.com/pirulug/bootstrap5-intellisense/stargazers)
[![GitHub license](https://img.shields.io/github/license/pirulug/bootstrap5-intellisense?style=for-the-badge)](https://github.com/pirulug/bootstrap5-intellisense/blob/master/LICENSE)

**Bootstrap 5 IntelliSense** is a professional, lightweight Visual Studio Code extension designed to provide powerful CSS class autocompletion and documentation for Bootstrap 5 projects.

It works across multiple languages, including **HTML, PHP, JavaScript, and React (JSX/TSX)**, enhancing development productivity.

## Features

- **IntelliSense with Color Previews**: Visual color swatches in the autocompletion list for classes such as `text-primary`, `bg-success`, `btn-dark`, and others.
- **Hover Documentation**: Access instant descriptions and color information by hovering over any Bootstrap class, including direct links to official documentation.
- **Full React Support**: Native support for `className="..."` attributes in JSX and TSX files.
- **PHP Integration**: Intelligent autocompletion inside PHP files and within HTML strings in PHP (e.g., `echo`, `print`).
- **High Performance**: Optimized with `Set` lookups and single-load data for maximum performance without runtime dependencies.
- **Smart Filtering**: Accurate suggestions based on active context with correct word replacement.

## Supported Languages

- [x] **HTML** (.html, .htm)
- [x] **PHP** (.php)
- [x] **JavaScript** (.js)
- [x] **JavaScript React** (.jsx)
- [x] **TypeScript** (.ts)
- [x] **TypeScript React** (.tsx)

## Usage

Start typing Bootstrap classes inside a `class` or `className` attribute.

### HTML Example
```html
<div class="row">
  <div class="col-md-6 bg-primary text-white p-3">
    Hello Bootstrap!
  </div>
</div>
```

### React (JSX) Example
```jsx
export const MyComponent = () => (
  <button className="btn btn-outline-danger shadow-sm">
    Click Me
  </button>
);
```

### PHP Example
```php
<?php
echo "<div class='alert alert-info border-3 rounded'>";
?>
```

## Development

If you want to contribute or build the theme from source:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate the theme JSON files from the source files in `src/`:
   ```bash
   npm run build
   ```
4. Package the extension into a `.vsix` file:
   ```bash
   # Install vsce first if you haven't: npm install -g @vscode/vsce
   vsce package

## License

[MIT License](https://github.com/pirulug/bootstrap5-intellisense/blob/master/LICENSE)

Developed by [Pirulug](https://github.com/pirulug)

## Contributing

Contributions are welcome. If you have suggestions or find bugs, please open an issue or pull request in the [repository](https://github.com/pirulug/bootstrap5-intellisense).
