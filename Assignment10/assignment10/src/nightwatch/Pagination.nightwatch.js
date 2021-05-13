module.exports = {
    'Test next button': function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .assert.visible('#next')
            .assert.containsText('#current', '1 / 10')
            .click('#next')
            .assert.containsText('#current', '2 / 10')
            .end();
    },
    'Test next button on last page disabled': function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .assert.visible('#next')
            .assert.containsText('#current', '1 / 10')
            .click('#next') // On page 2
            .click('#next') // On page 3
            .click('#next') // On page 4
            .click('#next') // On page 5
            .click('#next') // On page 6
            .click('#next') // On page 7
            .click('#next') // On page 8
            .click('#next') // On page 9
            .click('#next') // On page 10
            .assert.containsText('#current', '10 / 10')
            .click('#next')
            .assert.containsText('#current', '10 / 10')
            .assert.attributeEquals('#next', 'disabled', 'true')
            .end();
    },
    'Test previous button on first page disabled': function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .assert.visible('#previous')
            .assert.containsText('#current', '1 / 10')
            .click('#previous')
            .assert.containsText('#current', '1 / 10')
            .assert.attributeEquals('#previous', 'disabled', 'true')
            .end();
    },
    'Test previous button': function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .assert.visible('#previous')
            .assert.visible('#next')
            .click('#next')
            .assert.containsText('#current', '2 / 10')
            .click('#previous')
            .assert.containsText('#current', '1 / 10')
            .end();
    },
};
