import third from '../../fixtures/pageobjects/third';
describe('POM Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('/');
   })
   
    it('Verify Login successful', () => {
     cy.login('nbsahiltest@gmail.com', 'Sdogra@1234');
     
const loginObj = new third();
loginObj.clickDropdown();
// loginObj.clicklayout(); 
loginObj.verifysimple();
loginObj.verifyclean();
loginObj.verifymodern();
loginObj.verifyclose();
loginObj.clickclean();
loginObj.verifycompact();
loginObj.verifydefault();
loginObj.verifylarge();
loginObj.clickdone(); 
loginObj.clickdropdown();
loginObj.clicklay();
loginObj.clickmoder();
loginObj.clicklarge();
loginObj.clickdone();
loginObj.clickdropdown();
loginObj.clicktoggle();


})
})

// npx cypress run --spec .\cypress\e2e\tests\verifythird.cy.js
// npx cypress run --browser chrome --spec cypress/e2e/tests/verifythird.cy.js
