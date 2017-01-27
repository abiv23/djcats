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



module.exports = {
  getAllDeadCats,
  getAllLivingCats,
  getDeadCatById,
  getLivingCatById
};
