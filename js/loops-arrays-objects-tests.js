const exampleString = "World";
const exampleChars = ['a', 'b', 'c', 'd', 'e', 'f', 'r', 'h'];
const randomInteger = Math.ceil(Math.random() * 999);
const randomNumber = Math.floor(Math.random() * 10);
const exampleNumbersArr = [-12, -45, 87, 9.35, 54, 999, 36.97, -12, 9.35];
const exampleNames = ['MUBASHIR', 'MATT', 'PAKISTAN', 'AIRFORCE', 'ROBBY', 'BILL GATES', 'YOU', 'JAMES', 'KENNETH', 'DOUGLAS'];



// Hashes and Pluses
describe('hashPlusCount', function () {
    it('should be a defined function', function () {
        expect(typeof hashPlusCount).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(hashPlusCount(""))).toBe(true);
    });
    it('should return [4, 0] when passed in "####"', function () {
        expect(hashPlusCount("####")).toEqual([4, 0]);
    });
    it('should return [1, 0] when passed in "#"', function () {
        expect(hashPlusCount("#")).toEqual([1, 0]);
    });
    it('should return [0, 7] when passed in "+++++++"', function () {
        expect(hashPlusCount("+++++++")).toEqual([0, 7]);
    });
    it('should return [0, 2] when passed in "++"', function () {
        expect(hashPlusCount("++")).toEqual([0, 2]);
    });
    it('should return [2, 2] when passed in "#+#+"', function () {
        expect(hashPlusCount("#+#+")).toEqual([2, 2]);
    });
    it('should return [3, 1] when passed in "###+"', function () {
        expect(hashPlusCount("###+")).toEqual([3, 1]);
    });
    it('should return [3, 3] when passed in "##+++#"', function () {
        expect(hashPlusCount("##+++#")).toEqual([3, 3]);
    });
    it('should return [4, 6] when passed in "#+++#+#++#"', function () {
        expect(hashPlusCount("#+++#+#++#")).toEqual([4, 6]);
    });
    it('should return [0, 0] when passed in ""', function () {
        expect(hashPlusCount("")).toEqual([0, 0]);
    });
});

