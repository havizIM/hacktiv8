import "isomorphic-fetch"

// fetch('http://api.faketweet.com/tweets')
// .then(response => {
//     return response.json()
// }).then(tweets => {
//     return tweets.filter(tweet => {
//         return tweet.stars > 50;
//     })
// }).then(tweets => {
//     return tweets.filter(tweet => {
//         return tweet.rts > 50;
//     })
// }).catch(error => {
//     console.log(error);
// });

fetch('https://swapi.co/api/people')
  .then(response => response.json())
  .then(tweets => tweets.filter(tweet => tweet.stars > 50))
  .then(tweets => tweets.filter(tweet => tweet.rts > 50))
  .catch(error => {
    console.error(error);
  });