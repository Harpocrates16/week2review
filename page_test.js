const {Given,When,Then} = require('@wdio/cucumber-framework')
const Login = require('../pageobjects/page_test.page')
Given(/^i am in login page$/, async() => {
	browser.url("https://www.saucedemo.com/v1/")
});

When(/^I give my uname and pword$/, async() => {
    await Login.login()
    
});

When(/^I click login$/, async() => {
    await browser.pause(5000)
	await Login.clickBtn()
   
});

Then(/^I see message$/, async() => {
	await browser.pause(5000)
	await $("//*[@id='item_4_img_link']/img").waitForExist({timeout:5000})
	expect("//*[@id='item_4_img_link']/img").toBePresent()
});
