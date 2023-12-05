// 1. Write a function that calculates the factorial of a given number. 

function factorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}


// Now let us test if it works- yayy..it works
console.log(factorial(6));