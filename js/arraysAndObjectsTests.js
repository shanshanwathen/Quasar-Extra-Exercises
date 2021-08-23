const exampleString = "World";
const exampleChars = ['a', 'b', 'c', 'd', 'e', 'f', 'r', 'h'];
const randomChar = exampleChars[Math.ceil(Math.random() * 7)];
const randomPositiveNumber = Math.ceil(Math.random() * 1022);
const randomInteger = Math.ceil(Math.random() * 999);
const exampleNumbersArr = [-12, -45, 87, 9.35, 54, 999, 36.97];
const exampleArray = ['hello', 9, 43, 8, 'world', 'my', 4, 'watermelon'];

// Find the Smallest and Biggest Numbers
describe('minMax', function() {
    it('should be a defined function', function () {
        expect(typeof minMax).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(minMax(exampleNumbersArr))).toBe(true);
    });
    it('should return an array with 2 elements', function () {
        expect(minMax(exampleNumbersArr).length).toBe(2);
    });
    it('should return [1, 54] when passed in [14, 35, 6, 1, 34, 54]', function () {
        expect(minMax([14, 35, 6, 1, 34, 54])).toEqual([1, 54]);
    });
    it('should return [1.346, 1.8734] when passed in [1.346, 1.6532, 1.8734, 1.8723]', function () {
        expect(minMax([1.346, 1.6532, 1.8734, 1.8723])).toEqual([1.346, 1.8734]);
    });
    it('should return [0.2345, 0.984] when passed in [0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]', function () {
        expect(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345])).toEqual([0.2345, 0.984]);
    });
    it('should return [13, 98] when passed in [13, 72, 98, 43, 24, 65, 31]', function () {
        expect(minMax([13, 72, 98, 43, 24, 65, 31])).toEqual([13, 98]);
    });
    it('should return [-54, -21] when passed in [-54, -23, -54, -21]', function () {
        expect(minMax([-54, -23, -54, -21])).toEqual([-54, -21]);
    });
    it('should return [-0.6834, 0.5632] when passed in [-0.473, -0.6834, -0.1287, 0.5632]', function () {
        expect(minMax([-0.473, -0.6834, -0.1287, 0.5632])).toEqual([-0.6834, 0.5632]);
    });
    it('should return [0, 0] when passed in [0, 0, 0, 0]', function () {
        expect(minMax([0, 0, 0, 0])).toEqual([0, 0]);
    });
});

// Filter out Strings from an Array
describe('filterArray', function () {
    it('should be a defined function', function () {
        expect(typeof filterArray).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(filterArray(exampleArray))).toBe(true);
    });
    it('should return [1, 2] when passed in [1, 2, "a", "b"]', function () {
        expect(filterArray([1, 2, "a", "b"])).toEqual([1, 2]);
    });
    it('should return [1, 0, 15] when passed in [1, "a", "b", 0, 15]', function () {
        expect(filterArray([1, "a", "b", 0, 15])).toEqual([1, 0, 15]);
    });
    it('should return [1, 2, 123] when passed in [1, 2, "aasf", "1", "123", 123]', function () {
        expect(filterArray([1, 2, "aasf", "1", "123", 123])).toEqual([1, 2, 123]);
    });
    it('should return [4, 6] when passed in ["jsyt", 4, "yt", 6]', function () {
        expect(filterArray(["jsyt", 4, "yt", 6])).toEqual([4, 6]);
    });
    it('should return [5, 8, 9] when passed in ["r", 5, "y", "e", 8, 9]', function () {
        expect(filterArray(["r", 5, "y", "e", 8, 9])).toEqual([5, 8, 9]);
    });
    it('should return an empty array when passed in ["a", "e", "i", "o", "u"]', function () {
        expect(filterArray(["a", "e", "i", "o", "u"])).toEqual([]);
    });
    it('should return [4, 5] when passed in [4, "z", "f", 5]', function () {
        expect(filterArray([4, "z", "f", 5])).toEqual([4, 5]);
    });
    it('should return [123] when passed in ["abc", 123]', function () {
        expect(filterArray(["abc", 123])).toEqual([123]);
    });
    it('should return [567] when passed in ["$%^", 567, "&&&"]', function () {
        expect(filterArray(["$%^", 567, "&&&"])).toEqual([567]);
    });
    it('should return [43, 76, 88] when passed in ["w", "r", "u", 43, "s", "a", 76, "d", 88]', function () {
        expect(filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88])).toEqual([43, 76, 88]);
    });
});

// Is the Average of All Elements a Whole Number?
describe('isAvgWhole', function () {
    it('should be a defined function', function () {
        expect(typeof isAvgWhole).toBe('function');
    });
    it('should return a boolean when executed', function () {
        expect(typeof isAvgWhole(exampleNumbersArr)).toBe('boolean');
    });
    it('should return false when passed in [3, 5, 9]', function () {
        expect(isAvgWhole([3, 5, 9])).toBe(false);
    });
    it('should return true when passed in [1, 1, 1, 1]', function () {
        expect(isAvgWhole([1, 1, 1, 1])).toBe(true);
    });
    it('should return true when passed in [1, 2, 3, 4, 5]', function () {
        expect(isAvgWhole([1, 2, 3, 4, 5])).toBe(true);
    });
    it('should return false when passed in [5, 2, 4]', function () {
        expect(isAvgWhole([5, 2, 4])).toBe(false);
    });
    it('should return false when passed in [11, 22]', function () {
        expect(isAvgWhole([11, 22])).toBe(false);
    });
    it('should return false when passed in [4, 1, 7, 9, 2, 5, 7, 2, 4]', function () {
        expect(isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4])).toBe(false);
    });
});

