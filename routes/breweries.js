const
    express = require('express'),
    breweriesRouter = new express.Router(),
    breweriesCtrl = require('../controllers/breweries.js');
    // verifyToken = require('../serverAuth').verifyToken;


// breweriesRouter.use(verifyToken);    
// CREATE
breweriesRouter.post('/', breweriesCtrl.create);

// INDEX
breweriesRouter.get('/', breweriesCtrl.index);

// SHOW
breweriesRouter.get('/:id', breweriesCtrl.show);

// UPDATE
breweriesRouter.patch('/:id', breweriesCtrl.update);

// DELETE
breweriesRouter.delete('/:id', breweriesCtrl.destroy);

module.exports = breweriesRouter;