[![Build Status](https://secure.travis-ci.org/ebow/bespoke-oridomi.png?branch=master)](https://travis-ci.org/ebow/bespoke-oridomi)

# bespoke-oridomi

Origami for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/ebow/bespoke-oridomi/master/dist/bespoke-oridomi.min.js
[max]: https://raw.github.com/ebow/bespoke-oridomi/master/dist/bespoke-oridomi.js

## Usage

First, include both `bespoke.js` and `bespoke-oridomi.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.horizontal.from('article', {
  oridomi: true
});
```

## Package managers

### Bower

```bash
$ bower install bespoke-oridomi
```

### npm

```bash
$ npm install bespoke-oridomi
```

The bespoke-oridomi npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-oridomi');
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
