# bad-code
A graphql api to buy pokémons

### RUN
```bash
npm install
npm start
```

### USE
```bash
open in your browser:
http://localhost:3000/graphql
```

### QUERIES
```javascript
### Get all the pokémons in the database
{
  getPokemons {
    name
    price
    stock
  }
}
```

```javascript
### Create a pokémon
mutation($pokemon: PokemonInputType) {
  createPokemon(pokemon: $pokemon) {
    name
  }
}

### VARIABLES
{
  "pokemon": {
    "name": "Pikachu",
    "price": 10,
    "stock": 200
  }
}
```

```javascript
### Buy a pokemon
mutation($pokemonPurchase: PokemonRequestPurchaseType) {
  buyPokemons(pokemon: $pokemonPurchase) {
    name
    price
    quantity
    totalPrice
  }
}

### VARIABLES
{
  "pokemonPurchase": {
    "name": "Pikachu",
    "quantity": 10
  }
}
```