// Amplify the Multiples of Four
describe('amplify', function () {
    it('should be a defined function', function () {
        expect(typeof amplify).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(amplify(randomInteger))).toBe(true);
    });
    it('should return [1] when passed in 1', function () {
        expect(amplify(1)).toEqual([1]);
    });
    it('should return [1, 2, 3, 40] when passed in 4', function () {
        expect(amplify(4)).toEqual([1, 2, 3, 40]);
    });
    it('should return [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25] when passed in 25', function () {
        expect(amplify(25)).toEqual([1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]);
    });
    it('should return [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000] when passed in 100', function () {
        expect(amplify(100)).toEqual([1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000]);
    });
    it('should return [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000, 101, 102, 103, 1040, 105, 106, 107, 1080, 109, 110, 111, 1120, 113, 114, 115, 1160, 117, 118, 119, 1200, 121, 122, 123, 1240, 125, 126, 127, 1280, 129, 130, 131, 1320, 133, 134, 135, 1360, 137, 138, 139, 1400, 141, 142, 143, 1440, 145, 146, 147, 1480, 149, 150, 151, 1520, 153, 154, 155, 1560, 157, 158, 159, 1600, 161, 162, 163, 1640, 165, 166, 167, 1680, 169, 170, 171, 1720, 173, 174, 175, 1760, 177, 178, 179, 1800, 181, 182, 183, 1840, 185, 186, 187, 1880, 189, 190, 191, 1920, 193, 194, 195, 1960, 197, 198, 199, 2000, 201, 202, 203, 2040, 205, 206, 207, 2080, 209, 210, 211, 2120, 213, 214, 215, 2160, 217, 218, 219, 2200, 221, 222, 223, 2240, 225, 226, 227, 2280, 229, 230, 231, 2320, 233, 234, 235, 2360, 237, 238, 239, 2400, 241, 242, 243, 2440, 245, 246, 247, 2480, 249, 250, 251, 2520, 253, 254, 255, 2560, 257, 258, 259, 2600, 261, 262, 263, 2640, 265, 266, 267, 2680, 269, 270, 271, 2720, 273, 274, 275, 2760, 277, 278, 279, 2800, 281, 282, 283, 2840, 285, 286, 287, 2880, 289, 290, 291, 2920, 293, 294, 295, 2960, 297, 298, 299, 3000, 301, 302, 303, 3040, 305, 306, 307, 3080, 309, 310, 311, 3120, 313, 314, 315, 3160, 317, 318, 319, 3200, 321, 322, 323, 3240, 325, 326, 327, 3280, 329, 330, 331, 3320, 333] when passed in 333', function () {
        expect(amplify(333)).toEqual([1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000, 101, 102, 103, 1040, 105, 106, 107, 1080, 109, 110, 111, 1120, 113, 114, 115, 1160, 117, 118, 119, 1200, 121, 122, 123, 1240, 125, 126, 127, 1280, 129, 130, 131, 1320, 133, 134, 135, 1360, 137, 138, 139, 1400, 141, 142, 143, 1440, 145, 146, 147, 1480, 149, 150, 151, 1520, 153, 154, 155, 1560, 157, 158, 159, 1600, 161, 162, 163, 1640, 165, 166, 167, 1680, 169, 170, 171, 1720, 173, 174, 175, 1760, 177, 178, 179, 1800, 181, 182, 183, 1840, 185, 186, 187, 1880, 189, 190, 191, 1920, 193, 194, 195, 1960, 197, 198, 199, 2000, 201, 202, 203, 2040, 205, 206, 207, 2080, 209, 210, 211, 2120, 213, 214, 215, 2160, 217, 218, 219, 2200, 221, 222, 223, 2240, 225, 226, 227, 2280, 229, 230, 231, 2320, 233, 234, 235, 2360, 237, 238, 239, 2400, 241, 242, 243, 2440, 245, 246, 247, 2480, 249, 250, 251, 2520, 253, 254, 255, 2560, 257, 258, 259, 2600, 261, 262, 263, 2640, 265, 266, 267, 2680, 269, 270, 271, 2720, 273, 274, 275, 2760, 277, 278, 279, 2800, 281, 282, 283, 2840, 285, 286, 287, 2880, 289, 290, 291, 2920, 293, 294, 295, 2960, 297, 298, 299, 3000, 301, 302, 303, 3040, 305, 306, 307, 3080, 309, 310, 311, 3120, 313, 314, 315, 3160, 317, 318, 319, 3200, 321, 322, 323, 3240, 325, 326, 327, 3280, 329, 330, 331, 3320, 333]);
    });
    it('should return [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000, 101, 102, 103, 1040, 105, 106, 107, 1080, 109, 110, 111, 1120, 113, 114, 115, 1160, 117, 118, 119, 1200, 121, 122, 123, 1240, 125, 126, 127, 1280, 129, 130, 131, 1320, 133, 134, 135, 1360, 137, 138, 139, 1400, 141, 142, 143, 1440, 145, 146, 147, 1480, 149, 150, 151, 1520, 153, 154, 155, 1560, 157, 158, 159, 1600, 161, 162, 163, 1640, 165, 166, 167, 1680, 169, 170, 171, 1720, 173, 174, 175, 1760, 177, 178, 179, 1800, 181, 182, 183, 1840, 185, 186, 187, 1880, 189, 190, 191, 1920, 193, 194, 195, 1960, 197, 198, 199, 2000, 201, 202, 203, 2040, 205, 206, 207, 2080, 209, 210, 211, 2120, 213, 214, 215, 2160, 217, 218, 219, 2200, 221, 222, 223, 2240, 225, 226, 227, 2280, 229, 230, 231, 2320, 233, 234, 235, 2360, 237, 238, 239, 2400, 241, 242, 243, 2440, 245, 246, 247, 2480, 249, 250, 251, 2520, 253, 254, 255, 2560, 257, 258, 259, 2600, 261, 262, 263, 2640, 265, 266, 267, 2680, 269, 270, 271, 2720, 273, 274, 275, 2760, 277, 278, 279, 2800, 281, 282, 283, 2840, 285, 286, 287, 2880, 289, 290, 291, 2920, 293, 294, 295, 2960, 297, 298, 299, 3000, 301, 302, 303, 3040, 305, 306, 307, 3080, 309, 310, 311, 3120, 313, 314, 315, 3160, 317, 318, 319, 3200, 321, 322, 323, 3240, 325, 326, 327, 3280, 329, 330, 331, 3320, 333, 334, 335, 3360, 337, 338, 339, 3400, 341, 342, 343, 3440, 345, 346, 347, 3480, 349, 350, 351, 3520, 353, 354, 355, 3560, 357, 358, 359, 3600, 361, 362, 363, 3640, 365, 366, 367, 3680, 369, 370, 371, 3720, 373, 374, 375, 3760, 377, 378, 379, 3800, 381, 382, 383, 3840, 385, 386, 387, 3880, 389, 390, 391, 3920, 393, 394, 395, 3960, 397, 398, 399, 4000, 401, 402, 403, 4040, 405, 406, 407, 4080, 409, 410, 411, 4120, 413, 414, 415, 4160, 417, 418, 419, 4200, 421, 422, 423, 4240, 425, 426, 427, 4280, 429, 430, 431, 4320, 433, 434, 435, 4360, 437, 438, 439, 4400, 441, 442, 443, 4440, 445, 446, 447, 4480, 449, 450, 451, 4520, 453, 454, 455, 4560, 457, 458, 459, 4600, 461, 462, 463, 4640, 465, 466, 467, 4680, 469, 470, 471, 4720, 473, 474, 475, 4760, 477, 478, 479, 4800, 481, 482, 483, 4840, 485, 486, 487, 4880, 489, 490, 491, 4920, 493, 494, 495, 4960, 497, 498, 499, 5000] when passed in 500', function () {
        expect(amplify(500)).toEqual([1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000, 101, 102, 103, 1040, 105, 106, 107, 1080, 109, 110, 111, 1120, 113, 114, 115, 1160, 117, 118, 119, 1200, 121, 122, 123, 1240, 125, 126, 127, 1280, 129, 130, 131, 1320, 133, 134, 135, 1360, 137, 138, 139, 1400, 141, 142, 143, 1440, 145, 146, 147, 1480, 149, 150, 151, 1520, 153, 154, 155, 1560, 157, 158, 159, 1600, 161, 162, 163, 1640, 165, 166, 167, 1680, 169, 170, 171, 1720, 173, 174, 175, 1760, 177, 178, 179, 1800, 181, 182, 183, 1840, 185, 186, 187, 1880, 189, 190, 191, 1920, 193, 194, 195, 1960, 197, 198, 199, 2000, 201, 202, 203, 2040, 205, 206, 207, 2080, 209, 210, 211, 2120, 213, 214, 215, 2160, 217, 218, 219, 2200, 221, 222, 223, 2240, 225, 226, 227, 2280, 229, 230, 231, 2320, 233, 234, 235, 2360, 237, 238, 239, 2400, 241, 242, 243, 2440, 245, 246, 247, 2480, 249, 250, 251, 2520, 253, 254, 255, 2560, 257, 258, 259, 2600, 261, 262, 263, 2640, 265, 266, 267, 2680, 269, 270, 271, 2720, 273, 274, 275, 2760, 277, 278, 279, 2800, 281, 282, 283, 2840, 285, 286, 287, 2880, 289, 290, 291, 2920, 293, 294, 295, 2960, 297, 298, 299, 3000, 301, 302, 303, 3040, 305, 306, 307, 3080, 309, 310, 311, 3120, 313, 314, 315, 3160, 317, 318, 319, 3200, 321, 322, 323, 3240, 325, 326, 327, 3280, 329, 330, 331, 3320, 333, 334, 335, 3360, 337, 338, 339, 3400, 341, 342, 343, 3440, 345, 346, 347, 3480, 349, 350, 351, 3520, 353, 354, 355, 3560, 357, 358, 359, 3600, 361, 362, 363, 3640, 365, 366, 367, 3680, 369, 370, 371, 3720, 373, 374, 375, 3760, 377, 378, 379, 3800, 381, 382, 383, 3840, 385, 386, 387, 3880, 389, 390, 391, 3920, 393, 394, 395, 3960, 397, 398, 399, 4000, 401, 402, 403, 4040, 405, 406, 407, 4080, 409, 410, 411, 4120, 413, 414, 415, 4160, 417, 418, 419, 4200, 421, 422, 423, 4240, 425, 426, 427, 4280, 429, 430, 431, 4320, 433, 434, 435, 4360, 437, 438, 439, 4400, 441, 442, 443, 4440, 445, 446, 447, 4480, 449, 450, 451, 4520, 453, 454, 455, 4560, 457, 458, 459, 4600, 461, 462, 463, 4640, 465, 466, 467, 4680, 469, 470, 471, 4720, 473, 474, 475, 4760, 477, 478, 479, 4800, 481, 482, 483, 4840, 485, 486, 487, 4880, 489, 490, 491, 4920, 493, 494, 495, 4960, 497, 498, 499, 5000]);
    });
});

