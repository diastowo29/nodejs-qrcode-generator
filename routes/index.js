var express = require('express');
var QRCode = require('qrcode')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  dData = [
    {
      id: 1,
      panjang: 10,
      lebar: 5,
      tinggi: 20,
      berat: 100
    },{
      id: 2,
      panjang: 11,
      lebar: 6,
      tinggi: 21,
      berat: 101
    },
  ]
  res.render('index', {
    title: 'QR Generator',
    dData: dData
  });
});

router.get('/submit', function (req, res, next) {
  res.status(200).send({});
})

module.exports = router;
