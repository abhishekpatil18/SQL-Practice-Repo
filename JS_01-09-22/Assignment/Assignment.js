// Q1 : Create a function that takes two numbers as arguments and returns their sum.
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

// const sum=(num1,num2)=>{
//     return num1+num2;
// }

// console.log(`The sum = ${sum(3,2)}`);
// console.log(`The sum = ${sum(-3,-6)}`);
// console.log(`The sum = ${sum(7,3)}`);



// Q2 : Create a function that takes voltage and current and returns the calculated power
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600

// const power=(voltage,current)=>{
//     return voltage*current;
// }

// console.log(`The Power = ${power(230,10)}`);
// console.log(`The Power = ${power(110,3)}`);
// console.log(`The Power = ${power(480,20)}`);


// Q3 : Write a function that takes an integer minutes and converts it to seconds.
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120

// const convert=(min)=>{
//     return min*60;
// }

// console.log(convert(5));
// console.log(convert(3));
// console.log(convert(2));

// Q4 :  Write a function that takes the base and height of a triangle and return its area.
// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50

// const triArea=(base,height)=>{
//     return ((1/2)*base*height);
// }

// console.log(triArea(3, 2));
// console.log(triArea(7, 4));
// console.log(triArea(10, 10));

// Q5 : Create a function that takes the age in years and returns the age in days.
// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300

// const calcAge=(year)=>{
//     return year*365;
// }
// console.log(calcAge(65));
// console.log(calcAge(0));
// console.log(calcAge(20));

// Q6 : create a function to swap two parameters
// let n1 = 10
// let n2 = 20
// swap(n1, n2) ➞ n1: 20, n2: 10

// const swap=(n1,n2)=>{
//     n1=n1+n2;
//     n2=n1-n2;
//     n1=n1-n2;
//     console.log(`n1 : ${n1} , n2 : ${n2}`);
// }
// swap(10,20);

// Q7 : create a function to find out a maximum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98];
// findMax(numbers) ➞ 98

// function findMax(numbers){
//     let maxVal=0;
//    for (const val of numbers) {
//     if(val>maxVal){
//         maxVal=val;
//     }
//    }
//    return maxVal;
// }
// console.log(findMax(numbers))


// Q8 : create a function to find out a minimum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
// findMin(numbers) ➞ 5

// function findMin(numbers){
//     let minVal=numbers[0];
//    for (const val of numbers) {
//     if(val<minVal){
//         minVal=val;
//     }
//    }
//    return minVal;
// }
// console.log(findMin(numbers))

// Q9 : Write a function which checks given input/parameter:
// If input/parameter is divisible by 3 print => Fizz
// If input/parameter is divisible by 5 print => Buzz
// If input/parameter is divisible by 3 or 5 print => FizzBuzz
// input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value
// If input/parameter is other than Number/Value print => 'Nan Not a Number! Please Input
// Number'
// isfizzBuzz('one') ➞ Nan Not a Number! Please Input Number
// isfizzBuzz(true) ➞ Nan Not a Number! Please Input Number
// isfizzBuzz(9) ➞ Fizz
// isfizzBuzz(10) ➞ Buzz
// isfizzBuzz(30) ➞ FizzBuzz
// isfizzBuzz(11) ➞ Some odd number entered: 11

// function fizzOrBuzz(num){
//     if(typeof(num)!='number'){
//         console.log('Nan Not a Number ! Please Input Number')
//         return 
//     }
//     if(num%3==0 && num % 5==0){
//         console.log("FizzBuzz");
//     }
//     else if(num%3==0){
//         console.log("Fizz");
//     }
//     else if(num%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log("Some Odd Number Entered : "+num);
//         // console.log(typeof(number))
//     }

// }
// fizzOrBuzz(30);



// Q10 : Write a function which checks number till given input/parameter is odd or even
// function evenOrOdd(num){
//     if(num== 0){
//         console.log(`Number ${num} is 0`);
//     }
//     else if(num%2 == 0){
//         console.log(`Number ${num} is Even Number`);
//     }else{
//         console.log(`Number ${num} is Odd Number`);
//     }
// }
// evenOrOdd(10)

// Q11 : Write a function which Calculate the sum of multiples of 3 and 5 for a given limit
// sum0fMultiples(10) ➞ sum0fMultipleValue of 3 & 5 upto 10 digit is: 33
// function sumOfMultiples(num){
//     let sum=0;
//     for(let i=0;i<=num;i++){
//         if(i % 3 == 0 || i % 5 == 0){
//             sum+=i;
//         }
//     }
//     console.log(`Sum = ${sum}`)
// }

// sumOfMultiples(10);

// Q12:  Write a function which Prints/Shows star (or any pattern) for the number of times and rows provided
// showPattern(5)
//  *
//  **
//  ***
//  ****
//  *****

// function showPattern(num){
//     let j=1;
//     for(let i=1;i<=num;i++){
//         for(j=1;j<=i;j++){
//             document.write(` *`);
//         }
//        document.write(`<br/>`)
//         j=1;
//     }
// }
// showPattern(5);


// Q13 : Write a function which Calculate the sum of marks provided in an array, average it and also show
// Grade
// Grade criteria/mechanism is:
// 0% to 70% = > D Grade
// 71% to 79% => C Grade
// 81% to 89% => B Grade
// 91% to 100% => A Grade
// const marks = [95, 85, 95, 65];
// calculateGrades(marks) ➞ Grade: D

// function calculateGrades(marks) {
//     let sum=0;
//     let avg=0;
//     for (const val of marks) {
//         sum+=val;
//     }
//     avg=sum/marks.length;
//     console.log(avg)
//     if(avg>0 && avg<=70){
//         console.log(`D Grade`)
//     }
//     else if(avg>=71 && avg<=79){
//         console.log(`C Grade`)
//     }else if(avg>=81 && avg<=89){
//         console.log(`B Grade`)
//     }else if(avg>=91 && avg<=100){
//         console.log(`A Grade`)
//     }
// }
// calculateGrades(marks);

// Q14 : Write a function which show or print Prime Number upto provided range (with and without map)
// showPrimeNumbers(20);
// Prime Number: 2
// Prime Number: 3
// Prime Number: 5
// Prime Number: 7
// Prime Number: 11
// Prime Number: 13
// Prime Number: 17
// Prime Number: 19

// function showPrimeNumbers(num){
//     for(let i=2;i<=num;i++){
//         let prime=1;
//         for(let j=2;j<=i/2;j++){
//             if(i % j == 0){
//                 prime=0;
//                 break;   
//             }
//             // else{
//             //     prime=1;
//             // }
//         }
//         if(prime==1){
//             console.log(`Prime Number : ${i}`);
//         }
//     }
// }
// showPrimeNumbers(20);
