const mongoose = require('mongoose')


const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://mogodbsachin1234:sachinmogodb1234@cluster0.twvkfvm.mongodb.net/saregama?retryWrites=true&w=majority')
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
