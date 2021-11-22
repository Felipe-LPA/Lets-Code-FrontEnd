// função principal.
async function setStationsObj() {
  const data = await getStationsData();
  //tratamento simples para caso a requisição falhar
  if (!data) {
    console.error("A requisão falhou!");
    return;
  }

  //destructuring do obj para ter somente o array com as informações das estações.
  const {
    data: {
      estacoes: { estacao: arrOfStations },
    },
  } = data;

  const organizedObj = organizeStations(arrOfStations);
  console.log(organizedObj);
}

// função para realizar a requisição get para o Endpoint e retornar os dados.
const getStationsData = () => {
  return axios({
    url: `https://private-3923c4-santandercoders809.apiary-mock.com/stations`,
  }).catch(function (error) {
    return null;
  });
};

// função para criar o obj com os dados já separados por estação.
const organizeStations = (arr) => {
  return arr.reduce((acc, item) => {
    const property = getProperty(item["_linha"]);
    const arrNames = getPreviousStations(acc[property]);
    arrNames.push(item);
    return { ...acc, [property]: arrNames };
  }, {});
};

// função para formatar o nome da propriedade.
const getProperty = (property) => {
  const arrPropertyNoSpace =  property.split(' ')
  const propertyName = arrPropertyNoSpace[0].split('-')
  if(propertyName[1]) return `${propertyName[0]}-${propertyName[1]}`
  return propertyName[0];
} 

// função para verificar se a propriedade já existia e retornar os dados já armazenados,
// e caso não, retornar um array vazio.
const getPreviousStations = (property) => (property ? [...property] : []);

// chamada da função principal.
setStationsObj();
