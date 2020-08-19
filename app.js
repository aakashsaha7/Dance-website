const express = require("express");
const path = require("path");
// const bodyparser = require("body-parser");
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/contactdance', {useNewUrlParser: true,useUnifiedTopology: true});

// // define mongoose scheme
// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//     desc: String   
// });
// const contact = mongoose.model('contact', contactSchema);


//    const contact = mongoose.model('contact', contactSchema);
const app = express();
const hostname = '127.0.0.1';
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{ 
    const params = { }
    // res.status(200).render('index.pug', params);
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{ 
    const params = { }
    // res.status(200).render('index.pug', params);
    res.status(200).render('contact.pug', params);
})
// app.post('/contact', (req, res)=>{ 
//  var mydata = new contact(req.body)
//   mydata.save().then(()=>{
//       res.send("this item has been saved in mongoose database")
//   }).catch(()=>{
//       res.status(400).send("item was not saved to database")
//   })   
    // res.status(200).render('index.pug');
    // res.status(200).render('contact.pug');
// })

// START THE SERVER
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }); 