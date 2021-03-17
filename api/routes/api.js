var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')


//get the controller file
const studentControler = require('../controllers/student');
const subjectControler = require('../controllers/subject');


/* GET home page. */
router.get('/', function (req, res, next) {
  mongoose.connect("mongodb://localhost/studentinfo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("Connected to db"))
    .catch((err) => console.log("Error" + err))
  res.send('API is working');
});


//user routing
router.post('/add',studentControler.postAddStudent)
router.get('/showall',studentControler.showAllUserData)

//subject routing
router.get('/showsubject',subjectControler.showAllSubject)
router.post('/addsubject',subjectControler.postAddSubject)




module.exports = router;
