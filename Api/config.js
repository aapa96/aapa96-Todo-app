module.exports = {
    port: process.env.PORT || 3977,
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/Todo_DB',
    SECRET_TOKEN: 'miclavedetokens'
  }