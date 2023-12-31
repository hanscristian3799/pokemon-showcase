import { MongoClient } from "mongodb"

export const connectToDatabase = async () => {
    const connection = MongoClient.connect("mongodb+srv://hans_new:12345@cluster0.s3i8uve.mongodb.net/?retryWrites=true&w=majority")
    return connection;
}