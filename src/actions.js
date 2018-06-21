const _ = require("lodash")
const path = require("path")

module.exports = { 
  showCatalog : async (state, event, args) => {
    subCategory = event.text.toLowerCase();
    console.log(`sub/category is ${subCategory}`)
    var directory = path.resolve(__dirname);
    
    var data = require("fs").readFileSync(directory + "/content_data/catalog.json");
    var data = JSON.parse(data);
    var catalog = _.find(data, {'formData':{'subCategory': subCategory}});
    
    var products = catalog.formData.products.map(product => ({ title: product.name,
      subtitle: product.description, 
      picture:product.image,
      buttons:[{ payload: 'TRIGGER_ACTION', title: 'Purchase' }]
    }));
    console.log(products)
    event.reply('#carouselOfProducts', { products: products })

    return { ...state }
  }
}
