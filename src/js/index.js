
console.log('Hello');

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await res.json();
  console.log(json);
};


console.log(getData());