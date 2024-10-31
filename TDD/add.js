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
    return numberString
        .split(delimiter)         
        .map(Number)        
        .reduce((sum, num) => sum + num, 0)
}

module.exports = add