const express = require('express');

const router = express.Router();
router.get('/', (req,res) => {
    res.send("All products list")
})

router.get('/price', (req, res) => {
    res.send('product price')
})

router.get('/new', (req, res) => {
    res.render("users/new", {firstName: "Kusum"}); //this is passed in ejs file using locals.firstName
})

router.post("/", (req,res) => {
 console.log("body", req.body) ; 
  res.send("Hii");
  console.log("sended")
})

module.exports = router