import adding from '../../fixtures/pageobjects/adding.js';
describe('POM Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('/');
   })
   
    it('Verify Login successful', () => {
     cy.login('nbsahiltest@gmail.com', 'Sdogra@1234');
     
const loginObj = new adding();
loginObj.clickDropdown();
loginObj.clickSetting();
loginObj.verifyMysetting();
loginObj.verifyMysetting()
loginObj.verifyfullname()
loginObj.verifyemail()
loginObj.verifypasswordtext()
loginObj.verifyauthenticate()
loginObj.verifytextmessage()
loginObj.verifyauthapp()
loginObj.verifysavechanges()
loginObj.clickfullname()
loginObj.verifycolorfullname()
loginObj.verifyhighfullname()
loginObj.enterfullname()
loginObj.verifycolorfullname()
loginObj.clicksavechanges()
loginObj.verifyupdatename()
loginObj.clicksaved()
loginObj.clickauth()
loginObj.verifypasstext()
loginObj.verifyconfirmpass()
loginObj.verifyclose()
loginObj.clickedittext()
loginObj.verifyMyshow()
loginObj.verifyhide()
loginObj.oncleartext()
loginObj.clickconfirmpass()
loginObj.verifyreqtext()
loginObj.clickclose()




})
})