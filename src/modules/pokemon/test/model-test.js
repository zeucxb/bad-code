'use strict';

const Model = require('../model');
const assert = require('assert');

const pikachu = {name: 'Pikachu', price: 10, stock: 100};

describe('Pokémon Model', () => {
    before((done) => {
        Model.deleteAllPokemons()
            .catch(() => {
                done();
            });
    });

    describe('getPokemons', () => {
        it('should return all pokémons', (done) => {
            Model.getPokemons()
                .then((pokemons) => {
                    assert(Array.isArray(pokemons));
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('createPokemons', () => {
        it('should create a pokémon', (done) => {
            Model.createPokemons(pikachu)
                .then((pokemon) => {
                    assert(pokemon instanceof Object);
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('getPokemonByName', () => {
        beforeEach(() => {
            Model.createPokemons(pikachu);
        });

        it('should return a pokémon by name', (done) => {
            Model.getPokemonByName('Pikachu')
                .then((pokemon) => {
                    assert(pokemon);
                    assert.equal(pokemon.get().name, 'Pikachu');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('deletePokemonByName', () => {
        it('should delete a pokémon by name', (done) => {
            Model.deletePokemonByName('Pikachu')
                .then((pokemon) => {
                    assert(pokemon);
                    assert.equal(pokemon.get().name, 'Pikachu');
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

    describe('deleteAllPokemons', () => {
        it('should delete all the pokémons', (done) => {
            Model.deleteAllPokemons()
                .then((total) => {
                    assert(total);
                    assert.equal(total, 1);
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });

});