// Record Temperatures
describe('recordTemps', function () {
    it('should be a defined function', function () {
        expect(typeof recordTemps).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(recordTemps(
            [
                [34, 82],
                [24, 82],
                [20, 89],
                [5, 88],
                [9, 88],
                [26, 89],
                [27, 83]
            ],
            [
                [44, 72],
                [19, 70],
                [40, 69],
                [39, 68],
                [33, 64],
                [36, 70],
                [38, 69]
            ]))).toBe(true);
    });
    it('should return [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]] when passed in [[34, 82], [24, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]], [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]]', function () {
        expect(recordTemps([
                [34, 82],
                [24, 82],
                [20, 89],
                [5, 88],
                [9, 88],
                [26, 89],
                [27, 83]
            ],
            [
                [44, 72],
                [19, 70],
                [40, 69],
                [39, 68],
                [33, 64],
                [36, 70],
                [38, 69]
            ])).toEqual([[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]);
    });
    it('should return [[25, 80], [27, 88], [19, 88], [23, 85], [21, 89], [23, 78], [17, 79]] when passed in [[25, 80], [27, 88], [19, 88], [23, 85], [21, 89], [23, 78], [17, 79]], [[40, 70], [41, 68], [45, 68], [39, 65], [44, 72], [43, 69], [37, 68]]', function () {
        expect(recordTemps([
                [25, 80],
                [27, 88],
                [19, 88],
                [23, 85],
                [21, 89],
                [23, 78],
                [17, 79],
            ],
            [
                [40, 70],
                [41, 68],
                [45, 68],
                [39, 65],
                [44, 72],
                [43, 69],
                [37, 68],
            ])).toEqual([[25, 80], [27, 88], [19, 88], [23, 85], [21, 89], [23, 78], [17, 79]]);
    });
    it('should return [[19, 78], [21, 79], [22, 90], [20, 79], [25, 86], [25, 82], [19, 80]] when passed in [[19, 78], [21, 79], [22, 90], [21, 79], [30, 86], [25, 82], [19, 80]], [[29, 68], [24, 69], [28, 63], [20, 50], [25, 65], [28, 56], [30, 61]]', function () {
        expect(recordTemps([
                [19, 78],
                [21, 79],
                [22, 90],
                [21, 79],
                [30, 86],
                [25, 82],
                [19, 80],
            ],
            [
                [29, 68],
                [24, 69],
                [28, 63],
                [20, 50],
                [25, 65],
                [28, 56],
                [30, 61],
            ])).toEqual([[19, 78], [21, 79], [22, 90], [20, 79], [25, 86], [25, 82], [19, 80]]);
    });
    it('should return [[29, 90], [19, 78], [26, 91], [20, 86], [29, 79], [16, 84], [24, 83]] when passed in [[29, 90], [19, 78], [26, 91], [20, 86], [29, 79], [16, 84], [24, 83]], [[33, 68], [38, 58], [36, 59], [40, 56], [37, 69], [39, 70], [41, 69]]', function () {
        expect(recordTemps([
                [29, 90],
                [19, 78],
                [26, 91],
                [20, 86],
                [29, 79],
                [16, 84],
                [24, 83],
            ],
            [
                [33, 68],
                [38, 58],
                [36, 59],
                [40, 56],
                [37, 69],
                [39, 70],
                [41, 69],
            ])).toEqual([[29, 90], [19, 78], [26, 91], [20, 86], [29, 79], [16, 84], [24, 83]]);
    });
    it('should return [[17, 84], [17, 90], [28, 85], [15, 89], [21, 80], [6, 86], [25, 87]] when passed in [[17, 84],[17, 90],[28, 85],[15, 89],[21, 80],[6, 86],[28, 87]], [[27, 64],[31, 60],[33, 59],[35, 63],[32, 60],[35, 66],[25, 53]]', function () {
        expect(recordTemps([
                [17, 84],
                [17, 90],
                [28, 85],
                [15, 89],
                [21, 80],
                [6, 86],
                [28, 87],
            ],
            [
                [27, 64],
                [31, 60],
                [33, 59],
                [35, 63],
                [32, 60],
                [35, 66],
                [25, 53],
            ])).toEqual([[17, 84], [17, 90], [28, 85], [15, 89], [21, 80], [6, 86], [25, 87]]);
    });
    it('should return [[30, 88], [19, 89], [17, 79], [26, 93], [24, 84], [28, 90], [17, 90]] when passed in [[30, 88],[19, 89],[17, 79],[26, 93],[24, 84],[30, 90],[17, 90]], [[33, 60],[29, 69],[34, 58],[36, 55],[30, 53],[28, 60],[29, 62]]', function () {
        expect(recordTemps([
                [30, 88],
                [19, 89],
                [17, 79],
                [26, 93],
                [24, 84],
                [30, 90],
                [17, 90],
            ],
            [
                [33, 60],
                [29, 69],
                [34, 58],
                [36, 55],
                [30, 53],
                [28, 60],
                [29, 62],
            ])).toEqual([[30, 88], [19, 89], [17, 79], [26, 93], [24, 84], [28, 90], [17, 90]]);
    });
    it('should return [[22, 91], [13, 79], [11, 80], [30, 91], [18, 77], [19, 85], [7, 87]] when passed in [[22, 91],[13, 79],[11, 80],[30, 91],[18, 77],[19, 85],[7, 87]], [[32, 61],[23, 69],[31, 70],[31, 66],[28, 59],[27, 55],[23, 51]]', function () {
        expect(recordTemps([
                [22, 91],
                [13, 79],
                [11, 80],
                [30, 91],
                [18, 77],
                [19, 85],
                [7, 87],
            ],
            [
                [32, 61],
                [23, 69],
                [31, 70],
                [31, 66],
                [28, 59],
                [27, 55],
                [23, 51],
            ])).toEqual([[22, 91], [13, 79], [11, 80], [30, 91], [18, 77], [19, 85], [7, 87]]);
    });
    it('should return [[39, 103], [38, 99], [38, 104], [31, 99], [34, 103], [36, 101], [35, 99]] when passed in [[39, 103], [38, 99], [38, 104], [31, 99], [34, 103], [36, 101], [35, 99]],[[53, 93], [58, 91], [49, 94], [51, 95], [54, 95], [56, 98], [60, 99]]', function () {
        expect(recordTemps([
                [39, 103],
                [38, 99],
                [38, 104],
                [31, 99],
                [34, 103],
                [36, 101],
                [35, 99],
            ],
            [
                [53, 93],
                [58, 91],
                [49, 94],
                [51, 95],
                [54, 95],
                [56, 98],
                [60, 99],
            ])).toEqual([[39, 103], [38, 99], [38, 104], [31, 99], [34, 103], [36, 101], [35, 99]]);
    });
    it('should return [[42, 106], [37, 97], [31, 101], [30, 100], [38, 101], [29, 100], [27, 99]] when passed in [[42, 106], [37, 97], [31, 101], [30, 100], [38, 101], [29, 98], [27, 99]], [[52, 93], [61, 91], [60, 95], [60, 97], [68, 93], [70, 100], [57, 96]]', function () {
        expect(recordTemps([
                [42, 106],
                [37, 97],
                [31, 101],
                [30, 100],
                [38, 101],
                [29, 98],
                [27, 99],
            ],
            [
                [52, 93],
                [61, 91],
                [60, 95],
                [60, 97],
                [68, 93],
                [70, 100],
                [57, 96],
            ])).toEqual([[42, 106], [37, 97], [31, 101], [30, 100], [38, 101], [29, 100], [27, 99]]);
    });
    it('should return [[40, 98], [30, 100], [35, 100], [29, 105], [33, 101], [27, 96], [29, 100]] when passed in [[40, 98], [30, 100], [35, 100], [29, 105], [33, 100], [27, 96], [29, 97]], [[60, 97], [57, 99], [65, 98], [59, 97], [63, 101], [57, 93], [69, 100]]', function () {
        expect(recordTemps([
                [40, 98],
                [30, 100],
                [35, 100],
                [29, 105],
                [33, 100],
                [27, 96],
                [29, 97],
            ],
            [
                [60, 97],
                [57, 99],
                [65, 98],
                [59, 97],
                [63, 101],
                [57, 93],
                [69, 100],
            ])).toEqual([[40, 98], [30, 100], [35, 100], [29, 105], [33, 101], [27, 96], [29, 100]]);
    });
    it('should return [[45, 99], [32, 99], [32, 102], [28, 103], [31, 99], [34, 104], [32, 100]] when passed in [[45, 99], [32, 99], [32, 102], [28, 103], [31, 99], [34, 104], [32, 100]], [[65, 94], [62, 94], [72, 100], [68, 100], [71, 96], [69, 100], [72, 99]]', function () {
        expect(recordTemps([
                [45, 99],
                [32, 99],
                [32, 102],
                [28, 103],
                [31, 99],
                [34, 104],
                [32, 100],
            ],
            [
                [65, 94],
                [62, 94],
                [72, 100],
                [68, 100],
                [71, 96],
                [69, 100],
                [72, 99],
            ])).toEqual([[45, 99], [32, 99], [32, 102], [28, 103], [31, 99], [34, 104], [32, 100]]);
    });
    it('should return [[39, 101], [35, 98], [30, 97], [33, 103], [29, 99], [36, 100], [30, 103]] when passed in [[39, 101], [35, 98], [30, 97], [33, 103], [29, 98], [36, 97], [30, 103]], [[69, 100],[65, 97],[70, 95],[73, 100],[75, 99],[73, 100],[70, 100]]', function () {
        expect(recordTemps([
                [39, 101],
                [35, 98],
                [30, 97],
                [33, 103],
                [29, 98],
                [36, 97],
                [30, 103],
            ],
            [
                [69, 100],
                [65, 97],
                [70, 95],
                [73, 100],
                [75, 99],
                [73, 100],
                [70, 100],
            ])).toEqual([[39, 101], [35, 98], [30, 97], [33, 103], [29, 99], [36, 100], [30, 103]]);
    });
    it('should return [[50, 105], [40, 101], [24, 99], [29, 99], [38, 100], [31, 103], [33, 102]] when passed in [[50, 105], [40, 100], [24, 99], [29, 99], [38, 100], [31, 100], [33, 100]], [[70, 102], [70, 101], [69, 97], [68, 98], [71, 100], [72, 103], [73, 102]]', function () {
        expect(recordTemps([
                [50, 105],
                [40, 100],
                [24, 99],
                [29, 99],
                [38, 100],
                [31, 100],
                [33, 100],
            ],
            [
                [70, 102],
                [70, 101],
                [69, 97],
                [68, 98],
                [71, 100],
                [72, 103],
                [73, 102],
            ])).toEqual([[50, 105], [40, 101], [24, 99], [29, 99], [38, 100], [31, 103], [33, 102]]);
    });
    it('should return [[37, 100], [31, 104], [38, 102], [30, 99], [40, 107], [29, 99], [28, 101]] when passed in [[37, 100], [31, 104], [38, 102], [30, 97], [40, 107], [29, 99], [28, 101]], [[71, 98], [71, 100], [72, 101], [70, 99], [68, 99], [69, 97], [69, 99]]', function () {
        expect(recordTemps([
                [37, 100],
                [31, 104],
                [38, 102],
                [30, 97],
                [40, 107],
                [29, 99],
                [28, 101],
            ],
            [
                [71, 98],
                [71, 100],
                [72, 101],
                [70, 99],
                [68, 99],
                [69, 97],
                [69, 99],
            ])).toEqual([[37, 100], [31, 104], [38, 102], [30, 99], [40, 107], [29, 99], [28, 101]]);
    });
    it('should return [[32, 99], [40, 99], [25, 101], [34, 97], [19, 103], [35, 100], [36, 102]] when passed in [[32, 99], [40, 97], [25, 101], [34, 97], [19, 103], [35, 98], [36, 102]], [[72, 96], [70, 99], [65, 100], [71, 97], [73, 99], [65, 100], [66, 100]]', function () {
        expect(recordTemps([
                [32, 99],
                [40, 97],
                [25, 101],
                [34, 97],
                [19, 103],
                [35, 98],
                [36, 102],
            ],
            [
                [72, 96],
                [70, 99],
                [65, 100],
                [71, 97],
                [73, 99],
                [65, 100],
                [66, 100],
            ])).toEqual([[32, 99], [40, 99], [25, 101], [34, 97], [19, 103], [35, 100], [36, 102]]);
    });
    it('should return [[42, 98], [35, 105], [29, 98], [33, 104], [29, 104], [30, 102], [32, 98]] when passed in [[42, 98], [35, 105], [29, 98], [33, 104], [29, 104], [30, 102], [32, 98]], [[62, 98], [69, 101], [68, 96], [73, 100], [69, 100], [70, 99], [72, 97]]', function () {
        expect(recordTemps([
                [42, 98],
                [35, 105],
                [29, 98],
                [33, 104],
                [29, 104],
                [30, 102],
                [32, 98],
            ],
            [
                [62, 98],
                [69, 101],
                [68, 96],
                [73, 100],
                [69, 100],
                [70, 99],
                [72, 97],
            ])).toEqual([[42, 98], [35, 105], [29, 98], [33, 104], [29, 104], [30, 102], [32, 98]]);
    });
});

