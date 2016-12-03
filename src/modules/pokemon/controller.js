'use strict';

const Model = require('./model');
const PagarmeService = require('../../service/pagarme-service');

class Controller {
    static getPokemons(req, res) {
        Model.getPokemons()
            .then((pokemons) => {
                res.send(pokemons);
            });
    }

    static createPokemons(req, res) {
	    Model.createPokemons(req.body)
		    .then((pokemon) => {
			    res.send(pokemon);
		    });
    }

    static buyPokemons(req, res) {
        Model.getPokemonByName(req.body.name)
            .then((pokemon) => {
                if (pokemon.stock < req.body.quantity) {
                    return res.status(400).send({
                        error: 'Not enought ' + pokemon.name + ' in stock: ' + pokemon.stock
                    });
                }

                const price = pokemon.price * req.body.quantity * 100;

                PagarmeService.buy('pokemon', pokemon.name, price, req.body.quantity)
                    .then((body) => {
                        if (body.status == 'paid') {
                            pokemon.stock = pokemon.stock - req.body.quantity;
                            pokemon.save()
                                .then((pokemon) => {
                                    res.send(body);
                                });
                        }
                    })
                    .catch((err) => {
                        console.log(JSON.stringify(err, null, 4));
                        return res.status(err.response.statusCode).send(err.response.body);
                    });
            });
    }
}

module.exports = Controller;