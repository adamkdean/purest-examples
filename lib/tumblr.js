// const OAuth = require('oauth').OAuth
// const Purest = require('purest')
// const provider = new Purest({ provider: 'tumblr' })
//
// const Tumblr = function (consumerKey, consumerSecret, apiBaseUri) {
//   this.consumerKey = consumerKey
//   this.consumerSecret = consumerSecret
//   this.apiBaseUri = apiBaseUri || 'https://api.tumblr.com/'
// }
//
// https://api.tumblr.com/v2/blog/peacecorps.tumblr.com/posts/text
//
// Tumblr.prototype.test = function () {
//   provider.query()
//     .select('blog/peacecorps.tumblr.com/posts/text')
//     .auth({ oauth: { token: this.consumerKey, secret: this.consumerSecret } })
//     .request(function (err, res, body) {
//       if (err) console.log(err)
//       console.log(body)
//     })
// }
//
// Tumblr.prototype.authenticate = function (done) {
//   // const oauth = new OAuth(
//   //   'https://www.tumblr.com/oauth/request_token',
//   //   'https://www.tumblr.com/oauth/access_token',
//   //   this.consumerKey,
//   //   this.consumerSecret,
//   //   '1.0A',
//   //   null,
//   //   'HMAC-SHA1'
//   // )
//   //
//   // oauth.getOAuthAccessToken('', { 'grant_type': 'client_credentials' },
//   //   function (err, accessToken, refreshToken, results) {
//   //     if (err) return console.error(err)
//   //     this.accessToken = accessToken
//   //     console.log(`setting accessToken to ${accessToken}`)
//   //     done()
//   //   }
//   // )
//
//   // const oauth = new OAuth(this.consumerKey, this.consumerSecret,
//   //                       this.apiBaseUri, null, 'oauth/request_token', null)
//
//   // const callback = function (err, accessToken, refreshToken, results) {
//   //   if (err) return console.error(err)
//   //   this.accessToken = accessToken
//   //   console.log(`setting accessToken to ${accessToken}`)
//   //   done()
//   // }
//   //oauth.getOAuthAccessToken('', { 'grant_type': 'client_credentials' }, callback)
// }
//
// module.exports = Tumblr
