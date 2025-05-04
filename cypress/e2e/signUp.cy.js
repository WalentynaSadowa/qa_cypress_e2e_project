/// <reference types='cypress' />
/// <reference types='../support' />

describe('Sign in flow', () => {
  const email = 'testuser@example.com'; // lub dynamiczny: faker.internet.email()
  const password = 'Test1234!';

  it('should sign in with valid credentials', () => {
    signInPage.visit();
    signInPage.fillEmail(email);
    signInPage.fillPassword(password);
    signInPage.submit();

    cy.contains('Your Feed').should('be.visible');
  });
});

