const assert = require('assert');
const Model = require('../model');

const pikachu = {name: 'Pikachu', price: 10, stock: 100};

describe('Pokémon Model', () => {
  before((done) => {
    Model.deleteAll()
      .catch(() => {
        done();
      });
  });
  
  describe('getPokemons', () => {
    it('should return all pokémons', (done) => {
      Model.getAll()
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
      const model = new Model(pikachu);
      model.save()
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
      const model = new Model(pikachu);
      model.save();
    });
    
    it('should return a pokémon by name', (done) => {
      const model = new Model({name: pikachu.name});
      model.getByName()
        .then((pokemon) => {
          assert(pokemon);
          assert.equal(pokemon.get().name, 'pikachu');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
  
  describe('deletePokemonByName', () => {
    it('should delete a pokémon by name', (done) => {
      const model = new Model({name: pikachu.name});
      model.deleteByName()
        .then((pokemon) => {
          assert(pokemon);
          assert.equal(pokemon.get().name, 'pikachu');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
  
  describe('deleteAllPokemons', () => {
    it('should delete all the pokémons', (done) => {
      Model.deleteAll()
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