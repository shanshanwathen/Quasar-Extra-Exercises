const randomInt = Math.floor(Math.random() * 7) - 3;
const randomPositiveNumber = Math.ceil(Math.random() * 100);
const randomBigInt = Math.floor(Math.random() * 100) - 50;


// Which Generation Are You?
describe('generation', function () {
    it('should be a defined function', function () {
        expect(typeof generation).toBe('function');
    });
    it('should return a string when executed', function () {
        expect(typeof generation(randomInt, 'm')).toBe('string');
    });
    it('should return "great grandfather" when passed in -3 and "m"', function () {
        expect(generation(-3, 'm')).toBe("great grandfather");
    });
    it('should return "daughter" when passed in 1 and "f"', function () {
        expect(generation(1, 'f')).toBe("daughter");
    });
    it('should return "great grandmother" when passed in -3 and "f"', function () {
        expect(generation(-3, 'f')).toBe("great grandmother");
    });
    it('should return "grandfather" when passed in -2 and "m"', function () {
        expect(generation(-2, 'm')).toBe("grandfather");
    });
    it('should return "grandmother" when passed in -2 and "f"', function () {
        expect(generation(-2, 'f')).toBe("grandmother");
    });
    it('should return "father" when passed in -1 and "m"', function () {
        expect(generation(-1, 'm')).toBe("father");
    });
    it('should return "mother" when passed in -1 and "f"', function () {
        expect(generation(-1, 'f')).toBe("mother");
    });
    it('should return "me!" when passed in 0 and "f"', function () {
        expect(generation(0, 'f')).toBe("me!");
    });
    it('should return "son" when passed in 1 and "m"', function () {
        expect(generation(1, 'm')).toBe("son");
    });
    it('should return "daughter" when passed in 1 and "f"', function () {
        expect(generation(1, 'f')).toBe("daughter");
    });
    it('should return "grandson" when passed in 2 and "m"', function () {
        expect(generation(2, 'm')).toBe("grandson");
    });
    it('should return "granddaughter" when passed in 2 and "f"', function () {
        expect(generation(2, 'f')).toBe("granddaughter");
    });
    it('should return "great grandson" when passed in 3 and "m"', function () {
        expect(generation(3, 'm')).toBe("great grandson");
    });
    it('should return "great granddaughter" when passed in 3 and "f"', function () {
        expect(generation(3, 'f')).toBe("great granddaughter");
    });
    it('should return "me!" when passed in 0 and "m"', function () {
        expect(generation(0, 'm')).toBe("me!");
    });
});

// Say "Hello" Say "Bye"
describe('sayHelloBye', function () {
    it('should be a defined function', function () {
        expect(typeof sayHelloBye).toBe('function');
    });
    it('should return a string when executed', function () {
        expect(typeof sayHelloBye('jose', 1)).toBe('string');
    });
    it('should return "Hello Jose" when passed in "jose" and 1', function () {
        expect(sayHelloBye("jose", 1)).toBe("Hello Jose");
    });
    it('should return "Hello Barry" when passed in "barry" and 1', function () {
        expect(sayHelloBye("barry", 1)).toBe("Hello Barry");
    });
    it('should return "Bye Jon" when passed in "jon" and 0', function () {
        expect(sayHelloBye("jon", 0)).toBe("Bye Jon");
    });
    it('should return "Hello Khloy" when passed in "khloy" and 1', function () {
        expect(sayHelloBye("khloy", 1)).toBe("Hello Khloy");
    });
    it('should return "Bye Sara" when passed in "sara" and 0', function () {
        expect(sayHelloBye("sara", 0)).toBe("Bye Sara");
    });
    it('should return "Bye Jon" when passed in "Jon" and 0', function () {
        expect(sayHelloBye("Jon", 0)).toBe("Bye Jon");
    });
    it('should return "Hello Matt" when passed in "Matt" and 1', function () {
        expect(sayHelloBye("Matt", 1)).toBe("Hello Matt");
    });
});

// Tile Teamwork Tactics
describe('possibleBonus', function () {
    it('should be a defined function', function () {
        expect(typeof possibleBonus).toBe('function');
    });
    it('should return a boolean when executed', function () {
        expect(typeof possibleBonus(randomPositiveNumber, randomPositiveNumber)).toBe('boolean');
    });
    it('should return true when passed in 3 and 7', function () {
        expect(possibleBonus(3, 7)).toBe(true);
    });
    it('should return true when passed in 0 and 6', function () {
        expect(possibleBonus(0, 6)).toBe(true);
    });
    it('should return true when passed in 1 and 6', function () {
        expect(possibleBonus(1, 6)).toBe(true);
    });
    it('should return true when passed in 2 and 6', function () {
        expect(possibleBonus(2, 6)).toBe(true);
    });
    it('should return true when passed in 3 and 6', function () {
        expect(possibleBonus(3, 6)).toBe(true);
    });
    it('should return true when passed in 4 and 6', function () {
        expect(possibleBonus(4, 6)).toBe(true);
    });
    it('should return true when passed in 5 and 6', function () {
        expect(possibleBonus(5, 6)).toBe(true);
    });
    it('should return true when passed in 23 and 27', function () {
        expect(possibleBonus(23, 27)).toBe(true);
    });
    it('should return false when passed in 6 and 6', function () {
        expect(possibleBonus(6, 6)).toBe(false);
    });
    it('should return false when passed in 7 and 6', function () {
        expect(possibleBonus(7, 6)).toBe(false);
    });
    it('should return false when passed in 1 and 9', function () {
        expect(possibleBonus(1, 9)).toBe(false);
    });
    it('should return false when passed in 5 and 3', function () {
        expect(possibleBonus(5, 3)).toBe(false);
    });
});

