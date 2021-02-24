/**
 * Mixing Javascript of Magento_Checkout/js/sidebar
 * Copyright © Salecto, Inc. All rights reserved.
 */
define(['jquery'], function ($) {
    'use strict';

    var modalWidgetMixin = {
        
        _initContent: function () {

            var self = this,
                events = {};

            /**
             * @param {jQuery.Event} event
             */
            events['click ' + this.options.button.increacseqty] = function (event) {
                self._increaseItemQty($(event.currentTarget));
            };

            /**
             * @param {jQuery.Event} event
             */
            events['click ' + this.options.button.decreaseqty] = function (event) {
                self._decreaseItemQty($(event.currentTarget));
            };

            this._on(this.element, events);
            return this._super();
        },

        /**
         * @param {HTMLElement} elem
         * @private
         */
        _increaseItemQty: function (elem) {
            var itemId = elem.data('cart-item');
            var obj = $('#cart-item-' + itemId + '-qty');
            var currentQty = obj.val();
            var newAdd = parseInt(currentQty) + parseInt(1);
            obj.val(newAdd);
            obj.attr('data-item-qty', newAdd);
            $('#update-cart-item-' + itemId).show('fade', 300);  
        },

        /**
         * @param {HTMLElement} elem
         * @private
         */
        _decreaseItemQty: function (elem) {
            var itemId = elem.data('cart-item');
            var obj = $('#cart-item-' + itemId + '-qty');
            var currentQty = obj.val();
            if (currentQty > 1) {
                var newAdd = parseInt(currentQty) - parseInt(1);
                obj.val(newAdd);
                obj.attr('data-item-qty', newAdd);
                $('#update-cart-item-' + itemId).show('fade', 300);
            }
        },
        
    };

    return function (targetWidget) {
        // Example how to extend a widget by mixin object
        $.widget('mage.sidebar', targetWidget, modalWidgetMixin); // the widget alias should be like for the target widget

        return $.mage.sidebar; //  the widget by parent alias should be returned
    };
});
