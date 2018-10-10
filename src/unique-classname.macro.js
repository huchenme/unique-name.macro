import { createMacro } from 'babel-plugin-macros'
import path from 'path'
import hash from './hash'

function uniqueClassnameMacro({ references, state, babel }) {
  const { types: t } = babel
  const filePath = state.file.opts.filename
  const fileName = path.basename(filePath)

  references.default.forEach(referencePath => {
    const parentPath = referencePath.findParent(t.isCallExpression)
    let variableName = referencePath.findParent(t.isVariableDeclarator).node.id
      .name
    if (
      parentPath.node.arguments.length > 0 &&
      parentPath.node.arguments[0] !== ''
    ) {
      variableName = parentPath.node.arguments[0].value
    }
    const newName = `${fileName}-${variableName}`
    const newUid = referencePath.scope.generateUidIdentifier(newName).name
    parentPath.replaceWith(t.stringLiteral(`${variableName}-${hash(newUid)}`))
  })
}

export default createMacro(uniqueClassnameMacro)
