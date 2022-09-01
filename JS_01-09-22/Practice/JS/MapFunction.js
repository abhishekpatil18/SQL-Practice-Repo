
// Creating Array
const numbers=[1,2,3,4,5,6];

// Applying map Function on the Numbers array to get Square of each element
const square=numbers.map((value)=>{
    return value**2;
})

console.log(`Squares =  ${square}`);



// Filter Property
const evenNumbers=numbers.filter((value)=>{
    if(value % 2 == 0){
        return value;
    }
})

console.log( `Even Numbers = ${evenNumbers}`);


// Filter property For Odd Numbers : 
const oddNumbers=numbers.filter((value)=>{
    if( value % 2 != 0){
        return value;
    }
})

console.log( `Even Numbers = ${oddNumbers}`);