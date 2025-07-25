describe("Sauce Demo End-to-End Test", () => {
  it("should complete purchase flow with validations", () => {
    //Login
    cy.visit("https://www.saucedemo.com");
    cy.title().should("eq", "Swag Labs");
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    //Sort and add items
    cy.get('[data-test="product-sort-container"]').select('Price (low to high)');
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();

    //Go to cart and verify items
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.contains('Sauce Labs Bolt T-Shirt').should('exist');
    cy.contains('Sauce Labs Backpack').should('exist');

    //Checkout form validations
    cy.get('#checkout').click();
    
    //Test First Name required
    cy.get('#last-name').type("McArther");
    cy.get('#postal-code').type("1009");
    cy.get('#continue').click();
    cy.contains('Error: First Name is required').should('exist');
    
    //Test Last Name required
    cy.get('#first-name').type("John");
    cy.get('#last-name').clear();
    cy.get('#continue').click();
    cy.contains('Error: Last Name is required').should('exist');
    
    //Test Postal Code required
    cy.get('#last-name').type("McArther");
    cy.get('#postal-code').clear();
    cy.get('#continue').click();
    cy.contains('Error: Postal Code is required').should('exist');

    //Complete checkout and verify items
    cy.get('#postal-code').type("1009");
    cy.get('#continue').click();
    cy.contains('Sauce Labs Backpack').should('exist');
    cy.contains('Sauce Labs Bolt T-Shirt').should('exist');

    //Verify tax and total calculations
    cy.contains('Item total: $').invoke('text').then((text) => {
      const itemTotal = parseFloat(text.replace('Item total: $', ''));
      const expectedTax = (itemTotal * 0.08).toFixed(2);
      const expectedTotal = (itemTotal + parseFloat(expectedTax)).toFixed(2);
      
    cy.contains(`Tax: $${expectedTax}`).should('exist');
    cy.contains(`Total: $${expectedTotal}`).should('exist');
//Finish the checkout and check that the cart is empty
    cy.get('#finish').click();
    cy.contains('Checkout: Complete!').should('exist');
    cy.get('#back-to-products').click();

    });
  });
});
