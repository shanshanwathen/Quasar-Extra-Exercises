/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */


/**
 * Filter out Strings from an Array
 * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
 *
 * Examples
 *
 * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 *
 * Notes
 * Zero is a non-negative integer.
 * The given array only has integers and strings.
 * Numbers in the array should not repeat.
 * The original order must be maintained.
 */


/**
 * Is the Average of All Elements a Whole Number?
 * Create a function named isAvgWhole that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
 *
 * Examples
 *
 * >> isAvgWhole([1, 3]) ➞ true
 * >> isAvgWhole([1, 2, 3, 4]) ➞ false
 * >> isAvgWhole([1, 5, 6]) ➞ true
 * >> isAvgWhole([1, 1, 1]) ➞ true
 * >> isAvgWhole([9, 2, 2, 5]) ➞ false
 */


/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */


/**
 * Scrabble Hand
 * Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.
 *
 * Here's an example hand:
 *
 * [
 *      { tile: "N", score: 1 },
 *      { tile: "K", score: 5 },
 *      { tile: "Z", score: 10 },
 *      { tile: "X", score: 8 },
 *      { tile: "D", score: 2 },
 *      { tile: "A", score: 1 },
 *      { tile: "E", score: 1 }
 * ]
 *
 * The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.
 *
 * Examples
 *
 * >> maximumScore([
 *      { tile: "N", score: 1 },
 *      { tile: "K", score: 5 },
 *      { tile: "Z", score: 10 },
 *      { tile: "X", score: 8 },
 *      { tile: "D", score: 2 },
 *      { tile: "A", score: 1 },
 *      { tile: "E", score: 1 }
 *    ]) ➞ 28
 *
 * >> maximumScore([
 *      { tile: "B", score: 2 },
 *      { tile: "V", score: 4 },
 *      { tile: "F", score: 4 },
 *      { tile: "U", score: 1 },
 *      { tile: "D", score: 2 },
 *      { tile: "O", score: 1 },
 *      { tile: "U", score: 1 }
 *    ]) ➞ 15
 *
 * Notes
 * Each tile is represented as an object with two keys: tile and score.
 */


/**
 * Converting Objects to Arrays
 * Write a function named toArray that converts an object into an array, where each element represents a key-value pair in the form of an array.
 *
 * Examples
 *
 * >> toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
 * >> toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
 * >> toArray({}) ➞ []
 *
 * Notes
 * Return an empty array if the object is empty.
 */


/**
 * Array of Multiples
 * Create a function named arrayOfMultiples that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
 *
 * Examples
 *
 * >> arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 * >> arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 * >> arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 *
 * Notes
 * Notice that num is also included in the returned array.
 */


/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */


/**
 * Special Arrays
 * An array is special if every even index contains an even number and every odd index contains an odd number.
 * Create a function named isSpecialArray that returns true if an array is special, and false otherwise.
 *
 * Examples
 *
 * >> isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
 *    // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
 * >> isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
 *    // Index 2 has an odd number 9.
 * >> isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
 *    // Index 3 has an even number 8.
 */


/**
 * Remove Duplicates from an Array
 * Create a function named removeDuplicates that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
 *
 * Examples
 * >> removeDuplicates([1, 0, 1, 0]) ➞ [1, 0]
 * >> removeDuplicates(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
 * >> removeDuplicates(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
 *
 * Notes
 * Tests contain arrays with both strings and numbers.
 * Tests are case sensitive.
 * Each array item is unique.
 */


/**
 * Lowercase and Uppercase Map
 * Create a function named mapping that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
 *
 * Examples
 *
 * >> mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
 * >> mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
 * >> mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
 *
 * Notes
 * All of the letters in the input list will always be lowercase.
 */


