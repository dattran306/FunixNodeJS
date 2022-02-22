const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://dattran306:tiendat306@cluster0.tgrlm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
