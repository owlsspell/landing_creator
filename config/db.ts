import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASSWORD}@ggg-merchang-portal.9oc9xfc.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const usersJsonDB = client.db("GoGoGuest").collection("user_json");
export default client;
