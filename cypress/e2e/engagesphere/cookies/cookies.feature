Feature: Cookies

    Scenario: Accept Coookies
        Given I access the app without any cookies set
        And I see the cookies consent banner 
        When I click the acept button 
        Then the cookies banner is closed 
        And the cookieConsent is set with the value accepted