// Drink Sorting
const drinks1 = [
    {name: 'lemonade', price: 90},
    {name: 'lime', price: 432},
    {name: 'peach', price: 23}
];

const sorted1 = [
    {name: 'peach', price: 23},
    {name: 'lemonade', price: 90},
    {name: 'lime', price: 432}
];

const drinks2 = [
    {name: 'water', price: 120},
    {name: 'lime', price: 80},
    {name: 'peach', price: 90}
];

const sorted2 = [
    {name: 'lime', price: 80},
    {name: 'peach', price: 90},
    {name: 'water', price: 120}
];
describe('sortDrinkByPrice', function () {
    it('should be a defined function', function () {
        expect(typeof 'sortDrinkByPrice').toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(sortDrinkByPrice(drinks1))).toBe(true);
    });
    it('should return [{name: \'peach\', price: 23}, {name: \'lemonade\', price: 90}, {name: \'lime\', price: 432}] when passed in [{name: \'lemonade\', price: 90}, {name: \'lime\', price: 432}, {name: \'peach\', price: 23}]', function () {
        expect(sortDrinksByPrice(drinks1)).toEqual(sorted1);
    });
    it('should return [{name: \'lime\', price: 80}, {name: \'peach\', price: 90}, {name: \'water\', price: 120}] when passed in [{name: \'water\', price: 120}, {name: \'lime\', price: 80}, {name: \'peach\', price: 90}]', function () {
        expect(sortDrinksByPrice(drinks2)).toEqual(sorted2);
    });
});

// Scrabble Hand
describe('maximumScore', function () {
    it('should be a defined function', function () {
        expect(typeof maximumScore).toBe('function');
    });
    it('should return a number when executed', function () {
        expect(typeof maximumScore([
            { tile: "B", score: 2 },
            { tile: "V", score: 4 },
            { tile: "F", score: 4 },
            { tile: "U", score: 1 },
            { tile: "D", score: 2 },
            { tile: "O", score: 1 },
            { tile: "U", score: 1 }
        ])).toBe('number');
    });
    it('should return 28 when passed in [{tile: \'N\', score: 1}, {tile: \'K\', score: 5},  {tile: \'Z\', score: 10}, {tile: \'X\', score: 8}, {tile: \'D\', score: 2}, {tile: \'A\', score: 1}, {tile: \'E\', score: 1}]', function () {
        expect(maximumScore([{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}])).toBe(28);
    });
    it('should return 15 when passed in [{tile: \'B\', score: 2}, {tile: \'V\', score: 4},  {tile: \'F\', score: 4}, {tile: \'U\', score: 1}, {tile: \'D\', score: 2}, {tile: \'O\', score: 1}, {tile: \'U\', score: 1}]', function () {
        expect(maximunScore([{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}])).toBe(15);
    });
    it('should return 18 when passed in [{tile: \'M\', score: 3}, {tile: \'Q\', score: 10},  {tile: \'O\', score: 1}, {tile: \'E\', score: 1}, {tile: \'E\', score: 1}, {tile: \'I\', score: 1}, {tile: \'A\', score: 1}]', function () {
        expect(maximunScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}])).toBe(18);
    });
    it('should return 7 when passed in [{tile: \'A\', score: 1}, {tile: \'E\', score: 1},  {tile: \'O\', score: 1}, {tile: \'E\', score: 1}, {tile: \'E\', score: 1}, {tile: \'I\', score: 1}, {tile: \'A\', score: 1}]', function () {
        expect(maximunScore([{tile: 'A', score: 1}, {tile: 'E', score: 1},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}])).toBe(7);
    });
});

// Converting Objects to Arrays
describe('toArray',  function () {
    it('should be a defined function', function () {
        expect(typeof toArray).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray({})).toBe(true);
    });
    it('should return [["a", 1], ["b", 2]] when passed in { a: 1, b: 2 }', function () {
        expect(toArray({ a: 1, b: 2 })).toEqual([["a", 1], ["b", 2]]);
    });
    it('should return [["foo", 33], ["bar", 45], ["baz", 67]] when passed in { foo: 33, bar: 45, baz: 67 }', function () {
        expect(toArray({ foo: 33, bar: 45, baz: 67 })).toEqual([["foo", 33], ["bar", 45], ["baz", 67]]);
    });
    it('should return [["shrimp", 15], ["tots", 12]] when passed in { shrimp: 15, tots: 12 }', function () {
        expect(toArray({ shrimp: 15, tots: 12 })).toEqual([["shrimp", 15], ["tots", 12]]);
    });
    it('should return an empty array when passed in an empty object', function () {
        expect(toArray({})).toEqual([]);
    });
});

