# Regulus Crypt
Regulus is a new way to encrypt or decrypt text. It is a variation of the Caesar code, but also uses the Nato phonetic alphabet.

## Summary
* [Usage](#usage)
* * [Encoding](#encoding)
* * [Decoding](#decoding)

## Usage
### Encoding
To encode a text, use the `encode(text)` function, here is an example:
````html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My First Project with Regulus Crypt</title>
    
    <script src="https://cdn.jsdelivr.net/gh/oriionn/regulus-crypt/library/web/regulus-crypt.js"></script>
</head>
<body>
  <script>
      console.log(regulus.encode("hello world"))
      // Output: Jpekb Hqmh Ojmf Oqwgndft Rbrb Trbef Y-scz Svgcgd Tkftsc Ppxfocgs Feiq
  </script>
</body>
</html>
````

### Decoding
To encode a text, use the `encode(text)` function, here is an example:
````html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My First Project with Regulus Crypt</title>
    
    <script src="https://cdn.jsdelivr.net/gh/oriionn/regulus-crypt/library/web/regulus-crypt.js"></script>
</head>
<body>
  <script>
      console.log(regulus.decode("Jpekb Hqmh Ojmf Oqwgndft Rbrb Trbef Y-scz Svgcgd Tkftsc Ppxfocgs Feiq"))
      // Output: hello world
  </script>
</body>
</html>
````