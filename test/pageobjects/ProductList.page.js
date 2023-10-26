const page =require("../pageobjects/page")

class ProductListPage extends page {
    get productListItems() {
        return $$('.product-item');
    }

    get searchbar()
    {
        return $("#search");
    }

    open() {
       return  super.open();
    }

    get catagory()
    {
        return ["What's New" , 'Women' , 'Men'  , 'Gear','Training' , 'Sale']
        
    }

    get producInfo()
    {
        return $("//*[@class= 'product-item-info']");
    }
   

    getProductNav(i)
    {
      return $(`#ui-id-${i}`);
    }

    async getProductLookUp()
    {
        let product = await $$("//*[@id='maincontent']/div[4]/div[2]/div[2]/div");
        for(let Pname of product)
        {
           console.log( await Pname.getText());
        }
    }


    async searchProduct(product)
    {
        await this.searchbar.setValue(product);
  
        await browser.keys('\uE007');
    }
}



module.exports = new ProductListPage();
