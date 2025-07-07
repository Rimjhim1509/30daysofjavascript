function isVowel(character){
    
    let vowels = "aeiou"
    if(vowels.indexOf(character.toLowerCase())!==-1){

        return true;

    }
    else{
        return false
    }
}
    function countVowel(string){
         let count =0;
        for (let i =0; i<string.length; i++){
           
            if(isVowel(string[i])){
                 count+=1;
            }
            

        }
        return count;
    }
    
    
console.log(countVowel("rimjhim"));

