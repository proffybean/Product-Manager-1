const mongoose = require("mongoose")
const database = 'Acme'
const localhost = '127.0.0.1'

mongoose.connect(`mongodb://${localhost}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( ()=> {
    console.log("You connect to the " + database + " db" )
})
.catch( (err) => {
    console.log("error while connecting to " + database)
})