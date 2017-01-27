exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "dead_cat"; ALTER SEQUENCE dead_cat_id_seq RESTART WITH 4;')
    .then(function () {
      var deadCats = [{
        id: 1,
        name: 'sally',
        color: 'black',
        type: 'crunches',
        image_url: 'https://s-media-cache-ak0.pinimg.com/564x/e0/5c/01/e05c0152e928315788d7b634f61e6805.jpg',
        owner_id: 1,
      }, {
        id: 2,
        name: 'snowball I',
        color: 'black',
        type: 'stray',
        image_url: 'http://4vector.com/thumb_data/v4l-128147.jpg',
        owner_id: 2,
      }, {
        id: 3,
        name: 'snowball II',
        color: 'black',
        type: 'animated',
        image_url: 'http://vignette2.wikia.nocookie.net/simpsons/images/0/07/Snowball2.png/revision/latest?cb=20090712193344',
        owner_id: 2,
      }];
      return knex('dead_cat').insert(deadCats);
    });
};
