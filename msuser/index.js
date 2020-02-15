const express = require('express')
const app = express()
const port = 3000

app.all('/', function (req, res, next) {
    console.log(req);
}
app.get('/', (req, res) => res.send('MS User is running.'))
app.get('/user/1', (req, res) => res.json({uid: 1, uname: 'john', pwd: 'Test1234' }) )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