// Index Shuffle
describe('indexShuffle', function () {
    it('should be a defined function', function () {
        expect(typeof indexShuffle).toBe('function');
    });
    it('should return a string when executed', function () {
        expect(typeof indexShuffle(exampleString)).toBe('string');
    });
    it('should return "acebdf" when passed in "abcdef"', function () {
        expect(indexShuffle("abcdef")).toBe("acebdf");
    });
    it('should return "aaaabbbb" when passed in "abababab"', function () {
        expect(indexShuffle("abababab")).toBe("aaaabbbb");
    });
    it('should return "i a  euiu atwsabatfldy" when passed in "it was a beautiful day"', function () {
        expect(indexShuffle("it was a beautiful day")).toBe("i a  euiu atwsabatfldy");
    });
    it('should return "myeab" when passed in "maybe"', function () {
        expect(indexShuffle("maybe")).toBe("myeab");
    });
    it('should return "hldyoia" when passed in "holiday"', function () {
        expect(indexShuffle("holiday")).toBe("hldyoia");
    });
});

// Instant JAZZ
describe('jazzify', function () {
    it('should be a defined function', function () {
        expect(typeof jazzify).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(jazzify([]))).toBe(true);
    });
    it('should return [\'G7\', \'F7\', \'C7\'] when passed in [\'G\', \'F\', \'C\']', function () {
        expect(jazzify(['G', 'F', 'C'])).toEqual(['G7', 'F7', 'C7']);
    });
    it('should return [\'Dm7\', \'G7\', \'E7\', \'A7\'] when passed in [\'Dm\', \'G\', \'E\', \'A\']', function () {
        expect(jazzify(['Dm', 'G', 'E', 'A'])).toEqual(['Dm7', 'G7', 'E7', 'A7']);
    });
    it('should return [\'F7\', \'E7\', \'A7\', \'Ab7\', \'Gm7\', \'C7\'] when passed in [\'F7\', \'E7\', \'A7\', \'Ab7\', \'Gm7\', \'C7\']', function () {
        expect(jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])).toEqual(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']);
    });
    it('should return [\'G7\', \'C7\'] when passed in [\'G\', \'C7\']', function () {
        expect(jazzify(['G', 'C7'])).toEqual(['G7', 'C7']);
    });
    it('should return [] when passed in []', function () {
        expect(jazzify([])).toEqual([]);
    });
});

