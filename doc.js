/* eslint-disable */
const Vuedoc = require('@vuedoc/md')
const TypePugLoader = require('@vuedoc/parser/loader/pug')

const options = {
  output: 'docs/',
  filenames: [
    'src/app.vue',
    'src/components/input-number/InputNumber.vue'
  ],
  parsing: {
    features: ['name', 'description', 'keywords', 'slots', 'model', 'props', 'events', 'methods'],
    loaders: [
      Vuedoc.Parser.Loader.extend('pug', TypePugLoader)
    ]
  }
}

Vuedoc.md(options)
  .then((document) => console.log(document))
  .catch((err) => console.error(err))