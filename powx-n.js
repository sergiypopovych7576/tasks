/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) {
        return 1;
    }

    if (Math.abs(x) === 1) {
        const belowZero = x < 0;
        const odd = n % 2;

        return belowZero && odd ? -1 : 1;
    }

    let res = x;
    if (n < 0) {
        res = 1 / x;
        x = res;
        n = Math.abs(n);
    }

    for (let i = 0; i < n - 1; i++) {
        res = res * x;
    }

    return +res.toFixed(7);
};

const first = myPow(2, 10);
console.log(`2^10: ${first}, which is${first === 1024 ? '' : ' not'} true`);

const second = myPow(2.1, 3);
console.log(`2.1^3: ${second}, which is${second === 9.26100 ? '' : ' not'} true`);

const third = myPow(2, -2);
console.log(`2^10: ${third}, which is${third === 0.25000 ? '' : ' not'} true`);

const fourth = myPow(4, 0);
console.log(`4^0: ${fourth}, which is${fourth === 1 ? '' : ' not'} true`)