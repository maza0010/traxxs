//rotation of images
window.onload = rotate;

var theAd = 0;
var adImages = new Array("usedtire.jpg","tires-stacked.jpg","rollingtire.jpg");

function rotate() {
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     document.getElementById("adBanner").src = adImages[theAd];

     setTimeout(rotate, 3 * 1000);
}


/******************************************/

window.onload = rotate;

var theAd = 0;
var adImages = new Array("usedtire.jpg","rollingtire.jpg","tires-stacked.jpg");

function rotate() {
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     document.getElementById("adban").src = adImages[theAd];

     setTimeout(rotate, 3 * 1000);
}
