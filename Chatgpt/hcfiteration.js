function findHCF(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
 
console.log(findHCF(70,15)); // Output: 6