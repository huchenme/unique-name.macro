# unique-classname.macro

[![Build Status](https://travis-ci.org/huchenme/unique-classname.macro.svg?branch=master)](https://travis-ci.org/huchenme/unique-classname.macro)

This is a [babel-macros](https://github.com/kentcdodds/babel-macros) to generate unique className for css-in-js.

If you are coming from CSS modules and want to convert a large code base to `emotion`, sometimes you might have some empty classNames added to the container div as state of the component.

For example. You might have React component like this

```javascript
import classNames from 'classnames'
import styles from './styles.css'

const MyComponent = ({ isDisabled }) => (
  <div
    className={classNames(
      styles.container,
      isDisabled ? styles.isDisabled : false
    )}
  >
    <div className={styles.content}>Content</div>
  </div>
)
```

and your styles looks like this:

```css
.container {
  background: white;
}

.content {
  padding: 10px;

  .disabled & {
    cursor: not-allowed;
    color: '#777';
  }
}
```

With `unique-classname.macro`, it will help you generate a hash from both filename and variable name.

## Usage

With babel-macros and this package installed, you can use it like this.

```javascript
import className from 'unique-classname.macro'
import { css } from 'emotion'

const disabledClass = className() // or const disabled = className('disabled')

const containerClass = css`
  background: white;
`

const contentClass = css`
  padding: 10px;

  .${disabled} & {
    cursor: not-allowed;
    color: '#777';
  }
`

const MyComponent = ({ isDisabled }) => (
  <div
    className={classNames(containerClass, isDisabled ? disabledClass : false)}
  >
    <div className={contentClass}>Content</div>
  </div>
)
```

The above snippet will be compiled in build time:

```javascript
import className from 'unique-classname.macro'
import { css } from 'emotion'

const disabled = 'disabled-1u6x1nq'

const container = css`
  background: white;
`

const content = css`
  padding: 10px;

  .${disabled} & {
    cursor: not-allowed;
    color: '#777';
  }
`
```
