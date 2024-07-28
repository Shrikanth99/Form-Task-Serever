const mongoose = require('mongoose')

const configDB = async () => {
    const url = process.env.DB_URL || 'mongodb://127.0.0.1:27017'
    const name = process.env.DB_NAME || 'Form-Task'

    try {
        await mongoose.connect(`${url}/${name}`)
        console.log('connected to DB',name)
    } catch (error) {
        console.log('Error connnecting to DB', name, error)
    }
}

module.exports = configDB