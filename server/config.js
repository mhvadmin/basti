module.exports = {
    AUTH0_DOMAIN: 'myhomevihanga.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://mhv:mhv2017@ds133004.mlab.com:33004/mhv',
    NAMESPACE: 'http://myapp.com/roles'
  };