function setMin(A){
    let min = Infinity;
    for(let i=0; i<A.length;i++){
        if(A[i]<min){
            min = A[i];

        }
    }
    return min;
}
function setMax(A){
    let max = -Infinity;
    for(let i=0;i<A.length;i++){
        if(A[i]>max){
            max=A[i];
        }
    }
    return max;
}
function main(){
    const A = [3,2,1,56,1000,167];
    console.log(setMin(A),setMax(A));
}
main();