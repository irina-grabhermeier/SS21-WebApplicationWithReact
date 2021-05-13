module.exports = {
    'Test overall website': function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .assert.visible('#previous')
            .assert.visible('#current')
            .assert.visible('#next')
            .assert.containsText('#current', '1 / 10')
            .end();
    },
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
    'Test next button on last page': function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .assert.visible('#next')
            .assert.containsText('#current', '1 / 10')
            .click('#next') // Page 2
            .click('#next') // Page 3
            .click('#next') // Page 4
            .click('#next') // Page 5
            .click('#next') // Page 6
            .click('#next') // Page 7
            .click('#next') // Page 8
            .click('#next') // Page 9
            .click('#next') // Page 10
            .assert.containsText('#current', '10 / 10')
            .assert.attributeEquals('#next', 'disabled', 'true')
            .end();
    },
    'Test previous button': function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .assert.visible('#previous')
            .assert.visible('#next')
            .assert.containsText('#current', '1 / 10')
            .click('#next')
            .click('#previous')
            .assert.containsText('#current', '1 / 10')
            .assert.attributeEquals('#previous', 'disabled', 'true')
            .end();
    },
    'Test previous button on first page': function (browser) {
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
};
