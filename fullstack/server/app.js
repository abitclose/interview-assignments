const createServer = require('./lib/create-server');

const app = createServer()
const port = 8001

app.get('/', (req, res) => {
    res.send('hello , anybody ?')
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});