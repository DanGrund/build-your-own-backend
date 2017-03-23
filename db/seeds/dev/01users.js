exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        "id": 1,
        "name": "Charles Stone",
        "email": "cstone0@1688.com",
        "deleted": true
      }),
      knex('users').insert({
        "id": 2,
        "name": "Jeremy Snyder",
        "email": "jsnyder1@cmu.edu",
        "deleted": false
      }),
      knex('users').insert({
        "id": 3,
        "name": "Denise Sullivan",
        "email": "dsullivan2@spiegel.de",
        "deleted": true
      }),
      knex('users').insert({
        "id": 4,
        "name": "Annie Barnes",
        "email": "abarnes3@youtube.com",
        "deleted": false
      }),
      knex('users').insert({
        "id": 5,
        "name": "Carolyn Green",
        "email": "cgreen4@cnbc.com",
        "deleted": true
      }),
      knex('users').insert({
        "id": 6,
        "name": "Teresa Burke",
        "email": "tburke5@istockphoto.com",
        "deleted": true
      }),
      knex('users').insert({
        "id": 7,
        "name": "Timothy Perkins",
        "email": "tperkins6@fema.gov",
        "deleted": true
      }),
      knex('users').insert({
        "id": 8,
        "name": "Evelyn Wheeler",
        "email": "ewheeler7@fc2.com",
        "deleted": false
      }),
      knex('users').insert({
        "id": 9,
        "name": "Carl Diaz",
        "email": "cdiaz8@imgur.com",
        "deleted": true
      }),
      knex('users').insert({
        "id": 10,
        "name": "Amanda Holmes",
        "email": "aholmes9@nymag.com",
        "deleted": false
      }),
      knex('users').insert({
        "id": 11,
        "name": "David Edwards",
        "email": "dedwardsa@cbsnews.com",
        "deleted": false
      }),
      knex('users').insert({
        "id": 12,
        "name": "Ralph Riley",
        "email": "rrileyb@google.co.jp",
        "deleted": true
      }),
      knex('users').insert({
        "id": 13,
        "name": "Kathleen Dixon",
        "email": "kdixonc@sphinn.com",
        "deleted": true
      }),
      knex('users').insert({
        "id": 14,
        "name": "Jose Cook",
        "email": "jcookd@psu.edu",
        "deleted": true
      }),
      knex('users').insert({
        "id": 15,
        "name": "Ralph Peters",
        "email": "rpeterse@alibaba.com",
        "deleted": false
      }),
      knex('users').insert({
        "id": 16,
        "name": "Ruth Washington",
        "email": "rwashingtonf@sphinn.com",
        "deleted": true
      }),
      knex('users').insert({
        "id": 17,
        "name": "Theresa Kelly",
        "email": "tkellyg@ox.ac.uk",
        "deleted": true
      }),
      knex('users').insert({
        "id": 18,
        "name": "Jean Morgan",
        "email": "jmorganh@ca.gov",
        "deleted": true
      }),
      knex('users').insert({
        "id": 19,
        "name": "Arthur Lane",
        "email": "alanei@t.co",
        "deleted": false
      }),
      knex('users').insert({
        "id": 20,
        "name": "Shawn Phillips",
        "email": "sphillipsj@hc360.com",
        "deleted": true
      }),
      knex('users').insert({
        "id": 21,
        "name": "Ryan Jones",
        "email": "rjonesk@ask.com",
        "deleted": true
      }),
      knex('users').insert({
        "id": 22,
        "name": "Carol Sims",
        "email": "csimsl@cnn.com",
        "deleted": false
      }),
      knex('users').insert({
        "id": 23,
        "name": "Kenneth Sanders",
        "email": "ksandersm@slideshare.net",
        "deleted": true
      }),
      knex('users').insert({
        "id": 24,
        "name": "James Bailey",
        "email": "jbaileyn@wp.com",
        "deleted": false
      }),
      knex('users').insert({
        "id": 25,
        "name": "Gregory Collins",
        "email": "gcollinso@youtube.com",
        "deleted": true
      }),
      knex('users').insert({
        "id": 26,
        "name": "Janet Williams",
        "email": "jwilliamsp@de.vu",
        "deleted": true
      }),
      knex('users').insert({
        "id": 27,
        "name": "Richard Mendoza",
        "email": "rmendozaq@engadget.com",
        "deleted": false
      }),
      knex('users').insert({
        "id": 28,
        "name": "Jeffrey Mccoy",
        "email": "jmccoyr@netlog.com",
        "deleted": false
      }),
      knex('users').insert({
        "id": 29,
        "name": "Carolyn Mason",
        "email": "cmasons@boston.com",
        "deleted": false
      }),
      knex('users').insert({
        "id": 30,
        "name": "Albert Roberts",
        "email": "arobertst@xing.com",
        "deleted": false
      })
    ]);
  });
};
