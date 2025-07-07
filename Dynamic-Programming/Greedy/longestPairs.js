/*let pairs = [[1,2],[2,7],[3,8],[4,3],[0,4]];
pairs.sort((a,b)=>{
    console.log(`comparing ${a} vs ${b}`);
    return a[1]-b[1] && a[0]-b[0];

    
});
console.log("sorted",pairs);

*/
var longestPairchain = function(pairs){
    pairs.sort((a,b)=>{
        return a[1]-b[1];

    })
    let currentindex = -Infinity;
    let count =0;
    for(const[start , end] of pairs){
        if(start>currentindex){
            currentindex = end;
            count++;

        }
        

    }
return console.log(count);
}
longestPairchain([[1,2],[2,3],[3,4]]);
