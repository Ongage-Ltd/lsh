const redis = require('redis')
const createClient = redis.createClient;
/*
import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', 'value');
const value = await client.get('key');
await client.disconnect();
 */

class Storage {
  constructor () {

    this._client = createClient()

    client.on('error', err => console.log('Redis Client Error', err));

    client.connect()
  }

  set (key, value) {
    return this._client.set(key, value)
  }

  get (key) {
    return this._client.get(key)
  }

  add (key, value) {
    this._client.sAdd(key, value)
    // if (!this.has(key)) {
    //   this.set(key, [])
    // }
    // this.get(key).push(value)
  }

  // all () {
  //   return this._client.sMembers
  // }

  // clear () {
  //   this._values = new Map()
  // }
}

module.exports = Storage
