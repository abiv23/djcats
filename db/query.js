var express = require('express');
var router = express.Router();
var knex = require('./knex');
var bcrypt = require('bcrypt');

function getAllDeadCats() {
  return knex('dead_cat');
}

function getAllLivingCats() {
  return knex('living_cat');
}

function getDeadCatById(id) {
  return knex('dead_cat').where('id', id);
}

function getLivingCatById(id) {
  return knex('living_cat').where('id', id);
}

function postDeadCat(req) {
  return knex('dead_cat').insert({
    name: req.name,
    color: req.color,
    type: req.type,
    image_url: req.image_url,
    owner_id: req.owner_id,
  });
}

function findLiveCat(req) {
  return knex('living_cat').where('color', req.color).first();
}



module.exports = {
  getAllDeadCats,
  getAllLivingCats,
  getDeadCatById,
  getLivingCatById,
  postDeadCat,
  findLiveCat
};
