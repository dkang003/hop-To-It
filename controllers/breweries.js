const
    Brewery = require('../models/Brewery.js');

module.exports = {
    index: (req, res) => {
        Brewery.find({}, (err, breweries) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, breweries })
        })
    },

    create: (req, res) => {
        Brewery.create(req.body, (err, newBrewery) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, newBrewery })
        })
    },

    show: (req, res) => {
        Brewery.findById(req.params.id, (err, brewery) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, brewery })
        })
    },

    update: (req, res) => {
        Brewery.findByIdAndUpdate(req.params.id, (err, updatedBrewery) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, updatedBrewery })
        })
    },

    destroy: (req, res) => {
        Brewery.findByIdAndRemove(req.params.id, (err, deletedBrewery) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, deletedBrewery })
        })
    }
}
