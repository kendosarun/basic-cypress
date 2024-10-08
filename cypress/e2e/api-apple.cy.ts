describe('Website Apple', () => {

  const endpoint: string = 'https://www.apple.com/search-services/suggestions/defaultlinks/?src=globalnav&locale=th_TH';
  const jsonFile: string = 'response-body-apple.json';

    it('GET header apple website', () => {

      cy.visit('https://www.apple.com/th/');

      cy.request('GET', `${endpoint}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.results[0].sectionResults[0]).to.have.property('label', 'ค้นหาร้าน');
        expect(response.body.results[0].sectionResults[0]).to.have.property('url', 'https://www.apple.com/th/retail/');
      });

    });

    it.only('Expected response body with json file', () => {

      cy.visit('https://www.apple.com/th/');

      cy.fixture(jsonFile).then((expectedResponseBody) => {

        cy.request('GET', `${endpoint}`).then((response) => {
            expect(response.status).to.eq(200);

            // Remove the 'id' field from both actual and expected responses with `lodash` lib
            const actualResponseWithoutId = Cypress._.omit(response.body, 'id');
            const expectedResponseWithoutId = Cypress._.omit(expectedResponseBody, 'id');

            expect(actualResponseWithoutId).to.deep.equal(expectedResponseWithoutId);
        });
    });

    });



});