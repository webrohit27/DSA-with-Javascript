 // O(n) // Big O // O of N

 function linearLoop(n) {

    for (let i = 0; i < n; i++) {
        console.log(i);
        
    }

 }

 //linearLoop(6);
 // 0,1,2,3,4,5 

 

 // O of N square // OofN

 function quadraticLoop(n) {
    for (let i = 0; i < n; i++) {
       for (let j = 0; j < n; j++) {
        console.log(i,j);
       }      
    }
 }
 //quadraticLoop(2);   // 0 0 | 0 1 | 1 0 | 1 1


 // O of 1 // O(1)

 function example (n) {
    return n+n // No. of operation perform here is only 1 i.e Addition
 }
 // console.log(example(2)); // 4


 // O log(n)

 function logTimeExample(n) {
    let i = n;
    while (i>1) {
        console.log(i);
        i = Math.floor(i/2)
    }
 }
 
 logTimeExample(8); //  8 4 2