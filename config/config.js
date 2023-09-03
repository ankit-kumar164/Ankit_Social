require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 9001,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: ('mongodb+srv://'+'ankit614:'+process.env.Pass_Word+'@ankit.r1q5cu3.mongodb.net/?retryWrites=true&w=majority') || process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject' 

}


export default config
