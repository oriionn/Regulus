module.exports = function (text) {
    let decoded = "";

    // Modified Caesar code
    let caesarDecoded = "";
    let i = 0;
    text.split("").forEach(x => {
        let rot = 1;
        if ((i % 2) !== 0) rot = 2

        if (x === "a" && rot === 2) return caesarDecoded += "y"
        if (x === "z" && rot === 1) return caesarDecoded += "y"

        if (x === "b" && rot === 2) return caesarDecoded += "z"
        if (x === "a" && rot === 1) return caesarDecoded += "z"

        caesarDecoded += x.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) - (letter.toLowerCase() <= 'y' ? rot : -rot)));
        i++;
    })

    // Modified NATO Phonetic Alphabet
    let natoDecoded = ""
    caesarDecoded.split(" ").forEach(x => {
        if (x.toLowerCase() === "space") return natoDecoded += " "
        if (x.length === 0) return false;

        natoDecoded += x.split("")[0].toLowerCase()
    })

    // Modified Caesar code
    i = 0;
    natoDecoded.split("").forEach(x => {
        let rot = 1;
        if ((i % 2) !== 0) rot = 2

        if (x === "a" && rot === 2) return decoded += "y"
        if (x === "z" && rot === 1) return decoded += "y"

        if (x === "b" && rot === 2) return decoded += "z"
        if (x === "a" && rot === 1) return decoded += "z"

        decoded += x.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) - (letter.toLowerCase() <= 'y' ? rot : -rot)));
        i++;
    })

    return decoded;
}