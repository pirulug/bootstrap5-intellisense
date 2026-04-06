# Change Log

## [0.1.0] - 2026-04-06
### Added
- **Full JavaScript & TypeScript Support**: IntelliSense now works in `.js` and `.ts` files.
- **React (JSX & TSX) Support**: Automatically detects `className="..."` attributes.
- **Color Previews**: Visual color swatches in the IntelliSense list for color-related classes (`text-*`, `bg-*`, `btn-*`, etc.).
- **Hover Documentation**: Hovering over a Bootstrap class shows its description, color hex (if applicable), and a link to official documentation.
- **Expanded Language Support**: Support for `javascript`, `javascriptreact`, `typescript`, and `typescriptreact`.

### Improved
- **Better Detection Regex**: Improved matching for `class` and `className` across multiple lines.
- **Performance**: Optimized class lookups using `Set` for hover providers.
- **Project Structure**: Refactored extension logic into dedicated provider classes.

## [0.0.2] - 2026-01-29
### Added
- IntelliSense support for Bootstrap 5 classes inside PHP files (`.php`).
- Class autocompletion inside HTML embedded in PHP strings (e.g. `echo`, `print`, quoted strings).

### Improved
- Smarter class suggestions filtered by the currently typed class name.
- Correct replacement of the active class fragment instead of appending text.
- Autocompletion triggered after spaces inside the `class` attribute.
- Performance improvement by loading `classes.json` only once on extension activation.

## [0.0.1] - Initial Release
### Added
- Bootstrap 5 class IntelliSense for HTML files.