// Integer in Range?
describe('intWithinBounds', function () {
    it('should be a defined function', function () {
        expect(typeof intWithinBounds).toBe('function');
    });
    it('should return a boolean when executed', function () {
        expect(typeof intWithinBounds(randomBigInt, randomBigInt, randomBigInt)).toBe('boolean');
    });
    it('should return true when passed in 3, 1, 9', function () {
        expect(intWithinBounds(3, 1, 9)).toBe(true);
    });
    it('should return true when passed in -5, -10, 6', function () {
        expect(intWithinBounds(-5, -10, 6)).toBe(true);
    });
    it('should return true when passed in 10, 9, 11', function () {
        expect(intWithinBounds(10, 9, 11)).toBe(true);
    });
    it('should return true when passed in -3, -5, -2', function () {
        expect(intWithinBounds(-3, -5, -2)).toBe(true);
    });
    it('should return true when passed in -3, -10, 10', function () {
        expect(intWithinBounds(-3, -10, 10)).toBe(true);
    });
    it('should return true when passed in 0, -3, 3', function () {
        expect(intWithinBounds(0, -3, 3)).toBe(true);
    });
    it('should return true when passed in 0, 0, 1', function () {
        expect(intWithinBounds(0, 0, 1)).toBe(true);
    });
    it('should return true when passed in 7, 7, 12', function () {
        expect(intWithinBounds(7, 7, 12)).toBe(true);
    });
    it('should return false when passed in 6, 1, 6', function () {
        expect(intWithinBounds(6, 1, 6)).toBe(false);
    });
    it('should return false when passed in 4.5, 3, 8', function () {
        expect(intWithinBounds(4.5, 3, 8)).toBe(false);
    });
    it('should return false when passed in 4, 0, 0', function () {
        expect(intWithinBounds(4, 0, 0)).toBe(false);
    });
    it('should return false when passed in 6.3, 2, 6', function () {
        expect(intWithinBounds(6.3, 2, 6)).toBe(false);
    });
    it('should return false when passed in 6.3, 2, 10', function () {
        expect(intWithinBounds(6.3, 2, 10)).toBe(false);
    });
    it('should return false when passed in 9, 2, 3', function () {
        expect(intWithinBounds(9, 2, 3)).toBe(false);
    });
    it('should return false when passed in 9, 9, 9', function () {
        expect(intWithinBounds(9, 9, 9)).toBe(false);
    });
    it('should return false when passed in -3, -5, -3', function () {
        expect(intWithinBounds(-3, -5, -3)).toBe(false);
    });
});

// Perimeters with a Catch
describe('perimeter', function () {
    it('should be a defined function', function () {
        expect(typeof perimeter).toBe('function');
    });
    it('should return a number when executed', function () {
        expect(typeof perimeter('s', randomPositiveNumber)).toBe('number');
    });
    it('should return 4 when passed in "s" and 1', function () {
        expect(perimeter('s', 1)).toBe(4);
    });
    it('should return 16 when passed in "s" and 4', function () {
        expect(perimeter('s', 4)).toBe(16);
    });
    it('should return 36 when passed in "s" and 9', function () {
        expect(perimeter('s', 9)).toBe(36);
    });
    it('should return 52 when passed in "s" and 13', function () {
        expect(perimeter('s', 13)).toBe(52);
    });
    it('should return 120 when passed in "s" and 30', function () {
        expect(perimeter('s', 30)).toBe(120);
    });
    it('should return 6.28 when passed in "c" and 1', function () {
        expect(perimeter('c', 1)).toBe(6.28);
    });
    it('should return 25.12 when passed in "c" and 4', function () {
        expect(perimeter('c', 4)).toBe(25.12);
    });
    it('should return 56.52 when passed in "c" and 9', function () {
        expect(perimeter('c', 9)).toBe(56.52);
    });
    it('should return 81.64 when passed in "c" and 13', function () {
        expect(perimeter('c', 13)).toBe(81.64);
    });
    it('should return 188.4 when passed in "c" and 30', function () {
        expect(perimeter('c', 30)).toBe(188.4);
    });
});