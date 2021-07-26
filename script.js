"use strict";

// This function is editable you can change it accordind to your needs
var adress = prompt(`** Type a valid adress \n You can use spaces \n Example: \n La Poste Manouba Tunisie \n **You can also grab gps coordinates from google maps and past them here \n Example: 36.81765562400575, 10.079603277312959 `);

function getEmbeddedMap(adress) {
    //encodeURIComponent() is used to URL encode a string
    var finalResult = encodeURIComponent(adress);

    var maplocation = document.getElementById("map");
    maplocation.innerHTML = `
<div class="mapouter"><div class="gmap_canvas"><iframe width="350" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=${finalResult}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org"></a><br><style>.mapouter{position:relative;text-align:right;height:350px;width:350px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:350px;width:350px;}</style></div></div>`;
}

getEmbeddedMap(adress);
