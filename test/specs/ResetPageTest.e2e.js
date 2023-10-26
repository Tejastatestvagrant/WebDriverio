const { expect } = require("@wdio/globals");
const ResetPass = require("../pageobjects/ResetPassword.page");

describe("My Login application", () => {

   beforeEach(async()=>{
        await ResetPass.open();
     
   })
  afterEach(async()=>{
    await browser.closeWindow();
    await browser.reloadSession();
  })

  it(" resetpassword100: click on reset password and checking message", async () => {
   
    let email="tejastejas5657@gmail.com"
    await ResetPass.reset(email);
    await  ResetPass.message.waitForEnabled();
    console.table(await ResetPass.message.getText());
    expect(await ResetPass.message.getText()).toHaveTextContaining(email);

  });

  it 

  
 
});
