const {Given, When, Then} = require('@wdio/cucumber-framework')

Given(/^I am in WebdriverIO site$/, function() {
	browser.url('https://webdriver.io')
});

When(/^I search for Visual Testing$/, async() => {
	await $("//button[@class='DocSearch DocSearch-Button']").click()
	await $("//input[@class='DocSearch-Input']").setValue("Visual Testing")
	await $("//*[@id='docsearch-item-0']/a").click()
});

Then(/^I will see Documentation on Visual Testing$/, async() => {
	await expect("//h2[@id='what-can-it-do']")

});
