const {mean, median, mode} = require('./utility'); 


describe('test mean', ()=>{
    test('should return mean', ()=>{
        const value = mean(3, 4, 5, 2, 6);
        expect(value).toEqual(4);
    });
    
    test('single element collection returns that element as the mean', ()=>{
        let value = mean(5); 
        expect(value).toEqual(5);
    });
});

describe('test median', ()=>{
    test('should return median from even length collection of numbers', ()=>{
        const value = median(8, 10);
        expect(value).toEqual(9); 
    });
    test('should return median from odd length collection of numbers', ()=>{
        const value = median(9, 3, 5); 
        expect(value).toEqual(5); 
    });
});

describe('test mode', ()=>{
    test('should return mode and occurence', ()=>{
        const modeObj = mode(1, 2, 3, 2, 1, 3, 5, 4, 2); 
        expect(modeObj.mode).toEqual([2]); 
        expect(modeObj.count).toEqual(3);
    });

    test('should return all numbers when each element occurs only once', ()=>{
       const modeObj = mode(1, 2, 3, 4, 5);
       expect(modeObj.mode).toEqual([1, 2, 3, 4, 5]);  
    });

    test('should return all values that occur the most frequently', ()=>{
        const modeObj = mode(3, 3, 3, 4, 4, 5, 5, 5, 6); 
        expect(modeObj.mode).toEqual([3, 5]);
    });
});