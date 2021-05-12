module.exports = {
    src_folders: ['./src/nightwatch'],

    webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        port: 9515,
    },

    test_settings: {
        default: {
            desiredCapabilities : {
                browserName : 'chrome',
            }
        }
    }
};
