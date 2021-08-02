console.log( "----------------------");
console.log( "#1");
    sumOfNums = (add) => {
        var sum= 0;
        for(var i =0; i <add.length; i++){
        sum += add[i];
       };
       console.log(sum);
    }
    sumOfNums([1,2,3,4,5]) 
    sumOfNums([0,0,5]) 
    sumOfNums([-1,0,1])
    sumOfNums([])

console.log( "----------------------");
console.log( "#2");

 greaterNum = (array, numGreater) =>
{
        numGreater = 10;
        for(let i = 0; i < numGreater; i++)
        if (array[i] > numGreater)
            console.log(array[i]);
}
 
greaterNum([-1, 0, 1, 9, 9.5, 9.99, 10, 11, 20, 100]);

console.log( "----------------------");
console.log( "#3");

allGreaterThanTen = (array) =>
{
        
        for(let i = 0; i <= 10; i++) {
        if (array[i] > 10){
            console.log(array[i] , " TRUE") }
            else 
                console.log(array[i] , " False ")
            };
}
 
 allGreaterThanTen([11, 20, 100]) ;
 allGreaterThanTen([9, 100, 299]);
 allGreaterThanTen([1, 2]);
 allGreaterThanTen([10]) ;
 allGreaterThanTen([]);

console.log( "----------------------");
