exports.seed = function(knex, Promise) {
  return knex('compositions').del()
  .then(() => {
    return Promise.all([
      knex('compositions').insert({
        "id": 1,
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
        "id": 2,
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
        "id": 3,
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 18,
        "deleted": true
      }),
      knex('compositions').insert({
        "id": 4,
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 20,
        "deleted": true
      }),
      knex('compositions').insert({
        "id": 5,
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
        "id": 6,
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
        "id": 7,
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
        "id": 8,
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 14,
        "deleted": false
      }),
      knex('compositions').insert({
        "id": 9,
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
        "id": 10,
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
        "id": 11,
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
        "id": 12,
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 26,
        "deleted": false
      }),
      knex('compositions').insert({
        "id": 13,
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
        "id": 14,
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
        "id": 15,
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
        "id": 16,
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
        "id": 17,
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
        "id": 18,
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
        "id": 19,
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
        "id": 20,
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
        "id": 21,
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
        "id": 22,
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
        "id": 23,
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
        "id": 24,
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
        "id": 25,
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
        "id": 26,
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
        "id": 27,
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
        "id": 28,
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
        "id": 29,
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 21,
        "deleted": false
      }),
      knex('compositions').insert({
        "id": 30,
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 13,
        "deleted": false
      }),
      knex('compositions').insert({
        "id": 31,
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
        "id": 32,
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
        "id": 33,
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
        "id": 34,
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
        "id": 35,
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
        "id": 36,
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
        "id": 37,
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
        "id": 38,
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 1,
        "deleted": true
      }),
      knex('compositions').insert({
        "id": 39,
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
        "id": 40,
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
        "id": 41,
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
        "id": 42,
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
        "id": 43,
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
        "id": 44,
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
        "id": 45,
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
        "id": 46,
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
        "id": 47,
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
        "id": 48,
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
        "id": 49,
        "attributes": JSON.stringify([
          {
          }
        ]),
        "user_id": 1,
        "deleted": true
      }),
      knex('compositions').insert({
        "id": 50,
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
