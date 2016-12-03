'use strict';

const router = require('express').Router();
const Controller = require('./controller');

router.get('/', Controller.getPokemons);
router.put('/', Controller.createPokemons);
router.post('/', Controller.buyPokemons);

module.exports = router;