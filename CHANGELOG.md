# Change Log

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