// Purge and Organize
describe('uniqueSort', function () {
    it('should be a defined function', function () {
        expect(typeof uniqueSort).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(uniqueSort(exampleNumbersArr))).toBe(true);
    });
    it('should return [1, 2, 3, 4, 5, 8, 10] when passed in [1, 5, 8, 2, 3, 4, 4, 4, 10]', function () {
        expect(uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10])).toEqual([1, 2, 3, 4, 5, 8, 10]);
    });
    it('should return [1, 2, 4, 5, 7] when passed in [1, 2, 5, 4, 7, 7, 7]', function () {
        expect(uniqueSort([1, 2, 5, 4, 7, 7, 7])).toEqual([1, 2, 4, 5, 7]);
    });
    it('should return [0, 1, 2, 3, 4, 5, 6, 7] when passed in [7, 6, 5, 4, 3, 2, 1, 0, 1]', function () {
        expect(uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1])).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    });
    it('should return [1, 3, 4, 5, 6, 27, 100] when passed in [3, 6, 5, 4, 3, 27, 1, 100, 1]', function () {
        expect(uniqueSort([3, 6, 5, 4, 3, 27, 1, 100, 1])).toEqual([1, 3, 4, 5, 6, 27, 100]);
    });
    it('should return [-87, -9, -4.323827, -3.1415, -3.1414, 8] when passed in [-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415]', function () {
        expect(uniqueSort([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415])).toEqual([-87, -9, -4.323827, -3.1415, -3.1414, 8]);
    });
});

