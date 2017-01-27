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

module.exports = {
  getAllDeadCats,
  getAllLivingCats
};
