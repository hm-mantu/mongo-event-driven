const Task  = require('../models/task');
const express = require('express');
const router = express.Router();


router.post('/new', (req, res) => {
    Task.create({
        task: req.body.task,
    }, (err, task) => {
        if (err) {
          console.log('CREATE Error: ' + err);
          res.status(500).send('Error');
        } else {
          res.status(200).json(task);
        }
    });
});


router.get('/task', (req, res) => {
    Task.find({}, (err, task) => {
        if (err) {
          console.log('FIND Error: ' + err);
          res.status(500).send('Error');
        } else {
          res.status(200).json(task);
        }
    });
});


router.post('/track', (req, res, next)=>{
	console.log(req.body)
	res.send({data:'hello world'})
})

router.route('/:id')
    /* DELETE */
    .delete((req, res) => {
        Task.findById(req.params.id, (err, task) => {
          if (err) { 
            console.log('DELETE Error: ' + err);
            res.status(500).send('Error');
          } else if (task) {
            task.remove( () => {
              res.status(200).json(task);
            });
          } else {
            res.status(404).send('Not found');
          }
        });
    });

module.exports = router;