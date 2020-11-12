var express = require('express');
const { dimensions_table } = require('../sequelize')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  dimensions_table.findAll().then(dimension_table_all => {
    dData = dimension_table_all
    res.render('index', {
      title: 'QR Generator',
      dData: dData
    });
  });
});

router.get('/submit', function (req, res, next) {
  dimensions_table.create({
    panjang: req.query.p,
    lebar: req.query.l,
    tinggi: req.query.t,
    berat: req.query.b
  }).then(dimension_table_create => {
    res.status(200).send({
      status: 'Created',
      dimension_table_create
    });
  });
})

module.exports = router;
