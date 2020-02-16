const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('MS User is running.'))
app.get('/get/1', (req, res) => res.json({uid: 1, uname: 'john', pwd: 'Test1234' }) )
app.get('/login', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    if (req.query.username==='john' && req.query.password==='Test1234'){
        res.json({id: '1', username: 'john', nickname: 'John The Champion'})
    }
    else{
        res.json({nickname:'Not Found'});
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
