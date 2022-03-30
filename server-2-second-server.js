const { Server } = require("socket.io");
const { createAdapter } = require("@socket.io/mongo-adapter");
const { MongoClient } = require("mongodb");

const DB = "mydb";
const COLLECTION = "socket.io-adapter-events";

const io = new Server();

const mongoClient = new MongoClient("mongodb://root:waQAaqtngftEB2Jw@mongo.test.visipoint.us:27017/production?authSource=admin", {
  useUnifiedTopology: true,
});

const main = async () => {
  await mongoClient.connect();

  try {
    await mongoClient.db(DB).createCollection(COLLECTION, {
      capped: true,
      size: 1e6
    });
  } catch (e) {
    // collection already exists
    console.log('collection already exists ===> 5000');
  }
  const mongoCollection = mongoClient.db(DB).collection(COLLECTION);

  io.adapter(createAdapter(mongoCollection));

  io.sockets.on('connection', (socket) => {
    console.log('a user connected to 5000');
  });

  io.listen(5000);

  console.log('listen to 5000');
}

main();