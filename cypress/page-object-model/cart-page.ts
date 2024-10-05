export class Cart {

    clickCheckOutButton() {
        cy.get('[data-test="checkout"]').click();
    }

}