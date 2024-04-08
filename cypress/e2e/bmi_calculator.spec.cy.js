describe('BMI Calculator', () => {
    it('Calculates BMI and displays result', () => {
      // Visit the BMI Calculator page
      cy.visit('/');
  
      // Enter height and weight values
      cy.get('#heightFeet').type('5');
      cy.get('#heightInches').type('7');
      cy.get('#weightPounds').type('150');
  
      // Submit the form
      cy.get('#bmiForm').submit();
  
      // Verify the calculated BMI value
      cy.get('#result').contains('Your BMI value: 24.06');
  
      // Verify the BMI category
      cy.get('#result').contains('BMI Category: Normal weight');
    });
  
    it('Handles invalid input gracefully', () => {
      // Visit the BMI Calculator page
      cy.visit('/');
  
      // Enter invalid input (non-numeric)
      cy.get('#heightFeet').type('abc');
      cy.get('#heightInches').type('def');
      cy.get('#weightPounds').type('xyz');
  
      // Submit the form
      cy.get('#bmiForm').submit();
  
      // Verify error message is displayed
      cy.get('#result').contains('Your BMI value: NaN');
      cy.get('#result').contains('BMI Category: NaN');
    });
  });
  