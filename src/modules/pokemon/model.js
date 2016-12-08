'use strict';

const Sequelize = require('sequelize');

const db = require('../../db');

const Pokemon = db.define('pokemon', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	stock: {
		type: Sequelize.INTEGER,
		allowNull: true,
		defaultValue: 1
	}
});

Pokemon.sync();

class Model {
    static getPokemons() {
        return Pokemon.findAll();
    }

	static getPokemonByName(name) {
		return Pokemon.findOne({
			where: {
                name
            }
        });
	}

	static createPokemons(pokemon) {
		return Pokemon.create(pokemon);
	}

	static deletePokemonByName(name) {
		return Model.getPokemonByName(name)
			.then((pokemon) => {
				return new Promise((resolve, reject) => {
					if (pokemon) {
						resolve(pokemon.destroy());
					} else {
						reject(new Error('Pokémon not found!'));
					}
				});
			});
	}

	static deleteAllPokemons() {
		return Pokemon.destroy({where: {}})
			.then((total) => {
				return new Promise((resolve, reject) => {
					if (total) {
						resolve(total);
					} else {
						reject(new Error('Nothing to delete!'));
					}
				});
			});
	}
}

module.exports = Model;