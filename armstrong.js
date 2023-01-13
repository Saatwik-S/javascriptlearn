const num = 9474;
let ans = 0;

const isArmstrong = (num) => {
    const len = num.toString().length;
    num.toString().split('').forEach(e => {
        ans += Math.pow(parseInt(e), len);
    });
    return ans === num;
}

console.log(isArmstrong(num) ? 'Armstrong' : 'Not Armstrong')

const isPrime = (num) => {
    if (num < 2) return true;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(num) ? 'Is a prime number' : 'Not a prime number')