/**
 * Can You Spare a Square?
 * Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?
 *
 * Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.
 *
 * Create a function named tpChecker that will receive an object with two key/values:
 *
 *   people — Number of people in the household.
 *   tp — Number of rolls.
 *
 * Return a statement telling the user if they need to buy more TP!
 *
 * Examples
 *
 * >> tpChecker({ people: 4, tp: 1 }) ➞ "Your TP will only last 2 days, buy more!"
 * >> tpChecker({ people: 3, tp: 20 }) ➞ "Your TP will last 58 days, no need to panic!"
 * >> tpChecker({ people: 4, tp: 12 }) ➞ "Your TP will last 26 days, no need to panic!"
 */


/**
 * Get Student Top Notes
 * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
 * If the student does not have notes then let's assume their top note is equal to 0.
 *
 * Examples
 *
 * >> getStudentTopNotes([
 *      {
 *         id: 1,
 *         name: "Jacek",
 *         notes: [5, 3, 4, 2, 5, 5]
 *       },
 *      {
 *         id: 2,
 *         name: "Ewa",
 *         notes: [2, 3, 3, 3, 2, 5]
 *       },
 *      {
 *         id: 3,
 *         name: "Zygmunt",
 *         notes: [2, 2, 4, 4, 3, 3]
 *       }
 *    ]) ➞ [5, 5, 4]
 */


/**
 * The Frugal Gentleman
 * Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
 *
 * Given an array of wine objects, write a function named chosenWine that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.
 *
 * Examples
 *
 * >> chosenWine([
 *        { name: "Wine A", price: 8.99 },
 *        { name: "Wine 32", price: 13.99 },
 *        { name: "Wine 9", price: 10.99 }
 *    ]) ➞ "Wine 9"
 * >> chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"
 * >> chosenWine([]) ➞ null
 *
 * Notes
 * All wines will be different prices, so there is no confusion in the ordering.
 */


/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 */


/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */



/**
 * Hashes and Pluses
 * Create a function named hashPlusCount that returns the number of hashes and pluses in a string.
 *
 * Examples
 *
 * hashPlusCount("###+") ➞ [3, 1]
 * hashPlusCount("##+++#") ➞ [3, 3]
 * hashPlusCount("#+++#+#++#") ➞ [4, 6]
 * hashPlusCount("") ➞ [0, 0]
 *
 * Notes
 * Return [0, 0] for an empty string.
 * Return in the order of [hashes, pluses].
 */


/**
 * Amplify the Multiples of Four
 * In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).
 *
 * Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).
 *
 * Given a higher bound num, create a function named amplify that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.
 *
 * Examples
 *
 * amplify(4) ➞ [1, 2, 3, 40]
 * // Create a sequence from 1 to 4
 * // 4 is exactly divisible by 4, so it will be 4*10 = 40
 *
 * amplify(3) ➞ [1, 2, 3]
 * // Create a sequence from 1 to 3
 * // There are no numbers that can be exactly divided by 4
 *
 * amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
 * // Create a sequence from 1 to 25
 * // The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.
 *
 * Notes
 * The given parameter num will always be equal to or greater than 1.
 * Remember to include the num as the higher bound of the sequence (see the Examples) above.
 * A number a amplified by a factor b can also be read as: a * b.
 * A number a is exactly divisible by a number b when the remainder of the division a / b is equal to 0.
 */


/**
 * Record Temperatures
 * You are given two arrays that each contain data that represents the min and max weather temperatures for each day of the week.You are given two arrays that each contain data that represents the min and max weather temperatures for each day of the week.
 *
 * The records array contains the all-time record low/high temperatures for that day of the week.
 *
 *   [[record low, record high], ...]
 *
 * The current week array contains the daily low/high temperatures for each day of the current week.
 *
 *   [[daily low, daily high], ...]
 *
 * A daily high temperature is considered a new record high if it is higher than the record high for that day of the week. A daily low temperature is considered a new record low if it is lower than the record low for that day of the week.
 *
 * Create a function named recordTemps to compare the daily low/high temperatures of the current week to the record lows/highs and return an array with the updated record temperatures.
 *
 *    There may be multiple record temperatures in a week.
 *    If there are no broken records return the original records array.
 *
 * Examples
 *
 * //             sun       mon      tues       wed      thur      fri       sat
 * recordTemps([[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]],
 *             [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]])
 *
 * ➞           [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]
 *
 * The previous record low for Monday was 24. The current week's low for Monday was 19. So 19 replaces 24 as Monday's new record low.
 *
 * Notes
 * There won't be a record high and record low set on the same day.
 * Index 0 will always be the low and index 1 will always be the high [low, high].
 * For reference these temps are °F but you do not need to convert any temperatures.
 */


