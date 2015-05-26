
var request = require('client-request')
var encodeForm = require('form-urlencoded').encode
var xmldoc = require('xmldoc')

var ibanbic = {
  endpoint: 'http://www.ibanbic.be/IBANBIC.asmx',
  methods: [
    'BBANtoIBAN',
    'BBANtoBIC',
    'BBANtoBANKNAME',
    'BBANtoIBANandBIC',
    'CheckBBAN',
    'controleIBAN',
    'getBelgianBBAN'
  ],

  _req: function (method, value, done) {
    request({
      method: 'post',
      uri: this.endpoint + '/' + method,
      body: encodeForm({
        Value: value
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }, function (err, res, body) {
      if (err) {
        return done(err)
      }

      if (res.statusCode !== 200) {
        if (body.toString().match(/Conversion from string .* to type 'Decimal' is not valid/)) {
          return done(null, '')
        }

        return done(new Error(
          'Invalid ibanbic.be result status code (' + res.statusCode + ')'
        ))
      }

      var doc = new xmldoc.XmlDocument(body)
      done(null, doc.val)
    })
  }
}

ibanbic.methods.forEach(function (method) {
  ibanbic[method] = function (value, done) {
    this._req(method, value, done)
  }
})

module.exports = ibanbic
