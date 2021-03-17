const mongoose = require('mongoose');
const Student = require('../models/students');
const Subject = require('../models/subject')

//add new subject + student
exports.postAddSubject = (req, res, next) => {

  Subject.find({ name: req.body.name }, function (err, result) {

    if (err) {
      throw err;
    }
    if (result.length) {

      console.log(req.body)
      Subject.updateOne({ name: req.body.name }, {
        $push: { student: req.body.id }
      }).
        then((result) => {
          res.redirect('/testAPI/showall')
        })
    }
    else {

      const subject = new Subject({
        name: req.body.name,
        student: req.body.id
      });

      subject.save()
        .then((result) => {
          //res.send(result)
          res.redirect('/testAPI/showall')
        })
        .catch((err) => console.log("Error1" + err))
    }
  })

}


//show subject with student
exports.showAllSubject = (req, res, next) => {
  Subject.find()
    .then((result) => {
      let dataMain = []
      let k = result.length;
      for (i = 0; i < result.length; i++) {
        let data = {
          name: result[i].name,
          student: []
        }

        for (let j = 0; j < result[i].student.length; j++) {
          //console.log(result[i].student[j])
          let a = result[i].student[j]
          Student.findById(result[i].student[j], function (err, res1) {
            if (err) {
              throw err;
            }
            else {
              data.student.push(res1.name);
            }
          });

        }
        dataMain.push(data)
      }

      setTimeout(function afterTwoSeconds() {
        return res.send(dataMain)
      }, 300)

    })
    .catch((err) => console.log("Error2" + err))
}