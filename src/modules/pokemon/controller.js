const Model = require('./model');
const PagarmeService = require('../../service/pagarme-service');

class Controller {
  static getPokemons() {
    return Model.getAll();
  }
  
  static createPokemons(pokemon) {
    const model = new Model(pokemon);
    return model.save();
  }
  
  static deletePokemons(pokemon) {
    const model = new Model(pokemon);
    return model.deleteByName();
  }
  
  static deleteAllPokemons() {
    return Model.deleteAll();
  }
  
  static buyPokemons(pokemonRequest) {
    const model = new Model(pokemonRequest);
    return model.getByName()
      .then((pokemon) => {
        if (!pokemon) {
          throw new Error(`Pokemon ${model.name} not found.`);
        }
        
        const quantity = pokemonRequest.quantity;
        
        if (pokemon.stock < quantity) {
          throw new Error(`Not enought ${pokemon.name} in stock: ${quantity} > ${pokemon.stock}`);
        }
        
        const totalPrice = pokemon.price * quantity * 100;
        
        return PagarmeService.buy('pokemon', pokemon.name, totalPrice, quantity)
          .then((body) => {
            if (body.status == 'paid') {
              pokemon.stock = pokemon.stock - quantity;
              return pokemon.save()
                .then((pokemon) => {
                  return {
                    ...pokemon.dataValues,
                    quantity,
                    totalPrice,
                  };
                });
            }
          })
          .catch((err) => {
            throw new Error(err.response.body);
          });
      });
  }
}

module.exports = Controller;
