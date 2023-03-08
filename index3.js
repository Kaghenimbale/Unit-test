function capitalize(str){

    const first = str[0].toUpperCase();
    const remaining = str.slice(1);

    return first + remaining;
}

module.exports = capitalize;