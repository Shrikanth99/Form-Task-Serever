require('dotenv')
const formCltr = require('./app/controller/form-cltr')

const configDB = require('./config/db')
const exrpress = require('express')
const cors = require('cors')


const app = exrpress()
const port = process.env.PORT || 3017

configDB()

app.use(exrpress.json())
app.use(cors())

app.get('/form/list',formCltr.list)
app.post('/form/create',formCltr.add )
app.put('/form/input',formCltr.addInput)

app.listen(port,() => {
    console.log('server running on port', port )
})

