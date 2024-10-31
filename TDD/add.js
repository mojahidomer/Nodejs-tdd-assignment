const add = (input) => {
    if (!input) {

        return 0
    }
    let delimiter = /,|\n/
    let numberString = input;

    if (input.startsWith("//")) {
        const delimiterLineEndIndex = input.indexOf("\n");
        delimiter = new RegExp(input.substring(2, delimiterLineEndIndex).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape special regex chars
        numberString = input.substring(delimiterLineEndIndex + 1);
    }

    const numberArray = numberString
        .split(delimiter).map(Number)

    const negatives = numberArray.filter(num => num < 0); // Check for negative numbers
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
    return numberArray
    .filter(num => num <= 1000)
    .reduce((sum, num) => sum + num, 0)
}

module.exports = add