const isReactMethod = methodNode => {
  const kls = methodNode.parent.parent
  if (kls.superClass) {
    const sp = kls.superClass
    if (sp.type == 'MemberExpression'
      && sp.object.name === 'React'
      && (
        sp.property.name == 'Component'
        || sp.property.name == 'PureComponent'
      ) 
    ) {
      return true
    }
    if (sp.type == 'Identifier' && (sp.name == 'Component' || sp.name == 'PureComponent)')) {
      return true
    }
  }
}

module.exports = {
  meta: {
    docs: {
      description: "disallow args in renders",
      category: "Possible Errors",
      recommended: true
    },
    schema: [] // no options
  },
  create: function(context) {
    // declare the state of the rule
    return {
      MethodDefinition: function(node) {
        if (isReactMethod(node) && node.key.name == 'render' && node.value.params.length > 0) {
          context.report({
              node: node,
              message: 'render method should not have any arguments. Use this.props and this.state.'
          })
        }
      }
    }
  }
}
