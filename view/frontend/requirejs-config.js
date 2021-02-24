var config = {
    map: {
        '*': {
            'Magento_Checkout/template/minicart/item/default.html':
                'Minicart_IncrementDecrement/template/minicart/item/default.html'
            }
    },
    config: {
         mixins: {
             'Magento_Checkout/js/view/minicart': {
                'Minicart_IncrementDecrement/js/view/minicart-mixin': true
             },
             'Magento_Checkout/js/sidebar': {
                'Minicart_IncrementDecrement/js/sidebar-mixin': true
             }
         }
     }
};