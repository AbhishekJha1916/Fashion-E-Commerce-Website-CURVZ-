const mongoose = require("mongoose");

const uri = "mongodb+srv://os03bit:LBnK4K6lVihz5VYa@curvzdata.a3aeoct.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);

const start = async() => {
    try{
        await mongoose.connect(uri);

    }
    catch(err){
        console.log(err); 
    }
}
start()