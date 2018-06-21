const _ = require('lodash')

module.exports = {
  id: 'catalog',
  title: 'Catalog',
  renderer: '#catalog',

  jsonSchema: {
    title: 'Catalog',
    description: 'This Contains catalog for each category....',
    type: 'object',
    required: ['baseCategory', 'subCategory', 'products'],
    properties: {
      baseCategory: {
          type: 'string',
          title: 'Base Category'
      },
      subCategory: {
          type: 'string',
          title: 'Sub Category'
      },
      products: {
        type: 'array',
        title: 'Products',
        items: {
            type: 'object',
            required: ['name'],
            properties: {
                name: {
                    type: 'string',
                    title: 'Name of Product'
                },
                description:{
                    type: 'string',
                    title: "Description of product"
                },
                code: {
                    type: 'string',
                    default: ''
                },
                image: {
                    type: 'string',
                    title: "Product Image Url"
                }
            }
        }
      }
    }
  },

  uiSchema: {
    products: {
        image: {
            'ui:widget': 'uri'
        },
        description: {
            'ui:widget': 'textarea'
        }
    },

  },

  computeData: formData => {
    products = formData.products.map(i => ({ payload: i.code, text: i.name }))
    return {
      baseCategory: formData.baseCategory,
      subCategory: formData.subCategory,
      products: _.shuffle(products)
    }
  },
  computeMetadata: null
}
