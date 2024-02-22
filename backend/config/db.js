const mongoose = require('mongoose')


const connectDB = async () => {
    try{
        const conn = await mongoose.connect('yourmogodb connection')
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
