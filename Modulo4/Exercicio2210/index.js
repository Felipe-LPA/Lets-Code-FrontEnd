const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const listaEl = document.querySelector('ul')
console.log(inputEl)
inputEl.addEventListener('focus', (e) => {
    console.log()
    e.target.classList.remove('noWritingInput')
    e.target.classList.add('writingInput')
})

inputEl.addEventListener('blur', (e) => {
    console.log()
    e.target.classList.remove('writingInput')
    e.target.classList.add('noWritingInput')
})
// console.log(listaEl)
buttonEl.addEventListener('click', (e) => {
    e.preventDefault()
    const liEl = document.createElement('li')
    liEl.innerText = inputEl.value
    inputEl.value = ''
    listaEl.append(liEl)
})