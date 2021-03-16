const express = require('express');
const router = express.Router();
const dataService = require('./../data/data-service');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    // verify we got the params and throw error if we didnt
    const {q, latitude, longitude} = req.query;
    if (!q) {
      return next ({status: 422 ,message: 'q is required'});
    }
    if (!latitude) {
      return next ({status: 422 ,message: 'latitude is required'});
    }
    if (!longitude) {
      return next ({status: 422 ,message: 'longitude is required'});
    }

    // run the sugestion function
    const results = await dataService.getSugestion(q, latitude, longitude);
    // return the result
    res.status(200).json(results);

  } catch (error) {
    next ({message: 'somthing went wrong'});
  }

  
});

module.exports = router;
