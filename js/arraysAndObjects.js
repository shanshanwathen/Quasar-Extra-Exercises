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