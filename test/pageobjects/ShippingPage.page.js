const page =require('./page')


class ShippingPage extends page
{

    get inputEmail()
    {
        return $("/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[1]/fieldset/div/div/input");
    }

    get  inputFirstname()
    {
      
        return $("/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[1]/div/input");
    }

    get  inputLastname()
    {
        return $("/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[2]/div/input");
    }
     
    get inputCompany()
    {
        return $("/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[3]/div/input");
    }

    get inputStreet()
    {
        return $("/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/fieldset/div/div[1]/div/input");
    }

    get inputCity()
    {
        return $("/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[4]/div/input");
    }
  

    get inputState()
    {
        return $("/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[5]/div/select");
    }

    get inputPincode()
    {
        return $("/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[7]/div/input");
    }

    get inputCountry()
    {
        return $("/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[8]/div/select");
    }
    
    get inputPhoneno()
    {
        return $("/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[9]/div/input");
    }

  get nextBtn()
  {
    return $("/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[2]/div/div[3]/form/div[3]/div/button")
  }
  async enterDetailsToShip()
  {
    await this.inputEmail.setValue("tejas5657@gmail.com");
    await this.inputFirstname.setValue("Tejas");
    await this.inputLastname.setValue("S");
    await this.inputCompany.setValue("Company");
    await this.inputStreet.setValue("5518 Alabama 22");
    await this.inputCity.setValue("Valley Grande");
    await this.inputState.selectByIndex(2);
    await this.inputPincode.setValue(36703);
    await this.inputCountry.selectByVisibleText("United States");
    await this.inputPhoneno.setValue("(334) 877-1118");
    await $("#label_method_bestway_tablerate").click();
    await this.nextBtn.click();
    
  }

}
module.exports=new ShippingPage();
