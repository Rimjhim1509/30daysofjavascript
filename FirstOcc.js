// function FindOcc(arr,findMe,count){
//     if(arr.length==0){
//         return -1
//     }
//     if(arr[0]==findMe){
//         count+=1;

//     }
//     return FindOcc(arr.slice(1),findMe,count)

// }


//2nd approach

function FindOcc(arr, findMe,currIndex){
    while(currIndex < arr.length){
        if (arr[currIndex == findMe]){
           console.log(`WE Found your element${currIndex}`);
        }
          currIndex+=1;

    }
}
givenArray = [1,2,3,4,5];
FindOcc(givenArray,3,0)

