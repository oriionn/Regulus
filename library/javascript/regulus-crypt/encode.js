module.exports = function (text) {
    let encoded = "";

    // Modified Caesar code
    let caesarEncoded = "";
    let i = 0;
    text.split("").forEach(x => {
        let rot = 1;
        if ((i % 2) !== 0) rot = 2

        if (x === "y" && rot === 2) return caesarEncoded += "a"
        if (x === "y" && rot === 1) return caesarEncoded += "z"

        if (x === "z" && rot === 2) return caesarEncoded += "b"
        if (x === "z" && rot === 1) return caesarEncoded += "a"

        caesarEncoded += x.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'y' ? rot : -rot)));
        i++;
    })

    // NATO Phonetic Alphabet
    const nato = s => {
        let h =  {
            "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
            "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
            "G": "Golf",   "H": "Hotel",   "I": "India",
            "J": "Juliet", "K": "Kilo",    "L": "Lima",
            "M": "Mike",   "N": "November","O": "Oscar",
            "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
            "S": "Sierra", "T": "Tango",   "U": "Uniform",
            "V": "Victor", "W": "Whiskey", "X": "X-ray",
            "Y": "Yankee", "Z": "Zulu", " ": "Space"
        }
        return [...s.toUpperCase()].map(x => h[x]).join(' ')
    }

    let natoEncoded = nato(caesarEncoded)

    // Caesar cipher
    i = 0;
    natoEncoded.split("").forEach(x => {
        let rot = 1;
        if ((i % 2) !== 0) rot = 2

        if (x === "y" && rot === 2) return encoded += "a"
        if (x === "y" && rot === 1) return encoded += "z"

        if (x === "z" && rot === 2) return encoded += "b"
        if (x === "z" && rot === 1) return encoded += "a"

        encoded += x.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'y' ? rot : -rot)));
        i++;
    })

    return encoded;
}