// Capitalize the First Letter of Each Word
describe("makeTitle", function() {
    it("should be a defined function", function() {
        expect(typeof makeTitle).toBe("function");
    });
    it("should return a string when executed", function() {
        expect(typeof makeTitle("")).toBe("string");
    });
    it("should return 'I Am A Title' when passed in 'I am a title'", function() {
        expect(makeTitle("I am a title")).toBe("I Am A Title");
    });
    it("should return 'I AM A TITLE' when passed in 'I AM A TITLE'", function() {
        expect(makeTitle("I AM A TITLE")).toBe("I AM A TITLE");
    });
    it("should return 'I AM A TITLE' when passed in 'i aM a tITLE'", function() {
        expect(makeTitle("i aM a tITLE")).toBe("I AM A TITLE");
    });
    it("should return 'The First Letter Of Every Word Is Capitalized' when passed in 'the first letter of every word is capitalized'", function() {
        expect(makeTitle("the first letter of every word is capitalized")).toBe("The First Letter Of Every Word Is Capitalized");
    });
    it("should return 'I LIke Pizza' when passed in 'I Like Pizza'", function() {
        expect(makeTitle("I Like Pizza")).toBe("I Like Pizza");
    });
    it("should return 'Don't Count Your ChiCKens BeFore They HatCh' when passed in 'Don't count your ChiCKens BeFore They HatCh'", function() {
        expect(makeTitle("Don't count your ChiCKens BeFore They HatCh")).toBe("Don't Count Your ChiCKens BeFore They HatCh");
    });
    it("should return 'All Generalizations Are False, Including This One' when passed in 'All generalizations are false, including this one'", function() {
        expect(makeTitle("All generalizations are false, including this one")).toBe("All Generalizations Are False, Including This One");
    });
    it("should return 'Me And My Wife Lived Happily For Twenty Years And Then We Met.' when passed in 'Me and my wife lived happily for twenty years and then we met.'", function() {
        expect(makeTitle("Me and my wife lived happily for twenty years and then we met.")).toBe("Me And My Wife Lived Happily For Twenty Years And Then We Met.");
    });
    it("should return 'There Are No Stupid Questions, Just Stupid People.' when passed in 'There are no stupid questions, just stupid people.'", function() {
        expect(makeTitle("There are no stupid questions, just stupid people.")).toBe("There Are No Stupid Questions, Just Stupid People.");
    });
    it("should return '1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d' when passed in '1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d'", function() {
        expect(makeTitle("1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d")).toBe("1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d");
    });
    it("should return 'PIZZA PIZZA PIZZA' when passed 'PIZZA PIZZA PIZZA'", function() {
        expect(makeTitle("PIZZA PIZZA PIZZA")).toBe("PIZZA PIZZA PIZZA");
    });
});

