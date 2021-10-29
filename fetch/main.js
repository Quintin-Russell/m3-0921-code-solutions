const initObj = {
  method: 'GET'
};

fetch('https://jsonplaceholder.typicode.com/users', initObj)
  .then(res => res.json())
  .then(users => console.log(users))
  .catch(err => console.log('Error!', err));
