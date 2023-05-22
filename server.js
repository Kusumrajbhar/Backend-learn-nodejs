const express = require('express');
const userRouter = require('./Routes/Users');
const productRouter = require('./Routes/Product');

const app = express();

app.use(express.static("public"));
// app.use(express.urlencoded({extended: true})) //required to send the form data

// app.use(logger);   //alawys write at top else it will not take other URL's
app.use('/users', userRouter);    //route is written in User.js file
app.use('/products', productRouter);   //route is written in Product.js file

app.set('view engine', 'ejs')  // set view engine else will throw err()

// app.get('/', (req,res) => {
//     // res.status(500).send('server error');  // will throw error
//     // res.send("server route Hi Bye");  // will write on browser
//     // res.download('server.js');
//     res.render('index', {text: "hello ejs"})   // ejs file name should be index.ejs
// })

// function logger(req, res, next){
// console.log("originalUrl", req.originalUrl)
// next();
// }

app.listen(5001, () => {
    console.log('server running...')
})

