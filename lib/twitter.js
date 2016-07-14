const request = require('request')
const Purest = require('purest')
const provider = new Purest({ provider: 'twitter' })

const Twitter = function (consumerKey, consumerSecret, apiBaseUri) {
  this.consumerKey = consumerKey
  this.consumerSecret = consumerSecret
  this.apiBaseUri = apiBaseUri || 'https://api.twitter.com/'
}

Twitter.prototype.authenticate = function (done) {
  const key = encodeURIComponent(this.consumerKey)
  const secret = encodeURIComponent(this.consumerSecret)
  const token = new Buffer(`${key}:${secret}`).toString('base64')
  const self = this

  const callback = function (err, res, body) {
    if (err) return console.error(err)

    try {
      const data = JSON.parse(body)
      self.accessToken = data.access_token
      console.log('[debug] setting this.accessToken:', self.accessToken)
      done()
    } catch (ex) {
      return console.error(ex)
    }
  }

  request.post({
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'authorization': `Basic ${token}`
    },
    form: {
      'grant_type': 'client_credentials'
    }
  }, callback)
}

Twitter.prototype.test = function () {
  const self = this
  this.authenticate(function () {
    provider.query()
      .select('users/show')
      .where({ screen_name: 'imdsm' })
      .auth({ bearer: self.accessToken })
      .request(function (err, res, body) {
        if (err) console.log(err)
        console.log('body.name:', body.name)
        console.log('body.screen_name:', body.screen_name)
      })
  })
}

module.exports = Twitter
