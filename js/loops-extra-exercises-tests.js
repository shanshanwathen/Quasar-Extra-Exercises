const exampleString = "World";
const exampleChars = ['a', 'b', 'c', 'd', 'e', 'f', 'r', 'h'];
const randomChar = exampleChars[Math.ceil(Math.random() * 7)];
const randomPositiveNumber = Math.ceil(Math.random() * 1022);
const randomInteger = Math.ceil(Math.random() * 999);

// Add up the Numbers from a Single Number
describe('addUp', function () {
    it('should be a defined function', function () {
        expect(typeof addUp).toBe('function');
    });
    it('should return a string when executed', function () {
        expect(typeof addUp(randomInteger)).toBe('number');
    });
    it('should return 10 when passed in 4', function () {
        expect(addUp(4)).toBe(10);
    });
    it('should return 91 when passed in 13', function () {
        expect(addUp(13)).toBe(91);
    });
    it('should return 180300 when passed in 600', function () {
        expect(addUp(600)).toBe(180300);
    });
    it('should return 77028 when passed in 392', function () {
        expect(addUp(392)).toBe(77028);
    });
    it('should return 1431 when passed in 53', function () {
        expect(addUp(53)).toBe(1431);
    });
    it('should return 91 when passed in 13', function () {
        expect(addUp(13)).toBe(91);
    });
    it('should return 402753 when passed in 897', function () {
        expect(addUp(897)).toBe(402753);
    });
    it('should return 276 when passed in 23', function () {
        expect(addUp(23)).toBe(276);
    });
    it('should return 500500 when passed in 1000', function () {
        expect(addUp(1000)).toBe(500500);
    });
    it('should return 272691 when passed in 738', function () {
        expect(addUp(738)).toBe(272691);
    });
    it('should return 5050 when passed in 100', function () {
        expect(addUp(100)).toBe(5050);
    });
    it('should return 428275 when passed in 925', function () {
        expect(addUp(925)).toBe(428275);
    });
    it('should return 1 when passed in 1', function () {
        expect(addUp(1)).toBe(1);
    });
    it('should return 499500 when passed in 999', function () {
        expect(addUp(999)).toBe(499500);
    });
    it('should return 15400 when passed in 175', function () {
        expect(addUp(175)).toBe(15400);
    });
    it('should return 6216 when passed in 111', function () {
        expect(addUp(111)).toBe(6216);
    });
});

// Count Instances of a Character in a String
describe('charCount', function() {
    it('should be a defined function', function() {
        expect(typeof charCount).toBe('function');
    });
    it('should return a number when executed', function() {
        expect(typeof charCount(randomChar, exampleString)).toBe('number');
    });
    it('should return 1 when passed in "a" and "edabit"', function () {
        expect(charCount('a', 'edabit')).toBe(1);
    });
    it('should return 4 when passed in "b" and "big fat bubble"', function() {
        expect(charCount('b', 'big fat bubble')).toBe(4);
    });
    it('should return 1 when passed in "c" and "Chamber of secrets"', function () {
        expect(charCount('c', 'Chamber of secrets')).toBe(1);
    });
    it('should return 7 when passed in "f" and "frank and his friends have offered five foxes for sale"', function () {
        expect(charCount('f', 'frank and his friends have offered five foxes for sale')).toBe(7);
    });
    it('should return 0 when passed in "x" and "edabit"', function () {
        expect(charCount('x', 'edabit')).toBe(0);
    });
    it('should return 6 when passed in "a" and "Adam and Eve bit the apple and found a snake"', function () {
        expect(charCount('a', 'Adam and Eve bit the apple and found a snake')).toBe(6);
    });
    it('should return 25 when passed in "s" and "sssssssssssssssssssssssss"', function () {
        expect(charCount('s', 'sssssssssssssssssssssssss')).toBe(25);
    });
    it('should return 2 when passed in "7" and "10795426697"', function () {
        expect(charCount('7', '10795426697')).toBe(2);
    });
});

// Return the Index of the First Vowel
describe('firstVowel', function () {
    it('should be a defined function',  function () {
        expect(typeof firstVowel).toBe('function');
    });
    it('should return a number when executed', function () {
        expect(typeof firstVowel(exampleString)).toBe('number');
    });
    it('should return 1 when passed in "hello"', function () {
        expect(firstVowel("hello")).toBe(1);
    });
    it('should return 0 when passed in "apple"', function () {
        expect(firstVowel("apple")).toBe(0);
    });
    it('should return 3 when passed in "string"', function () {
        expect(firstVowel("string")).toBe(3);
    });
    it('should return 3 when passed in "STRAWBERRY"', function () {
        expect(firstVowel("STRAWBERRY")).toBe(3);
    });
    it('should return 1 when passed in "MELON"', function () {
        expect(firstVowel("MELON")).toBe(1);
    });
    it('should return 1 when passed in "piNNEaPLE"', function () {
        expect(firstVowel("piNNEaPLE")).toBe(1);
    });
});

