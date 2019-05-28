const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extend: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Incluido!</h1>')
})

app.post('/usuario/:id', (req,resp) => {
    console.log(req.paramas.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})
app.listen(3003)