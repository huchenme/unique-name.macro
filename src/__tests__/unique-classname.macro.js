import pluginTester from 'babel-plugin-tester'
import plugin from 'babel-plugin-macros'

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: { filename: __filename },
  tests: [
    `
      import className from '../unique-classname.macro'

      const abc = className()
      const def = className()
    `
  ]
})

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: { filename: __filename },
  tests: [
    `
      import className from '../unique-classname.macro'

      const abc = className()
      const def = className('something')
    `
  ]
})

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: { filename: __filename },
  tests: [
    `
      import className from '../unique-classname.macro'

      const abc = className('something')
      const def = className('something')
    `
  ]
})