// Integer Digits Count
describe('count', function () {
    it('should be a defined function', function () {
        expect(typeof count).toBe('function');
    });
    it('should return a number when executed', function () {
        expect(typeof count(randomInteger)).toBe('number');
    });
    it('should return 1 when passed in 0', function () {
        expect(count(0)).toBe(1);
    });
    it('should return 3 when passed 318', function () {
        expect(count(318)).toBe(3);
    });
    it('should return 5 when passed -92563', function () {
        expect(count(-92563)).toBe(5);
    });
    it('should return 4 when passed 4666', function () {
        expect(count(4666)).toBe(4);
    });
    it('should return 6 when passed -314890', function () {
        expect(count(-314890)).toBe(6);
    });
    it('should return 6 when passed 654321', function () {
        expect(count(654321)).toBe(6);
    });
    it('should return 6 when passed 638476', function () {
        expect(count(638476)).toBe(6);
    });
    it('should return 5 when passed 12345', function () {
        expect(count(12345)).toBe(5);
    });
    it('should return 7 when passed 1289396', function () {
        expect(count(1289396)).toBe(7);
    });
    it('should return 7 when passed -1232323', function () {
        expect(count(-1232323)).toBe(7);
    });
    it('should return 8 when passed 12839393', function () {
        expect(count(12839393)).toBe(8);
    });
    it('should return 9 when passed -231273683', function () {
        expect(count(-231273683)).toBe(9);
    });
});

// Remove the Letters ABC
describe('removeABC', function () {
    it('should be a defined function', function () {
        expect(typeof removeABC).toBe('function');
    });
    it('should return "This might e  it hrd" when passed in "This might be a bit hard"', function () {
        expect(removeABC("This might be a bit hard")).toBe("This might e  it hrd");
    });
    it('should return "This is wesome" when passed in "This is awesome"', function () {
        expect(removeABC("This is awesome")).toBe("This is wesome");
    });
    it('should return null when passed in "hello world!"', function () {
        expect(removeABC("hello world!")).toBe(null);
    });
    it('should return "oding is fun!" when passed in "coding is fun!"', function () {
        expect(removeABC("coding is fun!")).toBe("oding is fun!");
    });
    it('should return null when passed in empty string', function () {
        expect(removeABC("")).toBe(null);
    });
});

// Reverse the Odd Length Words
describe('reverseOdd', function () {
    it('should be a defined function', function () {
        expect(typeof reverseOdd).toBe('function');
    });
    it('should return a string when executed', function () {
        expect(typeof reverseOdd(exampleString)).toBe('string');
    });
    it('should return "enO owt eerht four" when passed in "One two three four"', function () {
        expect(reverseOdd('One two three four')).toBe('enO owt eerht four');
    });
    it('should return "Make sure you only reverse words of odd length" when passed in "Make sure uoy only esrever sdrow of ddo length"', function () {
        expect(reverseOdd('Make sure uoy only esrever sdrow of ddo length')).toBe('Make sure you only reverse words of odd length');
    });
    it('should return "" when passed in ""', function () {
        expect(reverseOdd('')).toBe('');
    });
    it('should return "sananaB" when passed in "Bananas"', function () {
        expect(reverseOdd('Bananas')).toBe('sananaB');
    });
    it('should return "Even even even even even even even even even" when passed in "Even even even even even even even even even"', function () {
        expect(reverseOdd('Even even even even even even even even even')).toBe('Even even even even even even even even even');
    });
    it('should return "ddO ddo ddo ddo ddo ddo ddo ddo ddo ddo ddo" when passed in "Odd odd odd odd odd odd odd odd odd odd odd"', function () {
        expect(reverseOdd('Odd odd odd odd odd odd odd odd odd odd odd')).toBe('ddO ddo ddo ddo ddo ddo ddo ddo ddo ddo ddo');
    });
});

// Convert a Number to Base-2
describe('binary', function() {
    it('should be a defined function', function () {
        expect(typeof binary).toBe('function');
    });
    it('should return a string when executed', function () {
        expect(typeof binary(randomPositiveNumber)).toBe('string');
    });
    it('should return "1100100" when passed in 100', function () {
        expect(binary(100)).toBe('1100100');
    });
    it('should return "1" when passed in 1', function () {
        expect(binary(1)).toBe('1');
    });
    it('should return "0" when passed in 0', function () {
        expect(binary(0)).toBe('0');
    });
    it('should return "1000101" when passed in 69', function () {
        expect(binary(69)).toBe('1000101');
    });
    it('should return "1111111111" when passed in 1023', function () {
        expect(binary(1023)).toBe('1111111111');
    });
    it('should return "111111111" when passed in 511', function () {
        expect(binary(511)).toBe('111111111');
    });
    it('should return "1010011010" when passed in 666', function () {
        expect(binary(666)).toBe('1010011010');
    });
    it('should return "1111011" when passed in 123', function () {
        expect(binary(123)).toBe('1111011');
    });
});