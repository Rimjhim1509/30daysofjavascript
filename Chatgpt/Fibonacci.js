function Fibonacci(value){
    let n0 = 0;
    let n1 = 1;
    for(let i = 0;i<value;i++){
        temp = n0 +n1;
        n0 = n1;
        n1 = temp;

    }
    return n0 ; 

}
console.log(Fibonacci(4));


function RecursiveFibonacci(value){
    if(value<=1){
        console.log(`When base case got hit${value}`);
        
        return value;
    }
    console.log(`here calling stack works ${value -1} add to ${value-2}`)
    return RecursiveFibonacci(value-1)+ RecursiveFibonacci(value-2);


}
console.log(RecursiveFibonacci(4));