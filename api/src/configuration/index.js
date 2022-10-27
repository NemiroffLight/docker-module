const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '127.0.0.1';
const MONGO_DB = process.env.MONGO_URL || 'mongodb://localhost:27017/my_db';

module.exports = {PORT, HOST, MONGO_DB}