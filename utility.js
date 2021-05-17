function parseNumberArray(queryPar){
    if(!queryPar){
        return {error: `nums are required`};
    }

    let arr = queryPar.split(','); 
    let nums = [];
    for(let s of arr){
        let num = +(s); 
        if(Number.isNaN(num)){
            return {error: `${s} is not a number`}; 
        }
        nums.push(+(num));
    }

    return nums;
}



function mean(...args){
    let len = args.length; 
    return args.reduce((a, b)=>{
        return a + b; 
    }) / len;
}


console.log(mean(...[3, 5, 41, 22]));

function median(...args){
    let len = args.length;
    args.sort((a, b)=> a-b); 
    if(len % 2 === 0){
        let i = Math.floor(len/2) - 1; 
        return (args[i] + args[i + 1]) / 2;
    }
    let i = Math.ceil(len/2) - 1;
    return args[i]; 
}


function mode(...args){
    const collection = {}; 
    let maxVals = []; 
    let maxCount = 0; 

    args.reduce((a,b)=>{
        a[b] = (a[b] || 0) + 1;
        if(a[b] > maxCount){
            maxCount = a[b]; 
            maxVals = [b]; 
        }
        else if(a[b] === maxCount){
            maxVals.push(b); 
        }
        return a; 
    }, collection);

    return {mode: maxVals, count: maxCount}; 
}


function getModeText(modeObj){
    let text = ''; 
    if(modeObj.mode.length === 1){
        text += `The mode is ${modeObj.mode[0]}`;
    }
    else{
        text += 'The mode values are '; 
        for(let i = 0; i < modeObj.mode.length; i++){
            text += (i !== modeObj.mode.length - 1) ? modeObj.mode[i] + ', ' : 'and ' + modeObj.mode[i] + '.';  
        }
    }
    text += ` The count was ${modeObj.count}`;
    return text;
}


module.exports = {mean, median, mode, parseNumberArray}; 