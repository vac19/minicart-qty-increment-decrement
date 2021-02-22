# Catalog/Ko

KnockOut.js practice module. 
Appends `Increment and Decrement` links around Qty Input at minicart popup.
Upon clicking any of button/links update button shows individualy.

## Composer install

- `composer config repositories.reponame vcs https://github.com/vac19/CatalogKO`
- `composer require salecto1/magento2-catalog-ko`

## Composer uninstall

- `composer remove salecto1/magento2-catalog-ko`

## Preview will be added

![timer-in-categoryPage](/readme-images/Timer-at-categoryPage.png "timer-in-categoryPage")


## Settings

- Option `No options` - Practice Module

## Known issues

- **Issues will be here .. Hopfuly not**\
  No issues

## Developer informations
- vashishtha chauhan / Salecto

### Install module
1. Run `composer require salecto1/magento2-catalog-ko`
2. Run `php bin/magento setup:upgrade`
3. Run `php bin/magento setup:di:compile`
4. Run `php bin/magento s:s:d da_DK en_US`
5. Run `php bin/magento c:c`

### Uninstall module
1. Run `composer remove salecto1/magento2-catalog-ko`
2. Run `php bin/magento setup:di:compile`
3. Run `php bin/magento s:s:d da_DK en_US`
4. Run `php bin/magento c:c`

# Additional developer notes
## How to:

# Step 1: 

`vendor/magento/module-checkout/view/frontend/web/template/minicart/item/default.html`

<div class="details-qty qty">
    <label class="label" data-bind="i18n: 'Qty', attr: {
           for: 'cart-item-'+item_id+'-qty'}"></label>
    <a href="#" data-bind="attr: {'data-cart-item': item_id}"
       class="action decrease-qty">
        <span>-</span>
    </a>
    <input data-bind="attr: {
           id: 'cart-item-'+item_id+'-qty',
           'data-cart-item': item_id,
           'data-item-qty': qty,
           'data-cart-item-id': product_sku
           }, value: qty"
           type="number"
           size="4"
           class="item-qty cart-item-qty"
           maxlength="12"/>
    <a href="#" data-bind="attr: {'data-cart-item': item_id}"
       class="action increase-qty">
        <span>+</span>
    </a>
    <button data-bind="attr: {
           id: 'update-cart-item-'+item_id,
           'data-cart-item': item_id,
           title: $t('Update')
           }"
            class="update-cart-item"
            style="display: none">
        <span data-bind="i18n: 'Update'"></span>
    </button>
</div>
