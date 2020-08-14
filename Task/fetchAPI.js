const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users/')

.then(res => res.json())
.then(json => json.map(users => console.log(users.name)))