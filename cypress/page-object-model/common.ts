export class Common {

    expectResultWithFinalToOrder(wording: string) {
        cy.get('[data-test="complete-header"]').should('have.text', wording);
    }
}