const http = require('http')
const port = process.env.port || 9999
const app = require('./app')
const mongodb = require('mongoose')

const serverUri = 'http://localhost:' + port
const mongoUri = 'mongodb+srv://chrilla:bytmig123@cluster0-hey3w.mongodb.net/webapi?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'

http.createServer(app).listen(port, () => console.log('WEBSERVER: ' + serverUri))
mongodb.set('useCreateIndex', true).connect(mongoUri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MONGODB: Running'))