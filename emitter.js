const { Emitter } = require("@socket.io/mongo-emitter");
const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient("mongodb://root:waQAaqtngftEB2Jw@mongo.test.visipoint.us:27017/production?authSource=admin", {
  useUnifiedTopology: true,
});

const main = async () => {
  await mongoClient.connect();

  const mongoCollection = mongoClient.db("mydb").collection("socket.io-adapter-events");
  const emitter = new Emitter(mongoCollection);

  setInterval(() => {
    emitter.emit("ping", new Date());
    console.log('pingooo');
  }, 1000);
}

main();