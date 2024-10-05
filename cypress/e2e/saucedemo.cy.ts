import { Cart } from "../page-object-model/cart-page";
import { CheckOutInformation } from "../page-object-model/checkout-information";
import { Common } from "../page-object-model/common";
import { Login } from "../page-object-model/login-page";
import { Shopping } from "../page-object-model/shopping-page";
import { SummaryOrder } from "../page-object-model/summary-order";

describe('Sauce demo', () => {

    const loginPage = new Login();
    const shoppingPage = new Shopping();
    const cartPage = new Cart();
    const checkOutInformationPage = new CheckOutInformation();
    const summaryOrderPage = new SummaryOrder();
    const assert = new Common();

    beforeEach(() => {
        cy.intercept('POST', 'https://events.backtrace.io/api/summed-events/submit?universe=*&token=*', {
            statusCode: 200,
            body: {}
        });

        cy.intercept('POST', 'https://events.backtrace.io/api/unique-events/submit?universe=UNIVERSE&token=TOKEN', {
            statusCode: 200,
            body: {}
        });
                            
        cy.visit('https://www.saucedemo.com/');

    });

    it('login with empty field username & password', () => {

        cy.get('#login-button').click();

        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');

    });

    it('login with invalid username & password', () => {

        loginPage.loginAndClick('qweqweqwe', 'ewqioewqewq');

        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');

    });

    it.only('login with standard_user username & password', () => {

        loginPage.loginAndClick('standard_user', 'secret_sauce');

        shoppingPage.selectBackpackAndClickShoppingCart();

        cartPage.clickCheckOutButton();

        checkOutInformationPage.inputInformationAndClick('1234', 'qwerty', '5555');

        summaryOrderPage.clickFinishButton();

        assert.expectResultWithFinalToOrder('Thank you for your order!');


    });

}); 