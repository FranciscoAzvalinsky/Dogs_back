const stringToArray = (razas) => {
    let array = []
    array = razas.split(',')
    let array2 = []
    array2=array.map(function (elem) {return elem.trim();})
    return array2
}

module.exports = stringToArray