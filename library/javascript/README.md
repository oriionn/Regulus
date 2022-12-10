# Regulus Crypt
Regulus is a new way to encrypt or decrypt text. It is a variation of the Caesar code, but also uses the Nato phonetic alphabet.

## Summary
* [Usage](#usage)
* * [Encoding](#encoding)
* * [Decoding](#decoding)

## Usage
### Encoding
To encode a text, use the `encode(text)` function, here is an example:
````javascript
let regulus = require("regulus-crypt")
console.log(regulus.encode("hello world")) 
// Output: Jpekb Hqmh Ojmf Oqwgndft Rbrb Trbef Y-scz Svgcgd Tkftsc Ppxfocgs Feiq
````

### Decoding
To decode a text, use the function `decode(text)`, here is an example:
````javascript
let regulus = require("regulus-crypt")
console.log(regulus.decode("Jpekb Hqmh Ojmf Oqwgndft Rbrb Trbef Y-scz Svgcgd Tkftsc Ppxfocgs Feiq")) 
// Output: hello world
````