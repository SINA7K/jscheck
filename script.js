function reverseString(str) {
    return str.split('').reverse().join('');
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}



function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}



function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}


console.log(reverseString("hello")); 
console.log(countCharacters("hello"));
console.log(capitalizeWords("hello world")); 

console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMin([1, 2, 3, 4, 5])); // 1
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(filterArray([1, 2, 3, 4, 5], num => num > 2));

console.log(factorial(5)); 
console.log(isPrime(7));
console.log(fibonacci(6)); 
