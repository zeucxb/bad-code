'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('pokemons', null, null, {
	dialect: 'sqlite'
});

const Pokemon = sequelize.define('pokemon', {
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

Pokemon.sync({force: true}).then(() => {
	console.log('Model is ready!');
});

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
}

module.exports = Model;