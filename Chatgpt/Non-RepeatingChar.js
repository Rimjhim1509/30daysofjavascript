function firstNonRepeating(str){
    let strArr = str.split("");
    for(let char of strArr){
        if(str === " "){
          return  console.log("no string available")
        }
        if(!str.indexOf(char)){
            return console.log(char) ;
        }
    }
}
firstNonRepeating(" ")