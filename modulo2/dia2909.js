// const showComparison = x => {
//     if (x) {
//         return 'é true'
//     } else {
//         return 'é false'
//     }
// }
// const x = 0
// console.log(showComparison(x))

// Retorne as primeiras letras de cada palavra do nome 'George Raymond Richard Martin' em um array.

const nome = "George Raymond Richard Martin";

const getFirstLetters = (arr) => {
  return arr.split(" ").reduce((acc, item) => acc + item.charAt(0), "");
  // map(item => item.charAt(0)).join('')
};
// console.log(getFirstLetters(nome));

// 2. Retorne cada título dentro de um h1 (por ex. <h1>Tesla Model S</h1>).

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

// const getTitle = (arr) => arr.map(({title}) => `<h1>${title}</h1>`);
// console.log(getTitle(wishlist));

// {
//     under25:
//     under40:
//     under60:
//     }
// um objeto de quem votou entre os intervalos

const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
];

// const getVoterPerAgeGroup = (arr) => {
//     const validVoters = arr.filter(({voted}) => voted)
//     return validVoters.reduce((acc, {age}) => {
//         console.log(acc)
//         if(age < 25) return {...acc, under25: (acc.under25 || 0) + 1}
//         else if(age < 40) return {...acc, under40: (acc.under40 || 0) + 1}
//         else if(age < 60) return {...acc, under60: (acc.under60 || 0) + 1}
//     }, {})
// return validVoters
// }

const getVoterPerAgeGroup = (arr) => {
    return arr.reduce((acc, {age, voted}) => {
        if(!voted) return{...acc};
        const property = defineAge(age)
        return {...acc, [property]: (acc[property] || 0) + 1}
          }, {})
          // under25: 0, under40: 0, under60: 0
}
const defineAge = (age) => {
    if (age < 25) return 'under25'
    if (age < 40) return 'under40'
    if (age < 60) return 'under60'
}
console.log(getVoterPerAgeGroup(voters))

// const total = FRUITS.reduce((map, fruit) => ({
//     ...map,
//     [fruit]: (map[fruit] || 0) + 1,
//   }), {})
//   console.log(total) // { banana: 4, apple: 3, orange: 5}

const todos = [
  {
    userId: 10,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 7,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 2,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 2,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 31,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 90,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 90,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
];

const getCompleted = (arr) => {
  return arr
  .reduce((acc, { completed }) => (completed ? acc + 1 : acc), 0);
};
console.log(getCompleted(todos));
