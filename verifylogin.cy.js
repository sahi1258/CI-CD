import login from '../../fixtures/pageobjects/login.js'
describe('POM Test', () => {

 beforeEach(function() {
   // executes prior each test within it block
   cy.visit('/');
})

 it('Verify Login successful', () => {
  cy.login('nbsahiltest@gmail.com', 'Sdogra@1234');
  
   const loginObj = new login();
 loginObj.clickDropdown();
 loginObj.clickSetting();
 loginObj.verifyMysetting(); 
 loginObj.verifyicon();   
 loginObj.clickProfileicon();
 loginObj.Verifyspacecolor();  
 loginObj.clickaddcolor();
 loginObj.Verifyspacecolormodal();
 loginObj.verifyaddcolor();
 loginObj.clickProfileicon();
 loginObj.clickAddcustomavatar();
 loginObj.Verifyimage();
 loginObj.Verifyupload();
 loginObj.clickupload();
 loginObj.Verifyimageupload();
 loginObj.Verifyclick();
 loginObj.Verifyimgupload();

   


 })
})