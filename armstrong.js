const num = 9474;
let ans = 0;
const len = num.toString().length;
num.toString().split('').forEach(e => {
    const converted = parseInt(e);
    let tempAns = 1;
    for(let i = 0; i <  len; i++) tempAns *= converted;
    ans += tempAns;
});

console.log(ans === num ? 'Armstrong' : 'Not Armstrong')

const isPrime  = (num) => {
    if(num < 2) return true;
    for(let i = 2; i <= parseInt(Math.sqrt(num)) ;i++){
        if(num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(num) ? 'Is a prime number' : 'Not a prime number')