/**
 * Index Shuffle
 * Write a function named indexShuffle that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.
 *
 * To illustrate:
 *
 * indexShuffle("abcd") ➞ "acbd"
 * // "ac" (even-indexed) + "bd" (odd-indexed)
 *
 * Examples
 *
 * indexShuffle("abcdefg") ➞ "acegbdf"
 * indexShuffle("holiday") ➞ "hldyoia"
 * indexShuffle("maybe") ➞ "myeab"
 */


/**
 * Instant JAZZ
 * Create a function named jazzify which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.
 *
 * Examples
 *
 * jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
 * jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
 * jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
 * jazzify([]) ➞ []
 *
 * Notes
 * Return an empty array if the given array is empty.
 */


/**
 * Purge and Organize
 * Given an array of numbers, write a function named uniqueSort that returns an array that...
 *   1. Has all duplicate elements removed.
 *   2. Is sorted from least to greatest value.
 *
 * Examples
 *
 * uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
 * uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
 * uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
 */


/**
 * Capitalize the First Letter of Each Word
 * Create a function named makeTitle that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
 *
 * Examples
 *
 * makeTitle("This is a title") ➞ "This Is A Title"
 * makeTitle("capitalize every word") ➞ "Capitalize Every Word"
 * makeTitle("I Like Pizza") ➞ "I Like Pizza"
 * makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
 *
 * Notes
 * Some words may contain more than one uppercase letter (see example #4).
 */


/**
 * Online Shopping
 * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
 *
 * Examples
 *
 * freeShipping({ Shampoo: 5.99, Rubber_Ducks: 15.99 }) ➞ false
 * freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
 * freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 }) ➞ true
 *
 * Notes
 * Ignore tax or additional fees when calculating the total order cost.
 */


/**
 * How Good is Your Name?
 * Create a function named nameScore that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available below. Add up the letters of your name to get the total score.
 *
 * const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
 * "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
 * "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
 * "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
 *
 * Return your result as per the following rules:
 *
 * score <= 60:   "NOT TOO GOOD"
 * 61 <= score <= 300:  "PRETTY GOOD"
 * 301 <= score <= 599:  "VERY GOOD"
 * score >= 600:  "THE BEST"
 *
 * Examples
 *
 * nameScore("MUBASHIR") ➞ "THE BEST"
 * nameScore("YOU") ➞ "VERY GOOD"
 * nameScore("MATT") ➞ "THE BEST"
 * nameScore("PUBG") ➞ "NOT TOO GOOD"
 *
 * Notes
 * All names will be uppercase
 */


/**
 * Burglary Series (06): Convert to Number
 * You prepare a list to send to the insurance company. As you finish, you notice you misformatted it.
 * Write a function named convertToNumber that takes in an object with at least one key/value pair, convert all the values to numbers.
 *
 * Examples
 *
 * convertToNumber({ piano: "200" }) ➞ { piano: 200 }
 * convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }
 * convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
 */


/**
 * Frequency Distribution
 *
 * Create a function named getFrequencies that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
 *
 * Examples
 *
 * getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
 * getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
 * getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
 * getFrequencies([]) ➞ {}
 *
 * Notes
 * If given an empty array, return an empty object (see example #4).
 * The object should be in the same order as in the input array.
 */

