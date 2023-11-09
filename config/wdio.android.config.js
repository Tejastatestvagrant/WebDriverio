const config = require("./wdio.conf")
const path =require('path');
const temp= path.join(process.cwd(),"/test/specs/android/**/*.js")
config.specs = [ temp ]
config.capabilities= [{
    // capabilities for local Appium web tests on an Android Emulator
    'appium:platformName': 'Android',
    'appium:automationName': 'UIAutomator2',
    'appium:deviceName':'Pixel 3',
    'appium:platformVersion': '11.0',
    "appium:app": path.join(process.cwd(), "/app/android/ApiDemos-debug.apk"),
    'appium:autoGrantPermissions':true,
    'appium:newCommandTimeout': 240,
    'appium:fullReset': true,
}];
config.services = [["appium", {
    args: {
        address: "localhost",
        port: 4724,
        relaxedSecurity: true
    },
    logPath: './'
}]];
exports.config=config;