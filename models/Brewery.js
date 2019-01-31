const
    mongoose = require('mongoose'),
    brewerySchema = new mongoose.Schema({
        brandId: { type: String , required: true },
        locationId: { type: String, required: true },
        users: [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'}]    
    }, {timestamps: true});

const Brewery = mongose.model('Brewery', brewerySchema)
module.exports = Brewery;