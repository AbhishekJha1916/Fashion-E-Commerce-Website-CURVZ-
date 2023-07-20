const mongoose = require("mongoose");

const uri = "mongodb+srv://akjha418:hVOIwwpO1Z0fqq3g@curvzcluster.3t1enqi.mongodb.net/?retryWrites=true&w=majority";
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