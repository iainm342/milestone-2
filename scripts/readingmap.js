// const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let labelIndex = 0;
let markers = [];
let map;

const readLocations = [
    {lat: 51.45494, lng: -0.97323}, //Bill's
    {lat: 51.45356, lng: -0.97426}, //Brewdog
    {lat: 51.47375, lng: -0.91180}, //The Bull
    {lat: 51.45595, lng: -0.96786}, //Carluccio's
    {lat: 51.47536, lng: -0.91285}, //Coppa Club
    {lat: 51.45399, lng: -0.96876}, //London Street Brasserie
    {lat: 51.40905, lng: -0.95410}, //L'Ortolan
    {lat: 51.45797, lng: -0.97212}, //Malmaison
    {lat: 51.45376, lng: -0.96970}, //The Real Greek
    {lat: 51.45369, lng: -0.97325}  //Zerodegrees          
];



function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 51.45277, lng: -0.97364},
  });
}

function drop() {
  clearMarkers();

  for (let i = 0; i < readLocations.length; i++) {
    addMarkerWithTimeout(readLocations[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(() => {
    markers.push(
      new google.maps.Marker({
        position: position,
        map,
        animation: google.maps.Animation.DROP,
      })
    );
  }, timeout);
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
 

//     var styles = [
//     {
//         "featureType": "all",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#444444"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.province",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.locality",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.neighborhood",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.land_parcel",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.land_parcel",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#f2f2f2"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape.man_made",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             },
//             {
//                 "color": "#cee9de"
//             },
//             {
//                 "saturation": "2"
//             },
//             {
//                 "weight": "0.80"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.attraction",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.park",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "lightness": 45
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#f5d6d6"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "hue": "#ff0000"
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway.controlled_access",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway.controlled_access",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "hue": "#0064ff"
//             },
//             {
//                 "gamma": "1.44"
//             },
//             {
//                 "lightness": "-3"
//             },
//             {
//                 "weight": "1.69"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             },
//             {
//                 "weight": "0.31"
//             },
//             {
//                 "gamma": "1.43"
//             },
//             {
//                 "lightness": "-5"
//             },
//             {
//                 "saturation": "-22"
//             }
//         ]
//     },
//     {
//         "featureType": "transit",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "transit.line",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "hue": "#ff0000"
//             }
//         ]
//     },
//     {
//         "featureType": "transit.station.airport",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             },
//             {
//                 "hue": "#ff0045"
//             }
//         ]
//     },
//     {
//         "featureType": "transit.station.bus",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "hue": "#00d1ff"
//             }
//         ]
//     },
//     {
//         "featureType": "transit.station.bus",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "transit.station.rail",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             },
//             {
//                 "hue": "#00cbff"
//             }
//         ]
//     },
//     {
//         "featureType": "transit.station.rail",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#46bcec"
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "weight": "1.61"
//             },
//             {
//                 "color": "#cde2e5"
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     }
// ]
// map.set('styles', styles);
// }













// function setMarkers(map) {


//     for (let i = 0; i < readLocations.length; i++) {
//         const readLoc = readLocations[i];
//         new google.maps.Marker({
//             position: { lat: readLoc[1], lng: readLoc[2] },
//             map,
//             title: readLoc[0],
//             zIndex: readLoc[3],
//         });

      
//     }

   




