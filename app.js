const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user')


// use when starting application locally
let url= "mongodb://admin:password@localhost:27017/";

// "user-account" in demo with docker. "my-db" in demo with docker-compose
let databaseName = "linkedin";



mongoose.connect(url,{dbName:databaseName}, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res)=>{
      console.log('Mit der DB verbunden')
      //Listen to server
      app.listen(3000,()=>{
        console.log("Listening to port 3000...")
      })

    })
    .catch((err)=>{
      console.log(err)
    })

//Express app erstellen
const app = express();

//Static resource
app.use(express.static(__dirname + '/public'));

//URL Encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


//Http Request Handling
app.get('/',(req,res)=>{
    res.sendFile('/style.css', {root : __dirname})
})

app.post('/update-profile', function (req, res) {
  //const userObj = req.body;
  const user = new User(req.body)
  console.log(user)
   
  user.save()
  .then((res)=>{
    console.log("Daten erfolgreich gespeichert!")
  })
  .catch((err)=>{
    console.log(err)
  })
});



