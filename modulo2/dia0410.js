function getPokemons() {
  const pokemons = [...arguments];
  const arrPokemons = getDataOfPokemons(pokemons);
  return Promise.all(arrPokemons).then((value) =>
    value.reduce((acc, item) => {
      if (item) {
        const {
          types: [
            {
              type: { name: typename },
            },
          ],
          name,
        } = item;
        const formatedName = formatName(name);
        const arrNames = getPreviousNames(acc[typename]);
        arrNames.push(formatedName);
        return { ...acc, [typename]: arrNames };
      }
      return acc;
    }, {})
  );
}

const getDataOfPokemons = async(arr) => {
  return Promise.all(arr.map(async (item) => {
    const pokemonLowerCase = item.toLowerCase();
    const pokemonPromise = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonLowerCase}`
    );
    return pokemonPromise.json()
      // (data) => {
    //  return data.json()
    // }).catch((err) => null);
  }));
};

const formatName = (str) => str[0].toUpperCase() + str.slice(1);

const getPreviousNames = (property) => (property ? [...property] : []);

const pokemons = getPokemons(
  "Charmander",
  "Charizard",
  "Pikachu",
  "Raihu",
  "Squirtle",
  "Blastoise",
  "Bulbasaur",
  "Venusaur"
);

pokemons.then((value) => console.log(value)).catch((err) => console.log(err));
