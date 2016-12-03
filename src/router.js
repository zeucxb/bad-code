'use strict';

const router = require('express').Router();

router.use('/pokemons', require('./modules/pokemon/routes'));

module.exports = router;