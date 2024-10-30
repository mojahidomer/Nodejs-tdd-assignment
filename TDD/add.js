const add = (input) => {
    if (!input) {

        return 0
    }
    return input
        .split(',')         
        .map(Number)        
        .reduce((sum, num) => sum + num, 0)
}

module.exports = add