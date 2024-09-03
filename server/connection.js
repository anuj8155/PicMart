const mongoose = require('mongoose')

//making mongoose connection ---->
const connectDb = async(req,res)=>{
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if(connection.STATES.connected)
        return console.log("connection successful")
    if(connection.STATES.disconnected)
        return console.log("connection unsuccessful")
}


module.exports = {connectDb}