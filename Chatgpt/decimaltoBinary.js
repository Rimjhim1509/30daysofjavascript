function decimalToBinary(decimal) {
    if (decimal === 0) 
        return "0";
    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

// Example usage:
const decimalNumber = 0;
console.log(`Binary of ${decimalNumber} is ${decimalToBinary(decimalNumber)}`);
