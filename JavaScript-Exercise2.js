//Write a function that takes an array as an argument and uses a while loop to print each item in the parameter to the console.  After you define the function, call that function and pass in the artists array.
     
function printFromArray(inputArray){

    i =0;
    while(i < inputArray.length){
         console.log(inputArray[i])
         i++;
    }
}
printFromArray(artists);
