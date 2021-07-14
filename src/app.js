const express = require("express");
const path = require('path');
const app = express();
const port=process.env.PORT || 8000;


const staticpath=path.join(__dirname,'../');

app.use(express.static(staticpath));

app.listen(port,()=>{
    console.log(`The Website is running on Port ${port}`);
});