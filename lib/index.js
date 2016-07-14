const config = require('../config/default')

/* Twitter */
const Twitter = require('./twitter')
const twitterKey = config.twitter.consumer.key
const twitterSecret = config.twitter.consumer.secret
const twitterClient = new Twitter(twitterKey, twitterSecret)
twitterClient.test()
