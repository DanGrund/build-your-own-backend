exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        "name": "Charles Stone",
        "email": "cstone0@1688.com",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Jeremy Snyder",
        "email": "jsnyder1@cmu.edu",
        "deleted": false
      }),
      knex('users').insert({
        "name": "Denise Sullivan",
        "email": "dsullivan2@spiegel.de",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Annie Barnes",
        "email": "abarnes3@youtube.com",
        "deleted": false
      }),
      knex('users').insert({
        "name": "Carolyn Green",
        "email": "cgreen4@cnbc.com",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Teresa Burke",
        "email": "tburke5@istockphoto.com",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Timothy Perkins",
        "email": "tperkins6@fema.gov",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Evelyn Wheeler",
        "email": "ewheeler7@fc2.com",
        "deleted": false
      }),
      knex('users').insert({
        "name": "Carl Diaz",
        "email": "cdiaz8@imgur.com",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Amanda Holmes",
        "email": "aholmes9@nymag.com",
        "deleted": false
      }),
      knex('users').insert({
        "name": "David Edwards",
        "email": "dedwardsa@cbsnews.com",
        "deleted": false
      }),
      knex('users').insert({
        "name": "Ralph Riley",
        "email": "rrileyb@google.co.jp",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Kathleen Dixon",
        "email": "kdixonc@sphinn.com",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Jose Cook",
        "email": "jcookd@psu.edu",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Ralph Peters",
        "email": "rpeterse@alibaba.com",
        "deleted": false
      }),
      knex('users').insert({
        "name": "Ruth Washington",
        "email": "rwashingtonf@sphinn.com",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Theresa Kelly",
        "email": "tkellyg@ox.ac.uk",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Jean Morgan",
        "email": "jmorganh@ca.gov",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Arthur Lane",
        "email": "alanei@t.co",
        "deleted": false
      }),
      knex('users').insert({
        "name": "Shawn Phillips",
        "email": "sphillipsj@hc360.com",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Ryan Jones",
        "email": "rjonesk@ask.com",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Carol Sims",
        "email": "csimsl@cnn.com",
        "deleted": false
      }),
      knex('users').insert({
        "name": "Kenneth Sanders",
        "email": "ksandersm@slideshare.net",
        "deleted": true
      }),
      knex('users').insert({
        "name": "James Bailey",
        "email": "jbaileyn@wp.com",
        "deleted": false
      }),
      knex('users').insert({
        "name": "Gregory Collins",
        "email": "gcollinso@youtube.com",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Janet Williams",
        "email": "jwilliamsp@de.vu",
        "deleted": true
      }),
      knex('users').insert({
        "name": "Richard Mendoza",
        "email": "rmendozaq@engadget.com",
        "deleted": false
      }),
      knex('users').insert({
        "name": "Jeffrey Mccoy",
        "email": "jmccoyr@netlog.com",
        "deleted": false
      }),
      knex('users').insert({
        "name": "Carolyn Mason",
        "email": "cmasons@boston.com",
        "deleted": false
      }),
      knex('users').insert({
        "name": "Albert Roberts",
        "email": "arobertst@xing.com",
        "deleted": false
      })
    ]);
  });
};
