function removeTAS(inputString){
    let store = "";
    for(let i=0;i<inputString.length;i++){
       let char = inputString[i];
        if(char!==" " && char!=="\t"){
            store +=char; 
        } 
       
    }
    return store;

}
console.log(removeTAS(" Rimj    \t him  "));

