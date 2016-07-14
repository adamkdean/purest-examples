const OAuth2 = require('oauth').OAuth2
const Purest = require('purest')
const provider = new Purest({ provider: 'twitter' })

const Twitter = function (consumerKey, consumerSecret, apiBaseUri) {
  this.consumerKey = consumerKey
  this.consumerSecret = consumerSecret
  this.apiBaseUri = apiBaseUri || 'https://api.twitter.com/'
}

Twitter.prototype.authenticate = function (done) {
  const api = new OAuth2(this.consumerKey, this.consumerSecret,
                         this.apiBaseUri, null, 'oauth2/token', null)

  const callback = function (err, accessToken, refreshToken, results) {
    if (err) return console.error(err)
    this.accessToken = accessToken
    console.log(`setting accessToken to ${accessToken}`)
    done()
  }

  api.getOAuthAccessToken('', { 'grant_type': 'client_credentials' }, callback)
}

Twitter.prototype.test = function () {
  this.authenticate(function () {
    provider.query()
      .select('users/show')
      .where({ screen_name: 'imdsm' })
      .auth({ bearer: this.accessToken })
      .request(function (err, res, body) {
        if (err) console.log(err)
        console.log(`Name: ${body.name}`)
      })
  })
}

module.exports = Twitter
