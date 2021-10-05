const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(val => val * 2)
console.log(doubled)

const prices = numbers.map(val => {
  val = val.toFixed(2).toString()
  return `$${val}`
})
console.log(prices)

const upperCased = languages.map(lang => lang.toUpperCase())
console.log(upperCased)

const firstLetters = languages.map(lang => lang[0])
console.log(firstLetters)
