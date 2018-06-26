describe('Locations tests', function () {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('.app-login-form-email').type('hernandez.hs@gmail.com');
    cy.get('.app-login-form-password').type('123321');

    cy.wait(100);
    cy.get('.app-login-form-submit').click();
  });

  afterEach(() => {
    // cy.get('.ngx-menu-link-logout').click();
  });
  
  it('Debe ser capaz de crear una nueva ubicación al sentir la forma', function () {
    cy.get('.ngx-menu-link-location').click();
    cy.wait(100);
    cy.get('.ngx-menu-link-location-create').click();

    cy.get('.app-location-single-name').type('Localización 1');
    cy.get('.app-location-single-level').select('4');
    cy.get('.app-location-single-create').click();
    cy.wait(100);
  });

  // it('We must able to see devices list and created device as well.', function () {
  //   cy.get('.ngx-menu-link-device').click();
  //   cy.wait(100);
  //   cy.get('.ngx-menu-link-device-list').click();

  //   cy.get('.app-devices-table').find('tr').should('have.length', 11);
  // });
});
