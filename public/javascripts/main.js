// var QRCode = require('qrcode')
var QRCode = require('qrcode')

var inputData = JSON.parse($('#inputData').val())
console.log(inputData)

inputData.forEach(iData => {
    console.log(iData)
    var qrString = 'Panjang = ' + iData.panjang + " Lebar = " + iData.lebar + " Tinggi = " + iData.tinggi + " Berat = " + iData.berat
    var canvas = document.getElementById('canvas' + iData.id)
    QRCode.toCanvas(canvas, qrString, function (error) {
        // console.log(canvasData)
      if (error) console.error(error)
      console.log('success!');
    })
    
});
 