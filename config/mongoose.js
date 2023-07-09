const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/Curvz");

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "Error connecting to MongoDB."));

// db.once("open", function () {
//   console.log("Connected to Database :: MongoDB.");
// });

// module.exports = db;

const uri = "mongodb+srv://os03bit:LBnK4K6lVihz5VYa@curvzdata.a3aeoct.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);

const start = async() => {
    try{
        await mongoose.connect(uri);
        console.log("Connect DB");

    }
    catch(err){
        console.log(err); 
    }

}
start()