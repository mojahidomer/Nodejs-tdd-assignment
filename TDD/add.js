const add = (input) => {
    if (!input) {

        return 0
    }
    const delimiter = /,|\n/
    return input
        .split(delimiter)         
        .map(Number)        
        .reduce((sum, num) => sum + num, 0)
}

module.exports = add