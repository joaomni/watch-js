const express = require('express')
const path = require('path')

const app = express()

const port = 3333

app.use(express.static('/public'))

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: app,
    noCache: true,
})

app.get('/', (req, res) => {
    return res.render('index.html')
})

app.listen(port, () => {
    console.log(`[*] Server is running at port: ${port}`)
    console.log(`[*] Site is running at: http://localhost:${port}`)
})