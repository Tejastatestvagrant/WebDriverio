const ShoppingCart = require("../pageobjects/shoppingCart.page");
const ShippingPage = require("../pageobjects/ShippingPage.page");

describe("Test on Shopping cart ", () => {
  //     beforeEach(async()=>{
  //         await ShoppingCart.open();

  //    })
  //     afterEach(async()=>{
  //     await browser.closeWindow();
  //     await browser.reloadSession();
  //   })

  it(" shopping100: check if the product is adding to cart ", async () => {
    await ShoppingCart.open();
    await ShoppingCart.addToCart("jacket");
    expect(await ShoppingCart.CartCount.isEnabled()).toEqual(true);
    await browser.pause(3000);
  });

  it(" shopping101: Going to cart and checking product  ", async () => {
    await ShoppingCart.goToCart();
    expect(
      await $('//*[@id="maincontent"]/div[1]/h1/span').isEnabled()
    ).toEqual(true);
  });

  it(" shopping102: Checkout Fill the details for checkout valid", async () => {
    await $(
      '//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button'
    ).waitForClickable();
    await $(
      '//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button'
    ).click();

    await ShippingPage.enterDetailsToShip();
    expect(
      await $(
        '//*[@id="checkout-payment-method-load"]/div/div/div[2]/div[2]/div[2]/div/div[2]'
      ).getText()
    ).toHaveTextContaining("Tejas");
  });

  //don't use when u run normal if you want skip the shopping101 and shopping104

  it.skip(
    " shopping103: Checkout Fill the details for checkout invalid",
    async () => {
      await $(
        '//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button'
      ).waitForClickable();
      await $(
        '//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button'
      ).click();
      // here go and enter the invalid details it not take u to place a order
      await ShippingPage.enterDetailsToShip();
      expect(await browser.getUrl()).toEqual(
        "https://magento.softwaretestingboard.com/checkout/#shipping"
      );
    }
  );

  it("shopping104 placing order and checking for thank you message", async () => {
    await $(
      '//*[@id="checkout-payment-method-load"]/div/div/div[2]/div[2]/div[4]/div/button'
    ).click();
    await $('//*[@id="maincontent"]/div[1]/h1/span').waitForDisplayed();
    let message = await $("/html/body/div[2]/main/div[1]/h1/span").getText();
    expect(message).toEqual("Thank you for your purchase!");
  });
});
