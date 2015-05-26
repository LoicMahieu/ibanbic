
# ibanbic

Wrapper for [ibanbic.be](http://www.ibanbic.be/) API.

## Install

```sh
npm install ibanbic
```

## Usage

```js
var ibanbic = require('ibanbic')
ibanbic.BBANtoIBAN('BE62510007547061', function (err, bic) {
  // bic === VAPE BE 21
})
```

## Methods

A subset of methods are implemented.

- `BBANtoIBAN(value, callback)`
- `BBANtoBIC(value, callback)`
- `BBANtoBANKNAME(value, callback)`
- `BBANtoIBANandBIC(value, callback)`
- `CheckBBAN(value, callback)`
- `controleIBAN(value, callback)`
- `getBelgianBBAN(value, callback)`
