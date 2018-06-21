const _ = require('lodash')

module.exports = {
  id: 'ecomm-choice-questions',
  title: 'Ecomm Choice Questions',
  renderer: '#ecomm-choice-questions',

  jsonSchema: {
    title: 'Ecomm Choice Questions',
    description: 'Create a new Ecomm question to ask the user what they would like...',
    type: 'object',
    required: ['question', 'product_choices'],
    properties: {
      question: {
        type: 'string',
        title: 'Question'
      },
      product_choices:{
        type: 'array',
        items: {
            type: 'string',
            default: ''
        }
      },
    }
  },

  uiSchema: {
    product_choices: {
      'ui:options': {
        orderable: false
      }
    }
  },

  computeData: formData => {
    product_choices = formData.product_choices.map(i => ({ payload: i, text: i }))

    return {
      question: formData.question,
      product_choices: _.shuffle(product_choices)
    }
  },
  computePreviewText: formData => formData.question,
  computeMetadata: null
}
