export class Shopping {

    selectBackpackAndClickShoppingCart() {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();

    }

}