// Online Shopping
describe('freeShipping', function () {
    it('should be a defined function', function () {
        expect(typeof freeShipping).toBe('function');
    });
    it('should return a boolean when executed', function () {
        expect(typeof freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 })).toBe('boolean');
    });
    it('should return true when passed in {Flatscreen_TV: 399.99}', function () {
        expect(freeShipping({Flatscreen_TV: 399.99})).toBe(true);
    });
    it('should return true when passed in {Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99}', function () {
        expect(freeShipping({Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99})).toBe(true);
    });
    it('should return true when passed in {Elephant_Plushie: 40.55, Octopus_Plushie: 20.33, Spongebob_Plushie: 20.00}', function () {
        expect(freeShipping({Elephant_Plushie: 40.55, Octopus_Plushie: 20.33, Spongebob_Plushie: 20.00})).toBe(true);
    });
    it('should return false when passed in {Shampoo: 5.99, Rubber_Ducks: 15.99}', function () {
        expect(freeShipping({Shampoo: 5.99, Rubber_Ducks: 15.99})).toBe(false);
    });
    it('should return false when passed in {Scrabble: 12.32, Jenga: 5.55, Clue: 20.00}', function () {
        expect(freeShipping({Scrabble: 12.32, Jenga: 5.55, Clue: 20.00})).toBe(false);
    });
});

