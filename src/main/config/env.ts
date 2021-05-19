export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://kaiorr:1234@localhost:27017/jest?authSource=admin',
  port: process.env.PORT || 5050
}
