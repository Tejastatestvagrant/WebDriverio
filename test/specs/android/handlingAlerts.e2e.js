

describe("acceptanddismiss alerts" ,()=>{
    it("accept " ,async()=>{

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
        await $("~OK Cancel dialog with a message").click();
        await driver.acceptAlert();
        await expect (await $("//*[@resource_id='android:id/alertTitle']")).not.toExist();

//check
    })

})
