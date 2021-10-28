const initObj = {
  method: 'GET'
};

fetch('https://jsonplaceholder.typicode.com/users', initObj)
  .then(res => {
    const resJSON = res.json();
    console.log(resJSON);
  });
