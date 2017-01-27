var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "owner"; ALTER SEQUENCE owner_id_seq RESTART WITH 3;')
    .then(function () {
      var owners = [{
        id: 1,
        email: 'sam@gmail.com',
        password: bcrypt.hashSync('sammyg21', 10)
      }, {
        id: 2,
        email: 'alex@gmail.com',
        password: bcrypt.hashSync('alexmart05', 10)
      }];
      return knex('owner').insert(owners);
    });
};
