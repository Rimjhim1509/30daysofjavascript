function Multiplicate(a,b){
    if(b==0){
        return a;
        
        
    }
    console.log(Multiplicate(`${a} x ${b}`));

    return a + Multiplicate(a,b-1);
    
}
console.log(Multiplicate(3,10));


