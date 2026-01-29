# Bootstrap 5 IntelliSense

![GitHub package.json version](https://img.shields.io/github/package-json/v/pirulug/bootstrap5-intellisense?style=for-the-badge)
[![GitHub stars](https://img.shields.io/github/stars/pirulug/bootstrap5-intellisense?style=for-the-badge)](https://github.com/pirulug/bootstrap5-intellisense/stargazers)
[![GitHub license](https://img.shields.io/github/license/pirulug/bootstrap5-intellisense?style=for-the-badge)](https://github.com/pirulug/bootstrap5-intellisense/blob/master/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/pirulug/bootstrap5-intellisense?style=for-the-badge)](https://github.com/pirulug/bootstrap5-intellisense/network)

Bootstrap 5 IntelliSense is a lightweight Visual Studio Code extension that provides fast and accurate CSS class autocompletion for Bootstrap 5 projects.

It works seamlessly in HTML and PHP files, including HTML embedded inside PHP strings (echo, print, quoted strings), improving productivity when working with Bootstrap-based layouts.

## Features

- Bootstrap 5 CSS class autocompletion
- Works in .html and .php files
- Supports HTML inside PHP strings
- Smart filtering based on the currently typed class
- Correct replacement of partial class names
- Triggers suggestions inside class attributes
- Lightweight and fast, no runtime dependencies

## Supported Languages

- HTML
- PHP
- Other (not tested)


## Usage

Start typing Bootstrap classes inside a class attribute.

HTML example:

    <div class="btn btn-pr">

PHP example:

    <?php
    echo "<div class='btn btn-pr'>";

The extension will automatically suggest matching Bootstrap 5 classes.


## License

MIT License 

[Pirulug]("https://github.com/pirulug")

## Contributing

Issues and pull requests are welcome.

Repository:
https://github.com/pirulug/bootstrap5-intellisense
