const express = require('express')
const app = express()
const fetch = require('node-fetch')
const url = 'https://jsonplaceholder.typicode.com/users';
const port = 3005

app.get('/',(request,response)=> {
    fetch(url)
    .then(res=> res.json())
    .then(result => {
        response.send(result.map(e=> e.name))
    })
})

    app.listen(port,function(){
        console.log(`App running on port ${port}`)
    })

