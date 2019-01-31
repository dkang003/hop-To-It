require('dotenv').config();

const
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/react-express-jwt',
    PORT = process.env.PORT || 3002,
    usersRoutes = require('./routes/users.js'),
    breweriesRoutes = require('./routes/breweries.js');

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
    console.log(err || `Connected to mLab`)
})

app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/api', (req,res) => {
    res.json({ message: "API ROOT" })
});

app.use('/api/users', usersRoutes);
app.use('/api/breweries', breweriesRoutes);

app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}`) 
});