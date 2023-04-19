  //Print all even numbers from 0 – 10
       for (let i = 0; i <= 10; i++) {
        if (i%2===0) {
            console.log(i)  
        }
        
       }

  
    
      
    
// Create a function that filters out negative numbers

function negative(para) {
 return para.filter(p =>p <=0) 
}
let para=[-3,8,-7,56,-8,67,-400,32]
console.log(negative(para));

//Write a function that takes a string as input and returns the most common character in the string.
function takesIn(stri) {
 
let c=" "
  for (let i = 0; i < stri.length; i++) {
   if (stri.includes(stri[i]) && c.includes(stri[i]) ) {
    
    c+=stri[i]
    return c
    
   }
    
  }
  console.log(c);
}
let stri = "Geeks for Geeks"
takesIn(stri)