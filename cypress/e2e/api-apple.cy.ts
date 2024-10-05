describe('Website Apple', () => {

  const endpoint: string = 'https://www.apple.com/search-services/suggestions/defaultlinks/?src=globalnav&locale=th_TH';

  it('GET header apple website', () => {

    cy.visit('https://www.apple.com/th/');

    cy.request('GET', `${endpoint}`).then((response) => {

      expect(response.status).to.eq(200);

    expect(response.body.results[0].sectionResults[0]).to.have.property('label', 'ค้นหาร้าน');
    expect(response.body.results[0].sectionResults[0]).to.have.property('url', 'https://www.apple.com/th/retail/');

    


    });

  });

});