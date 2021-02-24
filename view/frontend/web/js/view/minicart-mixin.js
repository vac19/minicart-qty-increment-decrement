/**
 * Mixing Javascript of Magento_Checkout/js/view/minicart
 * Copyright © Salecto, Inc. All rights reserved.
 */
define(['jquery'],function ($) {
    'use strict';
    var mixin = {
        /**
         * @param {Column} elem
         */
        initSidebar: function () {
            var miniCart = $('[data-block=\'minicart\']');
            miniCart.sidebar({
                'button': {
                    'checkout': '#top-cart-btn-checkout',
                    'remove': '#mini-cart a.action.delete',
                    'increacseqty':'#mini-cart a.action.increase-qty',
                    'decreaseqty':'#mini-cart a.action.decrease-qty',
                    'close': '#btn-minicart-close'
                },
                'item': {
                    'qty': ':input.cart-item-qty',
                    'button': ':button.update-cart-item'
                }
            });
        }
    };
    return function (minicart) {
        return minicart.extend(mixin);
    };
});
