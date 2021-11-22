const array = [
    "Charmander",
    "Charizard",
    "Pikachu",
    "Raichu",
    "Squirtle",
    "Blastoise",
    "Bulbasaur",
    "Venusaur"
  ];
  
  const takesPromises = (arr) => {
    return arr.map((pikachu) =>
      fetch("https://pokeapi.co/api/v2/pokemon/" + pikachu.toLowerCase())
    );
  };
  
  const takesPromisesData = (arr) => {
    let listWithProm = [];
    return new Promise((resolve, reject) => {
      takesPromises(arr).forEach((prom) => {
        prom
          .then((data) => data.json())
          .then((js) => {
            listWithProm.push(js);
            if (listWithProm.length === arr.length)
              resolve(takesJsonReduce(listWithProm));
          });
      });
    });
  };
  
  const takesJsonReduce = (listWithP) =>
    listWithP.reduce(
      (acc, promJS) => {
        acc[promJS.types[0].type.name].push(promJS.name);
        return acc;
      },
      { fire: [], electric: [], water: [], grass: [] }
    );
  
  console.log(takesPromisesData(array));
  const teste = takesPromisesData(array)
  teste.then(value => console.log(value));
  