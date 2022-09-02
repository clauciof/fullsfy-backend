class MongoConfig {

    connect(){
        //Import the mongoose module
        var mongoose = require('mongoose');

        //Set up default mongoose connection
        var mongoDB = 'mongodb://127.0.0.1:27017/teste';
        mongoose.connect(mongoDB, { useNewUrlParser: true });

        //Get the default connection
        var db = mongoose.connection;

        //Bind connection to error event (to get notification of connection errors)
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once("open", function () {
            console.log("Connected successfully");
          });
    }
}

module.exports = new MongoConfig()
