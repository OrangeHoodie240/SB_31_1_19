const { json } = require('express');
const express = require('express'); 
const {mean, median, mode, parseNumberArray, getModeText} = require('./utility');
const ExpressError = require('./ExpressError');

const app = express(); 


app.use(express.json()); 
app.use(express.urlencoded({'extended': true})); 


app.get('/', (req, res, next)=>{
    return res.send("Gloria, gloria");
});

app.get('/mean', (req, res, next)=>{
    let nums = req.query.nums;
    nums = parseNumberArray(nums);
    if(nums.error){
        const error = new ExpressError(nums.error, 400); 
        return next(error); 
    }

    let meanVal  = mean(...nums);
    const response = {
        operation: 'mean',
        value: meanVal
    };


    return res.json({response}); 
});


app.get('/median', (req, res, next)=>{
    let nums = req.query.nums;
    nums = parseNumberArray(nums);
    if(nums.error){
        const error = new ExpressError(nums.error, 400); 
        return next(error); 
    }

    let medianVal  = median(...nums);
    const response = {
        operation: 'median',
        value: medianVal
    };


    return res.json({response}); 
});


app.get('/mode', (req, res, next)=>{
    let nums = req.query.nums;
    nums = parseNumberArray(nums);
    if(nums.error){
        const error = new ExpressError(nums.error, 400); 
        return next(error); 
    }

    const modeObj  = mode(...nums);
    const response = {
        operation: 'mode',
        value: modeObj.mode[0]
    };


    return res.json({response}); 
});

app.use((error, req, res, next)=>{
    let message = error.message; 
    let status = error.status || 500; 
    return res.json({error: {message, status}});
});


app.use((req, res, next)=>{
    return res.status(404).send("Page Not Found"); 
}); 

app.listen(3000, function(){
    console.log('app.js listening on port 3000'); 
});