const config = require('../config/default')

// /* Twitter */
const Twitter = require('./oauth') //require('./twitter')
const twitterKey = config.twitter.consumer.key
const twitterSecret = config.twitter.consumer.secret
const twitterClient = new Twitter(twitterKey, twitterSecret)
twitterClient.test()

/* Tumblr */
// const Tumblr = require('./tumblr')
// const tumblrKey = config.tumblr.consumer.key
// const tumblrSecret = config.tumblr.consumer.secret
// const tumblrClient = new Tumblr(tumblrKey, tumblrSecret)
// tumblrClient.test()
