const Purest = require('purest')
const config = require('../config/default')

const twitter = new Purest({
  provider: 'twitter',
  key: config.twitter.consumer.key,
  secret: config.twitter.consumer.secret
})

/* grab profile text */
twitter.query()
  .select('users/show')
  .where({ screen_name: 'imdsm' })
  .auth(config.twitter.access.token, config.twitter.access.secret)
  .request(function (err, res, body) {
    if (err) console.log(err)
    console.log(`Name: ${body.name}`)
  })

/* grab tweets from timeline */
twitter.query()
  .select('statuses/user_timeline')
  .where({ count: 5, screen_name: 'imdsm' })
  .auth(config.twitter.access.token, config.twitter.access.secret)
  .request(function (err, res, body) {
    if (err) console.log(err)
    console.log(`Tweets: ${body.length}`)

    for (var i = 0; i < body.length; i++) {
      console.log()
      console.log(body[i].text)
      console.log()
    }
  })
