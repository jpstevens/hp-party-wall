const request = require('request');
const INSTAGRAM_URL = `https://api.instagram.com/v1/tags/${process.env.HASHTAG}/media/recent?access_token=${process.env.IG_ACCESS_TOKEN}`;
const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

const images = new Set();

request.get({ url: INSTAGRAM_URL, json: true }, (res) => {
  res.body.data.forEach(item => images.add(item.images.standard_resolution));
});

`https://api.twitter.com/1.1/search/tweets.json?q=%23${process.env.HASHTAG}+filter:media`
