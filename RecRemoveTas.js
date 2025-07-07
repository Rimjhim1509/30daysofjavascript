function RecursiveRtaS(inputString){
    if(inputString.length === 0){
        return "";
    }
    const firstChar = inputString[0];
    const restString = inputString.slice(1);
    if(firstChar==" " || firstChar== "\t"){

        return RecursiveRtaS(restString);

    }
    return firstChar + RecursiveRtaS(restString);

}
console.log(RecursiveRtaS("Rimj  him"));
