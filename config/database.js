const mongoose = require("mongoose")

const database  = () =>{
    mongoose.connect(process.env.db,)
    .then(() => console.log(`connected database ${process.env.db}`))
}

module.exports =database