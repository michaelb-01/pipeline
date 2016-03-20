var express = require('express');
var router = express.Router();
var ctrlPages = require('../controllers/pages');
//var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlPages.angularApp);
//router.get('/location/:locationid', ctrlLocations.locationInfo);
//router.get('/location/:locationid/review/new', ctrlLocations.addReview);
//router.post('/location/:locationid/review/new', ctrlLocations.doAddReview);

/* Other pages */
//router.get('/about', ctrlOthers.about);

router.get('/job/:jobid', ctrlPages.job);

router.get('/tasks', ctrlPages.tasks);
router.get('/tasks/:taskId', ctrlPages.index);

router.get('/grid', ctrlPages.grid);

module.exports = router;

