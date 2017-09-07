const jobsRouter = require('express').Router();
const Job = require('../models/jobs.model.js');
let jobFormatter = require('../helpers/job-formatter.helper.js');

// GET ALL JOBS
jobsRouter.get('/', function getAllJobs(req, res, next) {
  console.log(req.query);
  if (Object.keys(req.query).length) {
    Job.find({ company: {$regex: req.query.query, $options: 'i'} })
      .then(function handleResponse(data) {
        res.json(data.map(function(d) {
          return jobFormatter(d);
        }));
      })
      .catch(function handleError(err) {
        console.log(err);
        let customError = new Error('Unable to retrieve those jobs.');
        customError.status = 500;
        next(customError);
      });
  } else {
    Job.find()
      .then(function handleResponse(data) {
        res.json(data.map(function(d) {
          return jobFormatter(d);
        }));
      })
      .catch(function handleError(err) {
        console.log(err);
        let customError = new Error('Unable to retrieve jobs.');
        customError.status = 500;
        next(customError);
      });
  };
});

// GET A JOB
jobsRouter.get('/:id', function getSingleJob(req, res, next) {
  console.log(`Getting a single job with id ${req.params.id}`);

  Job.findById(req.params.id)
    .then(function handleResponse(data) {
      res.json(jobFormatter(data));
    })
    .catch(function handleError(err) {
      console.log(err);
      let customError = new Error('Unable to retrieve that job.');
      customError.status = 500;
      next(customError);
    });
});

// MAKE A JOB
jobsRouter.post('/', function makeJob(req, res, next) {
  console.log('Making a job with this data ', req.body);

  let newJob = new Job({
    company: req.body.company,
    link: req.body.link,
    notes: req.body.notes,
    createTime: new Date()
  });

  newJob.save()
    .then(function handleResponse(data) {
      res.json(data);
    })
    .catch(function handleError(err) {
      console.log(err);
      let customError = new Error('Unable to save job.');
      customError.status = 422;
      next(customError);
    });
});

// DELETE A JOB
jobsRouter.delete('/:id', function deleteJob(req, res, next) {
  console.log(`Deleting a job with id ${req.params.id}`);

  Job.findByIdAndRemove(req.params.id)
    .then(function handleResponse(data) {
      res.json(data);
    })
    .catch(function handleError(err) {
      console.log(err);
      let customError = new Error('Unable to delete job.');
      customError.status = 422;
      next(customError);
    });
});

module.exports = jobsRouter;
