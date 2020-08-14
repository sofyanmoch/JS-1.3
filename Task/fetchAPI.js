const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users/')

.then(res => res.json())
.then(json => json.map(users => (
    {
        name: users.name
    }
)))
.then(result => console.log(result))