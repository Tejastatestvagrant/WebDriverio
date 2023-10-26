const page =require("../pageobjects/page");
const ProductList =require("../pageobjects/ProductList.page")

class ShoppingCart extends page {
  

   
    open() {
       return  super.open();
    }

    get shoppingCartBtn()
    {
        return $("//*[@href= 'https://magento.softwaretestingboard.com/checkout/cart/']")
    }
  
    get CartCount()
    {
        return $("/html/body/div[2]/header/div[2]/div[1]/a/span[2]");
    }

    async addToCart()
    {
        await ProductList.searchProduct("jacket");
        await $("//*[@class= 'product-item-info']").click();
        await $("#option-label-size-143-item-166").click();
        await $("#option-label-color-93-item-52").click();
        await $("#product-addtocart-button").click();
        await this.CartCount.waitForEnabled();
    }

  async isCartCountDisplayed(product)
  {
   
    await this.addToCart(product);
   

  }

  async goToCart()
  {
    await this.shoppingCartBtn.click();
    await $('//*[@id="minicart-content-wrapper"]/div[2]/div[5]/div/a/span').waitForEnabled();
    await $('//*[@id="minicart-content-wrapper"]/div[2]/div[5]/div/a/span').click();

  }
   


}



module.exports = new ShoppingCart();
