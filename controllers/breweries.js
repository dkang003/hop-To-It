const
    Brewery = require('../models/Brewery.js');
    User = require('../models/User.js');

module.exports = {
    index: (req, res) => {
        Brewery.find({}, (err, breweries) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, breweries })
        })
    },

    create: (req, res) => {
        // console.log(req.body)
        Brewery.create(req.body, (err, newBrewery) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, newBrewery })
            // push the users id into the created breweries user array
            newBrewery.users.push(req.user.id)
           
            // save the new brewery with the user's id
            newBrewery.save(err => {
                // returns the brewery obj with current user's id in the breweries users array
                // if it saves, push the brewery's id into the users favorites array
                // res.json({success: true, addedUserToBrewery})

                User.findById(req.user.id, (err, user) => {
                    console.log(user)
                    user.favorites.push(newBrewery.id)
                    user.save(err => {
                        if (err) res.json({message: "I am line 31", err})
                        res.json({success: true, message: "Updated user saved"})
                    })
                })
            })
                        
        })
    },

    show: (req, res) => {
        // This is searching our DB for brewery by it's API brewery id
        Brewery.find({ brewId: req.params.id }, (err, brewery) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, brewery })
        })
    },

    update: (req, res) => {
        Brewery.findById(req.params.id, (err, updatedBrewery) => {
            if (err) res.json({ success: false, err })
            Object.assign(updatedBrewery, req.body)
            updatedBrewery.save((err, updatedBrewery) => {
                if (err) res.json({ success: false, err })
                res.json({ success: true, updatedBrewery })
            })
        })
    },

    destroy: (req, res) => {
        Brewery.findByIdAndRemove(req.params.id, (err, deletedBrewery) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, deletedBrewery })
        })
    }
}
