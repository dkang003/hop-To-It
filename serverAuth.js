const
    jwt = require('jsonwebtoken'),
    User = require('./models/User'),
    { JWT_SECRET } = process.env;

// creating tokens
function signToken(user)