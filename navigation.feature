Feature: Navigating a website

  Scenario: Searching for a doc in a website
    Given I am in WebdriverIO site
    When I search for Visual Testing
    Then I will see Documentation on Visual Testing
