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
        console.log(req.body)
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
                    console.log(newBrewery)
                    // what we want is to push newBrewery brew_id so we can ping 4square API
                    user.favorites.push(newBrewery.brewId)
                    user.save(err => {
                        console.log('User added this brewery successfully.')  
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
            let user_id = req.user.id
        Brewery.find({ brewId: req.params.id}, (err, brewery) => {
            if (err) res.json({ success: false, err })
            // Check if user has already liked this brewery (see if userId exists in Brewery users' array)
            let foundUser = brewery[0].users.find( id => id == user_id);
            if (foundUser) console.log("User already liked this brewery");
            // Push user's id into brewery users' array
            else brewery[0].users.push(user_id);

            // Save brewery with added user's id
            brewery[0].save( err => {
                // Find User's id
                User.findById(user_id, (err, user) => {
                    // Push brewery's id to user's favorites array
<<<<<<< HEAD
=======
                    debugger
>>>>>>> 903c36d9eb915583046d4fa8f5f907a84ddf1ec7
                    user.favorites.push(brewery[0].brewId);
                    // Save user's favorites array with added brewery id
                    user.save(err => {
                        console.log({message: `Brewery added to user's favorites array successfully`})
                    })
                })
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
