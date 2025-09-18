const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => {
    console.log(`http://localhost:${port} <- 커맨트+클릭`);
});


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/coddingApple/index.html');
});