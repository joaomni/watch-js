import express from "express"

const app = express()

app.get('/', (req, res) => {
    return res.render('./index.html')
})

app.listen(3333, () => {
    console.log(`[*] Servidor rodando`)
})