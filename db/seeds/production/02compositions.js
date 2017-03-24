exports.seed = function(knex, Promise) {
  return knex('compositions').del()
  .then(() => {
    return Promise.all([
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 15,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          }
        ]),
        "user_id": 22,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 18,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 20,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          }
        ]),
        "user_id": 17,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 17,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 6,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 14,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 3,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 6,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 16,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 26,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 16,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 22,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 9,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 9,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 12,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 6,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 18,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 8,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 29,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 3,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 10,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 29,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 25,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          }
        ]),
        "user_id": 21,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          }
        ]),
        "user_id": 4,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          }
        ]),
        "user_id": 13,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 21,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 13,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 21,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          }
        ]),
        "user_id": 9,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 20,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          }
        ]),
        "user_id": 26,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 12,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 23,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 16,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 1,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          }
        ]),
        "user_id": 10,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 21,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 19,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 21,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 20,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          }
        ]),
        "user_id": 22,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 9,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 13,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          },
          {
          },
          {
          }
        ]),
        "user_id": 28,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          }
        ]),
        "user_id": 4,
        "deleted": false
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 1,
        "deleted": true
      }),
      knex('compositions').insert({
        "attributes": JSON.stringify([
          {
          },
          {
          }
        ]),
        "user_id": 18,
        "deleted": false
      })
    ]);
  });
};
