function middleCharacter(str) {
    var length = str.length;
    var middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return str.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return str.charAt(middleIndex);
    }
}
console.log(middleCharacter("plataforma5"));
console.log(middleCharacter("hola"));
console.log(middleCharacter("cosas"));

