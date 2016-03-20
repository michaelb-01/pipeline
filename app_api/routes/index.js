var express = require('express');
var router = express.Router();
//var ctrlLocations = require('../controllers/locations');
//var ctrlReviews = require('../controllers/reviews');

var ctrlJobs = require('../controllers/jobs');
var ctrlTasks = require('../controllers/tasks');

router.get('/jobs', ctrlJobs.getJobs);
router.post('/jobs', ctrlJobs.createJob);
router.get('/jobs/:jobid', ctrlJobs.getJob);

router.get('/myTasks', ctrlTasks.mytasks);
router.get('/tasks/:jobid', ctrlTasks.jobTasks);

/*
router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);

// reviews
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);
*/

module.exports = router;
