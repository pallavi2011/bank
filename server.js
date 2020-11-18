const express = require('express');
const bodyparser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, resp, next)=>{
    resp.send("hello");
})
app.listen(port, (err)=>{
    if (err) return console.log(err);
    console.log('server running on port '+port);
})