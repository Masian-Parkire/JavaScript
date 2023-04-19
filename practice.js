  //Print all even numbers from 0 – 10
       for (let i = 0; i <= 10; i++) {
        if (i%2===0) {
            console.log(i)  
        }
        
       }

   //Sort an array from lowest to highest
       let arr = [10,34,456,23,54,432];
      arr.sort((a,b)=>a-b)
    console.log(arr)

    //Create a function that reverses an array
    function reversedarray(arr) {
      let value =arr.reverse()
     console.log(value);
      }
      arr=[1,2,3,4,5,6,7,8,9,10]
      reversedarray(arr)
      
    
      // Calculate the sum of numbers within an array
      let num = [10,20,30,40,50];
      let sum = 0;

    for (let n = 0; n < num.length; n++) {
     sum += num[n];
    
    }

console.log(sum); 





// Create a function that filters out negative numbers

function negative(para) {
 return para.filter(p =>p <=0) 
}
let para=[-3,8,-7,56,-8,67,-400,32]
console.log(negative(para));