const express = require('express');

const ExpressModule = () => {

    const app = express();

    app.get('/', (req,res) => {
        res.send("Express is running on server");
    })
    
    app.listen(5000, () => {
        console.log('Express port is running...')
    })

}

module.exports = {ExpressModule}