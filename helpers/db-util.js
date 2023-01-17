import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://anaconda1029:971029az@trade3dot0.jnjab97.mongodb.net/test'
    // 'mongodb://localhost:27017/'
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();

  const documents = await db
    .collection('userInfoDetails')
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}