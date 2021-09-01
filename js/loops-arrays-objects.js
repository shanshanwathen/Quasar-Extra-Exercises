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
 *
 */