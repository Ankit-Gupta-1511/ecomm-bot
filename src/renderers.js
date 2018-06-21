module.exports = {
    'ecomm-choice-questions': data => ({
        text: data.question,
        quick_replies: data.product_choices.map(choice => `<${choice.payload}> ${choice.text}`),
        // typing: data.typing || '2s'
      }),
    'catalog': data => ({

    }),
    'carouselOfProducts': data => {
        console.log(data.products)
        return {
        
            type: 'carousel',
            typing: '1s',
            text: 'List of Available Products',
            settings: {
              // This specifies number of slides to be shown depending on resolution
              responsive: [
                { breakpoint: 400, settings: { slidesToShow: 1 } },
                { breakpoint: 750, settings: { slidesToShow: 3 } }
              ]
            },
            'web-style': { direction: 'rtl' }, // This allows to add custom CSS-styling
            // elements: data.products
            elements: data.products
    }}
}
