import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import PurchaseOrderPage from '../../Pages/purchaseOrderPage'
import "cypress-real-events"

const purchaseOrder = new PurchaseOrderPage ()


Given ('open home Page' , () => {
    cy.visit ('/')
    cy.get('.cw > .cls').click();
})

When ('hover on supermarket button' , () =>{
    cy.wait(3000)
   purchaseOrder.Supermarket().realHover()
    cy.wait(3000)
    })

And ('click on bakery button' , () =>{
    purchaseOrder.bakery().click({force:true})
})

And ('select the products' , ()=> {
    
///Add first product
    purchaseOrder.first_product().realHover()
    cy.wait(3000)
    purchaseOrder.add_to_cart1().first().click({scrollBehavior:false})

    purchaseOrder.confirmationmsg().should ('have.text' , 'Product added successfully')

///Add second product
    purchaseOrder.second_product().realHover()
    cy.wait(3000)
    purchaseOrder.add_to_cart2().click({scrollBehavior:false})

    purchaseOrder.confirmationmsg().should ('have.text' , 'Product added successfully')
    cy.wait(3000)
})

Then ('the subtotal is calculated correctly' , ()=>{
    purchaseOrder.cart().click({force:true})
    cy.wait(3000)

    const price1 = purchaseOrder.product1price().first().invoke('text').then((text1) => {
        var price1 = text1.replace('EGP ','')
        cy.log(text1);
        cy.log (price1)
        
        var amount1 = parseFloat(price1);

        ///const price1 = parseFloat(text1.match(/[\d,.]+/)[0].replace(/,/g, '').trim());

        ///const price1 = parseFloat(text1.trim());
        ///const originalprice1 = text1.replace('EGP', '').trim();
        ///const price1 = parseFloat(originalprice1);
        
        ///cy.log(text1.match(/[0-9.]+/)[0]);  
        ///cy.log('Full Text 1:', text1);  


    const price2 = purchaseOrder.product2price().eq(1).invoke('text').then((text2) => {
        var price2 = text2.replace('EGP ','')
        cy.log(text2);
        cy.log (price2)
        
        var amount2 = parseFloat(price2);

        ///const Price2 = parseFloat(text2.match(/[\d,.]+/)[0].replace(/,/g, '').trim());

        ///const price2 = parseFloat(text2.trim());
        ///const originalprice2 = text2.replace('EGP', '').trim();
        ///const price2 = parseFloat(originalprice2);
        ///cy.log(price2);

        ///cy.log(text2.match(/[0-9.]+/)[0]);
        ///cy.log('Full Text 2:', text2);


    ///if (!isNaN(price1) && !isNaN(price2)) {

        ///cy.log(subtotal); // Output: 16.98
      ///} else {
        ///cy.log("Invalid price values");
      ///}

    const expectedSum = cy.get ('[class="-fs20 -plm -tar"]').invoke('text').then((text3) => {
        var Price3 = text3.replace('EGP ','')
        cy.log(text3);
        cy.log (Price3)

        var amount3 = parseFloat(Price3);

    var amount4 = amount1 + amount2;


    expect(amount3 ).to.be.eql(amount4)

        ///const subtotal = price1 + price2;
    ///cy.wrap(subtotal).should('eq', expectedSum)
    
})

})
})

    })