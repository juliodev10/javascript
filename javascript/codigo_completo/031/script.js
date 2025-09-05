// APLICAR ESTILOS INLINE COM JAVASCRIPT

// document.querySelector("h1").style.color = "red"
// let el = document.querySelector("h1")
// el.style.color = "red"
// el.style.backgroundColor = "yellow"

let el = document.querySelector("p")
const estilos = window.getComputedStyle(el)
console.log(estilos.getPropertyValue('color'))// o gray do p
console.log(estilos.getPropertyValue('font-size'))//valor atribuido por padrao
// console.log(el.style.backgroundColor)