// How Good is Your Name?
describe('nameScore', function () {
    it('should be a defined function', function () {
        expect(typeof nameScore).toBe('function');
    });
    it('should return a string when executed', function () {
        expect(typeof nameScore(exampleNames[randomNumber])).toBe('string');
    });
    it('should return "THE BEST" when passed in "MUBASHIR"', function () {
        expect(nameScore('MUBASHIR')).toBe("THE BEST");
    });
    it('should return "THE BEST" when passed in "MATT"', function () {
        expect(nameScore('MATT')).toBe("THE BEST");
    });
    it('should return "THE BEST" when passed in "PAKISTAN"', function () {
        expect(nameScore('PAKISTAN')).toBe("THE BEST");
    });
    it('should return "THE BEST" when passed in "AIRFORCE"', function () {
        expect(nameScore('AIRFORCE')).toBe("THE BEST");
    });
    it('should return "THE BEST" when passed in "ROBBY"', function () {
        expect(nameScore('ROBBY')).toBe("THE BEST");
    });
    it('should return "THE BEST" when passed in "BILL GATES"', function () {
        expect(nameScore('BILL GATES')).toBe("THE BEST");
    });
    it('should return "VERY GOOD" when passed in "FABIO"', function () {
        expect(nameScore('FABIO')).toBe("VERY GOOD");
    });
    it('should return "VERY GOOD" when passed in "YOU"', function () {
        expect(nameScore('YOU')).toBe("VERY GOOD");
    });
    it('should return "PRETTY GOOD" when passed in "JLJ"', function () {
        expect(nameScore('JLJ')).toBe("PRETTY GOOD");
    });
    it('should return "PRETTY GOOD" when passed in "BOB"', function () {
        expect(nameScore('BOB')).toBe("PRETTY GOOD");
    });
    it('should return "PRETTY GOOD" when passed in "ME"', function () {
        expect(nameScore('ME')).toBe("PRETTY GOOD");
    });
    it('should return "NOT TOO GOOD" when passed in "PUBG"', function () {
        expect(nameScore('PUBG')).toBe("NOT TOO GOOD");
    });
    it('should return "NOT TOO GOOD" when passed in "GUV"', function () {
        expect(nameScore('GUV')).toBe("NOT TOO GOOD");
    });
});


// Burglary Series (06): Convert to Number
describe('convertToNumber', function () {
    it('should be a defined function', function () {
        expect(typeof convertToNumber).toBe('function');
    });
    it('should not return an array when executed', function () {
        expect(Array.isArray(convertToNumber({piano: "200", tv: "100", stereo: "400" }))).not.toBe(true);
    });
    it('should not return null when executed', function () {
        expect(convertToNumber({piano: "200", tv: "100", stereo: "400" })).not.toBeNull();
    });
    it('should return an object when executed', function () {
        expect(typeof convertToNumber({piano: "200", tv: "100", stereo: "400" })).toBe('object');
    });
    it('should return { piano: 200, tv: 100, stereo: 400 } when passed in { piano: "200", tv: "100", stereo: "400" }', function () {
        expect(convertToNumer({piano: "200", tv: "100", stereo: "400" })).toEqual({ piano: 200, tv: 100, stereo: 400 });
    });
    it('should return {piano: 200, tv: 300, stereo: 400} when passed in {piano: "200", tv: "300", stereo: "400" }', function () {
        expect(convertToNumer({piano: "200", tv: "300", stereo: "400" })).toEqual({piano: 200, tv: 300, stereo: 400});
    });
    it('should return {piano: 200, tv: 300 } when passed in {piano: "200", tv: "300" }', function () {
        expect(convertToNumer({piano: "200", tv: "300" })).toEqual({piano: 200, tv: 300 });
    });
    it('should return {piano: 200} when passed in {piano: "200"}', function () {
        expect(convertToNumber({piano: "200"})).toEqual({piano: 200});
    });
});

// Frequency Distribution
describe('getFrequencies', function () {
    it('should be a defined function', function () {
        expect(typeof getFrequencies).toEqual('function');
    });
    it('should not return an array when executed', function () {
        expect(Array.isArray(getFrequencies(['A', 'A']))).not.toBe(true)
    });
    it('should not return null when executed', function () {
        expect(getFrequencies(['A', 'A'])).not.toBeNull();
    });
    it('should return an object when executed', function () {
        expect(typeof getFrequencies(['A', 'A'])).toBe('object');
    });
    it('should return {A: 2} when passed in [\'A\', \'A\']', function () {
        expect(getFrequencies(['A', 'A'])).toEqual({A: 2});
    });
    it('should return {A: 4, B: 1} when passed in [\'A\', \'B\', \'A\', \'A\', \'A\']', function () {
        expect(getFrequencies(['A', 'B', 'A', 'A', 'A'])).toEqual({A: 4, B: 1});
    });
    it('should return {A: 3, B: 1, C: 1} when passed in [\'A\', \'B\', \'C\', \'A\', \'A\']', function () {
        expect(getFrequencies(['A', 'B', 'C', 'A', 'A'])).toEqual({A: 3, B: 1, C: 1});
    });
    it('should return {true: 2, false: 3} when passed in [true, false, true, false, false]', function () {
        expect(getFrequencies([true, false, true, false, false])).toEqual({true: 2, false: 3});
    });
    it('should return {1: 1, 2: 2, 3: 2} when passed in [1, 2, 3, 3, 2]', function () {
        expect(getFrequencies([1, 2, 3, 3, 2])).toEqual({1: 1, 2: 2, 3: 2});
    });
    it('should return {} when passed in []', function () {
        expect(getFrequencies([])).toEqual({});
    });
});