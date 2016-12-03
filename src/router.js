'use strict';

const router = require('express').Router();

router.use('/pokemons', require('./pokemon/routes'));

module.exports = router;