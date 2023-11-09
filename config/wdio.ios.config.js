const config = require("./wdio.conf")
const path =require('path');
const temp= path.join(process.cwd(),"/test/specs/ios/**/*.js")
config.specs = [ temp ]

config.capabilities = [
    {
      // capabilities for local Appium web tests on an Android Emulator
      "appium:platformName": "ios",
      "appium:automationName": "XCUITest",
      "appium:deviceName": "iPhone 14 Pro Max",
      "appium:platformVersion": "16.4",
      "appium:app": path.join(process.cwd(), "/app/ios/wdioNativeDemoApp.app"),
      "appium:autoGrantPermissions": "true"
    }
  ];
  config.services = [
    [
      "appium",
      {
        args: {
          address: "localhost",
          port: 4724,
          relaxedSecurity: true
        },
        logPath: "./"
      }
    ]
  ];
  
  exports.config = config;
  