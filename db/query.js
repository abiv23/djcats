var express = require('express');
var router = express.Router();
var knex = require('./knex');
var bcrypt = require('bcrypt');


module.exports = {
  getAllUsers,
  getUserByEmail,
  createUser,
  getAllExercises,
  createExercise,
  getExerciseById,
  editExercise,
  deleteExercise
};
