// cypress/integration/button.spec.js

describe('Angular Button Component Test', () => {
    it('Clicking the Angular button triggers the onClick event', () => {
      // Visit your Angular application or the specific page where the Angular button is rendered
      cy.visit('/path/to/your/angular-app');
  
      // Interact with the Angular button
      cy.get('sandbox-button').click();
  
      // Add assertions based on your Angular application logic
      // For example, you might want to check if a specific action happened after clicking the Angular button
      // You can use Cypress commands like cy.contains(), cy.get(), etc.
  
      // Example assertion: Check if a specific element appears after clicking the Angular button
      cy.get('.success-message').should('exist');
    });
  
    it('Mouse entering the Angular button triggers the onMouseenter event', () => {
      // Visit your Angular application or the specific page where the Angular button is rendered
      cy.visit('/path/to/your/angular-app');
  
      // Interact with the Angular button
      cy.get('sandbox-button').trigger('mouseenter');
  
      // Add assertions based on your Angular application logic
      // For example, you might want to check if a specific action happened after mouse entering the Angular button
      // You can use Cypress commands like cy.contains(), cy.get(), etc.
  
      // Example assertion: Check if a specific element appears after mouse entering the Angular button
      cy.get('.hover-message').should('exist');
    });
  
  
  });
  