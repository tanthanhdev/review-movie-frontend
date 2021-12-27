// webpack.config.js
const Dotenv = require('dotenv-webpack');
 
module.exports = {
  plugins: [
    new Dotenv({
        path: './.env.development' // default is .env
    })
  ],
  resolve: {
    modules: [
        'node_modules',
        path.resolve(__dirname + '/src')
    ],
    alias: {
        src: path.resolve(__dirname + '/src')
    }
},
};