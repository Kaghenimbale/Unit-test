function stringLength(str){
    if (str.length > 10 ){
        throw new Error('the string has character higher than 10');
    }
    else if (str.length < 1 ){
        throw new Error('the string character are less than 1');
    }
    return str.length;
}

module.exports = stringLength;