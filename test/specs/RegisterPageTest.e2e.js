const { expect } = require("@wdio/globals");
const ResPage = require("../pageobjects/RegisterPage.page");

describe("My Login application", () => {

   beforeEach(async()=>{
        await ResPage.open();
     
   })
  afterEach(async()=>{
    await browser.closeWindow();
    await browser.reloadSession();
  })

  it(" register100: should login with valid credentials", async () => {
   
    await ResPage.register("ABCbe","Aere", "ABCwere@testvagrant.com", "ABCwere@TestVagrant","ABCwere@TestVagrant");
    await ResPage.message.waitForEnabled();
    await browser.pause(3000);
   expect(await ResPage.message).toHaveTextContaining("ABCbe");

   
  });

  it(" register101: should login with invalid credentials", async () => {
   
    await ResPage.register("ABC","A", "ABC@testvagrant.com", "ABC@TestVagrant","ABC@TestVagrant");
   
    

    await ResPage.errorMessage.waitForDisplayed();
    console.log(await ResPage.errorMessage.getText());
  expect(await ResPage.errorMessage.getText()).toHaveText("There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.")
  

   
  });


 
});
