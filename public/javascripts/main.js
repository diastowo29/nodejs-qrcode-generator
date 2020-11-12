// var QRCode = require('qrcode')
var QRCode = require('qrcode')

var inputData = JSON.parse($('#inputData').val())
console.log(inputData)

inputData.forEach(iData => {
    console.log(iData)
    var canvas = document.getElementById('canvas' + iData.id)
    QRCode.toCanvas(canvas, 'sample text', function (error) {
        // console.log(canvasData)
      if (error) console.error(error)
      console.log('success!');
    })
    
});
 