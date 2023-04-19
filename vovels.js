//Return the number of vowels in a string
function countVowels(names) {
    let count = 0;
    
    let vowels = ['a','e','i','o','u']
  
    for (let i = 0; i < names.length; i++) {
      if (vowels.includes(names[i].toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
  names = "My name is Purity and I am A girl"
  console.log(countVowels(names))