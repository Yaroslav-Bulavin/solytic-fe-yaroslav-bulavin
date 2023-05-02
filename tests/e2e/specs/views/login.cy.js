describe('Login form', () => {
  it('submits login form with correct credentials', () => {
    cy.visit('http://localhost:8080/#/');

    cy.get('[name="username"]').type('user@name.com');
    cy.get('[name="password"]').type('passwd');
    cy.get('[type="submit"]').click();

    cy.wait(3000);

    cy.url().should('eq', 'http://localhost:8080/#/user-details');
    // Assert that the user ID is displayed
    cy.get('.details__text h2').eq(0).should('contain', 'User ID:');
    cy.get('.details__text h2').eq(0).should('contain', '123');

    // Assert that the user email is displayed
    cy.get('.details__text h2').eq(1).should('contain', 'User email:');
    cy.get('.details__text h2').eq(1).should('contain', 'user@name.com');

    // Assert that the user password is displayed
    cy.get('.details__text h2').eq(2).should('contain', 'User password:');
    cy.get('.details__text h2').eq(2).should('contain', 'passwd');
  });

  it('login form with incorrect credentials', () => {
    cy.visit('http://localhost:8080');

    cy.get('[name="username"]').type('wrong-email@gmail.com');
    cy.get('[name="password"]').type('wrong-password');
    cy.get('[type="submit"]').click();
  });
});
