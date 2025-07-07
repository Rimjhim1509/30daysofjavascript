const teas = {
    types: "Green",
    flavor : "mint and yellow",
    "color type" : "yellow or white",
    isFav : true,
    isHot: false,
    isFresh : true,
    ingredients :{
        mint :true,
        honey:true,
        sugar:false,
        lemon: true,
        caffeine : "low",
    }
};
teas.origin ="china";
teas.caffeine = "high";
console.log(teas);

// Method 1: Using the `in` operator
console.log("origin" in teas); // true

// Method 2: Using `hasOwnProperty` method
console.log(teas.hasOwnProperty("origin")); // true

// Method 3: Using `Object.prototype.hasOwnProperty.call`
console.log(Object.prototype.hasOwnProperty.call(teas, "origin")); // true

// Method 4: Checking directly with undefined (not recommended for all cases)
console.log(teas.origin !== undefined); //

