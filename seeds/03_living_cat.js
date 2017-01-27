exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "living_cat"; ALTER SEQUENCE living_cat_id_seq RESTART WITH 9;')
    .then(function () {
      var livingCats = [{
        id: 1,
        name: 'chester',
        color: 'orange',
        type: 'animated',
        image_url: 'https://s-media-cache-ak0.pinimg.com/originals/a1/ed/98/a1ed98ebc62b8700c90ad639c9d15d60.jpg',
        age: 40
      }, {
        id: 2,
        name: 'tiger',
        color: 'orange',
        type: 'tabby',
        image_url: 'http://www.catster.com/wp-content/uploads/2011/04/tabby-cat-orange-HERO.jpg',
        age: 6
      }, {
        id: 3,
        name: 'chairman meow',
        color: 'grey',
        type: 'tabby',
        image_url: 'http://www.wendychao.com/chairmanmeow/propaganda.jpg',
        age: 4
      }, {
        id: 4,
        name: 'pikachu',
        color: 'orange',
        type: 'pokemon',
        image_url: 'http://finalcutking.com/wp-content/uploads/2012/05/pikachu-thumb1.jpeg',
        age: 20
      }, {
        id: 5,
        name: 'philbert',
        color: 'grey',
        type: 'tabby',
        image_url: 'http://i.onionstatic.com/onion/7954/original/1200.jpg',
        age: 1
      }, {
        id: 6,
        name: 'tom',
        color: 'orange',
        type: 'GOAT',
        image_url: 'http://a.abcnews.com/images/Entertainment/AP_KittenBowlBalls_150130_CC_16x9_992.jpg',
        age: 39
      }, {
        id: 7,
        name: 'gandalf',
        color: 'black',
        type: 'wizard',
        image_url: 'https://cdn.pixabay.com/photo/2015/08/25/21/58/cat-907749_960_720.jpg',
        age: 200
      }, {
        id: 8,
        name: 'jessica',
        color: 'white',
        type: 'adorable',
        image_url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKmTkpQrKH_0lV55_WtWdIIMFZiUI3GgC6zD9SOTRgX9k71HBMkA',
        age: 1
      }];
      return knex('living_cat').insert(livingCats);
    });
};
