'use strict';

const Model = require('../model');
const assert = require('assert');

describe('Pokémon Model', () => {
    describe('getPokemons', () => {
        it('should return all pokémons', () => {
            Model.getPokemons()
                .then((pokemons) => {
                    assert(Array.isArray(pokemons));
                });
        });
    });
});