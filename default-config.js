module.exports = {
  baseURL: 'https://selenium-release.storage.googleapis.com',
  version: '3.0.1',
  drivers: {
    chrome: {
      // check here for latest version:
      //  https://sites.google.com/a/chromium.org/chromedriver/
      version: '2.27',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    },
    // ie: {
    //   version: '3.0.0',
    //   arch: process.arch,
    //   baseURL: 'https://selenium-release.storage.googleapis.com'
    // },
    firefox: {
      // check here for latest version:
      // https://github.com/mozilla/geckodriver/releases/
      version: '0.14.0',
      arch: process.arch,
      baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
    }
  }
}
