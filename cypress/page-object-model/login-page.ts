export class Login {

    loginAndClick(userName: string, password: string) {

        cy.get('#user-name').type(userName);
        cy.get('[data-test="password"]').type(password);

        cy.get('#login-button').click();

    }

}