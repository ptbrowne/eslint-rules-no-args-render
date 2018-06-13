# eslint-rules-no-args-render

This is a repository to test how to write a custom eslint rule.

This particular rule is to be used in a React app context.

It tests if your render methods are not used with arguments to ensure
compatibility of a codebase between Preact and React.

Preact allows to write render methods with `render(props, state)` but
React does not : you have to write `const props = this.props` inside
your render method. 

## How to test the rule

`yarn lint`
