Feature: Signature Preview
    Scenario: shows a preview of the signature after signing it
        Given I access the app
        When I type "Johanna" in the signature field
        Then I see a preview of my signature in Italic letters. ex.: _"Johanna"_