'use strict'

const PhpRuntime = require('php-runtime')
const merge = require('merge-deep')
const StreamPhpRuntime = require('php-runtime/src/stream')

exports.name = 'php-runtime'
// PHP Runtime does not quite qualify as straight-up PHP.
// exports.inputFormats = ['php-runtime', 'php']
exports.outputFormat = 'html'

const defaults = {
  core: {
    config: {
      extensions: [
        'php-core'
      ]
    }
  }
}

exports.render = function (str, options, locals) {
  const php = new PhpRuntime(merge(defaults, options))
  let stdout = ''
  let stderr = ''

  // Mock the output and error reporting..
  php.stdout = new StreamPhpRuntime(data => {
    stdout += data
  })
  php.stderr = new StreamPhpRuntime(data => {
    stderr += data
  })

  // TODO: Fix local variable usage.
  for (const name in locals || {}) {
    if (locals[name]) {
      php.context.variable.items[name] = locals[name]
      php.context.globals[name] = locals[name]
    }
  }

  php.eval(str)

  if (stderr) {
    throw new Error(stderr)
  }

  return stdout
}
