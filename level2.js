
//2
const text ="I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
console.log(text.split(' '))
const arr22=text.split(' ')
console.log(arr2.length)
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (shoppingCart[0] !== 'meat'){
  shoppingCart.unshift('meat');
}
console.log(shoppingCart)
//
if (shoppingCart[shoppingCart.length-1] !== 'sugar'){
  shoppingCart.unshift('sugar');
}
console.log(shoppingCart)
//
const honey=true
if(honey){
   const index = shoppingCart.indexOf('Honey')
  if (index !== -1){
    shoppingCart.splice(index, 1)
  }
}
console.log(shoppingCart)
//
const index3=shoppingCart.indexOf('Tea')
if (index3 !== -1){
  shoppingCart[index3]='green tea'
}
console.log(shoppingCart)
//4
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const name= countries.indexOf('Ethiopia');
if (name !== -1){
  console.log('ETHIOPIA')
 }else{
  countries.push('Ethiopia')
 }
 //5
 
const name5= countries.indexOf('Sass');
if (name !== -1){
  console.log('Sass is a CSS preprocess')
 }else{
  countries.push('Sass')
  console.log(webTechs) }
  //6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)