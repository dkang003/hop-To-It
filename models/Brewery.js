const
    mongoose = require('mongoose'),
    brewerySchema = new mongoose.Schema({
        brandId: String,
        locationId: String,
        photos: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Photo'}], // Photo Schema *BONUS*
        users: [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'}]    
    }, {timestamps: true});

const Brewery = mongoose.model('Brewery', brewerySchema)
module.exports = Brewery;