Feature: Attempt sign in
    Scenario: Attempt to sign in
    Given i am in login page
    When I give my uname and pword
    And I click login
    Then I see message

