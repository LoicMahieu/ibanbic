/*global describe, it*/

var ibanbic = require('..')
var assert = require('assert')

describe('ibanbic', function () {

  it('Can convert valid BBan to IBan', function (done) {
    ibanbic.BBANtoIBAN('BE62510007547061', function (err, iban) {
      if (!err) {
        assert.equal(iban, 'BE62 5100 0754 7061')
      }

      done(err)
    })
  })

  it('Can convert valid BBan to IBan', function (done) {
    ibanbic.BBANtoBIC('BE62510007547061', function (err, iban) {
      if (!err) {
        assert.equal(iban, 'VAPE BE 21')
      }

      done(err)
    })
  })

  it('Result a empty string if not valid iban', function (done) {
    ibanbic.BBANtoIBAN('not valid iban', function (err, iban) {
      if (!err) {
        assert.equal(iban, '')
      }

      done(err)
    })
  })

  it('Result a empty string if not valid iban (more)', function (done) {
    ibanbic.BBANtoIBAN('! some iban !&"è`$"♞', function (err, iban) {
      if (!err) {
        assert.equal(iban, '')
      }

      done(err)
    })
  })

})
