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

// breweriesRouter.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  
//   breweriesRouter.get('/', function(req, res, next) {
//     // Handle the get for this route
//     Brewery.find({}, (err, breweries) => {
//         if (err) res.json({ success: false, err })
//         res.json({ success: true, breweries })
//         next()
//     })
//   });
  
//   breweriesRouter.post('/', function(req, res, next) {
//    // Handle the post for this route
//   });



module.exports = breweriesRouter;