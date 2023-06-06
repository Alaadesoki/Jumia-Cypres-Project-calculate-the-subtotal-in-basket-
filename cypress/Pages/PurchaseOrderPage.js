const Supermarket_button = 'Supermarket'
const bakery_button = '[href="/breads-bakery/"]'

const first_product = ':nth-child(6) > .core > .img-c > .img'  
const firstproduct_addtocart = ':nth-child(6) > .ft > .-df'  


const second_product = ':nth-child(4) > .core > .img-c > .img'  
const secondproduct_addtocart = ':nth-child(4) > .ft > .-df' 

const confirmationmsg =  '.cnt'

const cart =  '[href="/cart/"]'

const product1price = '.prc'
const product2price = '.prc' 

const subtotal1 = '.card > .-i-ctr > .-fs20'


class PurchaseOrderPage {
   Supermarket() {return cy.contains (Supermarket_button)}
   bakery() {return cy.get(bakery_button)}
   first_product() {return cy.get (first_product)}
   add_to_cart1 (){return cy.get(firstproduct_addtocart)}

   second_product() {return cy.get (second_product)}
   add_to_cart2 (){return cy.get(secondproduct_addtocart)}

   confirmationmsg (){return cy.get(confirmationmsg)}
   cart () {return cy.get (cart)}

   subtotal1 () {return cy.get (subtotal1)}
   product1price () {return cy.get (product1price)}

   product2price () {return cy.get (product2price)}
}

export default PurchaseOrderPage