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
	constructor(params) {
	    params = params || {};

        this.name = params.name || '';
        this.price = params.price || 0;
        this.stock = params.stock || 0;
    }

	static getAll() {
        return Pokemon.findAll();
    }

	getByName() {
		return Pokemon.findOne({
			where: {
                name: this.name
            }
        });
	}

	save() {
		return Pokemon.create(this);
	}

	deleteByName() {
		return this.getByName()
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

	static deleteAll() {
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