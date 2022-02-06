const ROMAN_INT_DATA = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
}

const ROMAN_SUBSTRACTION_DATA = {
    I: ['V', 'X'],
    X: ['L', 'C'],
    C: ['D', 'M']
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let val = ROMAN_INT_DATA[s[i]];

        const substrictionRule = ROMAN_SUBSTRACTION_DATA[s[i]];
        if (substrictionRule && i + 1 !== s.length) {
            const next = s[i + 1];
            if (substrictionRule.indexOf(next) !== -1) {
                val = ROMAN_INT_DATA[s[i + 1]] - val;
                i += 1;
            }
        }
        total += val;
    }
    return total;
};

const three = romanToInt('III');
console.log(`III - ${three}, valid - ${three === 3}`);

const fifftyEight = romanToInt('LVIII');
console.log(`LVIII - ${fifftyEight}, valid - ${fifftyEight === 58}`);

const ninetyFour = romanToInt('MCMXCIV');
console.log(`MCMXCIV - ${ninetyFour}, valid - ${ninetyFour === 1994}`);
