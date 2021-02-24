/**
 * Copyright © Salecto, Inc. All rights reserved.
 */
define([
   'ko',
   'uiComponent',
   'mage/url',
   'mage/storage',
], function (ko, Component, urlBuilder,storage) {
   'use strict';
   var id=1;

   return Component.extend({

       defaults: {
           template: 'Ko_Prod/test',
       },

       productList: ko.observableArray([]),

       getProduct: function () {
           var self = this;
           var serviceUrl = urlBuilder.build('knockout/index/product?id='+id);
           id ++;
           return storage.post(
               serviceUrl,
               ''
           ).done(
               function (response) {
                   self.productList.push(JSON.parse(response));
               }
           ).fail(
               function (response) {
                   alert(response);
               }
           );
       },

   });
});