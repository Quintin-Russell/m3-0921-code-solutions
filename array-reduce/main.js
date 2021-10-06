const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((val1, val2) => val1 + val2)
console.log(sum)

const product = numbers.reduce((val1,val2) => val1 * val2)
console.log(product)

const balance = account.reduce((val1, val2) => {
  if (val2.type === 'deposit') {
    return val1 + val2.amount
  } else {
    return val1 - val2.amount
  }
},0)
console.log(balance)

const composite = traits.reduce((val1, val2) => {
  return Object.assign(val2, val1)
}, {})
console.log(composite)
