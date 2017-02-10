var config = require('./default-config')
var selenium = require('selenium-standalone')

function start (done) {
  selenium.install(config, function (err) {
    if (err) return done(err)

    selenium.start({
      spawnCb (res) {
        console.log('spawnCb', res)
      }
    }, function (err, child) {
      if (err) return done(err)
      selenium.child = child
      done('huzzah')
    })
  })
}

start(function (result) {
  console.log(result)
})
