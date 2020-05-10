const express = require('express');
const app = express();
const port = 3000;

console.log("\nServer running at port 3000\n");
console.log("Press ctrl c to shut down\n");
app.get('/', (req, res) => 
{
    res.send({msg : "Hello World"});
});

app.listen(port);
