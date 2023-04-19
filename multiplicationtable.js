//Print a table containing multiplication tables
function multiTable() {
    for (let i = 1; i <=12; i++) {
     let row = ' ';
     for (let x = 1; x <=12; x++) {
     row += (i*x) + '\t'
      
     }
      console.log(row);
    }
  }
  multiTable()