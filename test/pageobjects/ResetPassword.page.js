const page =require('./page')


class ResetPassword extends page
{
    
    get url() {
        return "https://magento.softwaretestingboard.com/";
      }
    
      get signup()
      {
        return $("//a[@href=  'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/']");
      }

      get forgetBtn()
      {
        return $("//*[@href= 'https://magento.softwaretestingboard.com/customer/account/forgotpassword/']");
      }


      get inputEmail() {
        return $("#email_address");
      }

    get resetBtn()
    {
        return $("//*[@class= 'action submit primary']");
    }

    get message()
    {
      
        return $('//*[@id="maincontent"]/div[2]/div[2]/div/div/div');
    }

    async reset(email)
    {
        await this.signup.click();
        await this.forgetBtn.click();;
        await this.inputEmail.setValue(email);
        await this.resetBtn.click();
        
    }


    open(){
        return super.open();
    }

}

module.exports=new ResetPassword();