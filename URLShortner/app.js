const express = require('express');
const app = express();
const routes = require('./routes/urlRoute');
const {connection} = require('./config/db');  
app.use(express.json());
connection('mongodb://127.0.0.1:27017/URLSHORTNER')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.use('/api', routes);
app.listen(3000, () => {
    console.log('http://localhost:3000');
});