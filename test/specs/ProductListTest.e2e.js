const { expect } = require("@wdio/globals");
const ProductListPage = require("../pageobjects/ProductList.page");

describe("Product List Page", () => {
   beforeEach(async() => {
       await ProductListPage.open();
    });
    
    afterEach(async()=>{
        await browser.closeWindow();
        await browser.reloadSession();
      })


    it("ProductList100: should display a list of products catagory ", async() => {
        let i=3;
        let currentcat=[];
        while(i<9)
        {
            currentcat.push(await ProductListPage.getProductNav(i).getText());
            i++;
        }
        expect(currentcat).toEqual(ProductListPage.catagory)
    });

    it("ProductList101: Searching a project in search bar and check that given right one ", async() => {
        let product="shoes"
       await ProductListPage.searchProduct(product);
       
        expect(await $('//*[@id="maincontent"]/div[1]/h1/span').getText()).toHaveTextContaining(product);

        

    });

    it(" ProductList103: checking whether product as all info displayed", async() => {
       
         await ProductListPage.searchProduct("jacket");
         const productCard= await ProductListPage.producInfo;
         expect(await productCard.isDisplayed()).toEqual(true);

    });

    
});
