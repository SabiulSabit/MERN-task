const mongoose = require('mongoose')
const Student = require('../models/students')
const Subject = require('../models/subject')



//add new student
exports.postAddStudent = (req, res, next) => {

  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    dob: req.body.date,
  });


  student.save()
    .then((result) => {
      //res.send(result)
      res.redirect('/testAPI/showall')
    })
    .catch((err) => console.log("Error1" + err))
}

//show all student data
exports.showAllUserData = (req, res, next) => {

  Student.find()
    .then((result) => {
      //console.log(result);
      let dataMain = []

      for (let i = 0; i < result.length; i++) {
        let a = result[i].dob;
        a = a.toString();

        let data = {
          _id: result[i]._id,
          name: result[i].name,
          email: result[i].email,
          phone: result[i].phone,
          dob:  a.slice(0, 15),
          subject: []
        }

        //{student: result[i]._id}

        Subject.find({}, function (err, res1) {
          if (err) {
            throw err;
          }
          else {
            //  console.log(res1)
            for (let k = 0; k < res1.length; k++) {
              //console.log(res1[k].name)
              for (let j = 0; j < res1[k].student.length; j++) {
                //console.log(res1[k].student[j] === data._id);
                //data.subject.push(res1[k].name);
                if (res1[k].student[j].equals(data._id)) {
                  // console.log(res1[k].name,data._id);
                  data.subject.push(res1[k].name);
                }
              }

            }
            dataMain.push(data)

          }
        })
      }

      setTimeout(function afterTwoSeconds() {
        //console.log(dataMain)
        return res.send(dataMain)
      }, 500)

      // res.send(result)
    })
    .catch((err) => console.log("Error2" + err))
}
