const mongoose = require("mongoose");
const mongoURI = "mongodb://0.0.0.0:27017/test";

const connectToMongo = async () => {
    try {
        mongoose.disconnect();
        mongoose.connect(mongoURI);
        console.log("Connected.");
    } catch(error) {
        console.error("Error ", error);
    }
}

module.exports = connectToMongo;