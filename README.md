# unique-name.macro


[![Travis (.org)](https://img.shields.io/travis/huchenme/unique-name.macro.svg?style=flat-square)](https://travis-ci.org/huchenme/unique-name.macro)
[![Babel Macro](https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat-square)](https://github.com/kentcdodds/babel-plugin-macros)

This is a [babel-macros](https://github.com/kentcdodds/babel-macros) to generate unique name.

## Usage

With babel-macros and this package installed, you can use it like this.

```javascript
import uniqueName from 'unique-name.macro'

const disabledClass = uniqueName() // or const disabledClass = uniqueName('disabledClass')
```

The above snippet will be compiled in build time:

```javascript
import uniqueName from 'unique-classname.macro'

const disabledClass = 'disabledClass-1u6x1nq'
```

## Note

The unique name is based on file path and variable name, it will remain the same as long as you don't move the file or rename the variable.
