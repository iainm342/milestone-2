// const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let labelIndex = 0;
// let markers = 0;
// let map;


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 51.53737, lng: -0.90288},
        // disableDefaultUI: true,
    });
    setMarkers(map);
    // initZoomControl(map);
    var styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#cee9de"
            },
            {
                "saturation": "2"
            },
            {
                "weight": "0.80"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#f5d6d6"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#0064ff"
            },
            {
                "gamma": "1.44"
            },
            {
                "lightness": "-3"
            },
            {
                "weight": "1.69"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "weight": "0.31"
            },
            {
                "gamma": "1.43"
            },
            {
                "lightness": "-5"
            },
            {
                "saturation": "-22"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff0045"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00d1ff"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#00cbff"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "1.61"
            },
            {
                "color": "#cde2e5"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
map.set('styles', styles);
}



var readLocations = [
    ["The Angel on the Bridge", 51.53749, -0.90097, 1], 
    ["Bistro at The Boathouse", 51.53542, -0.900136, 2], 
    ["Hotel du Vin", 51.53913, -0.90189, 3],
    ["Cafe Rouge", 51.53787, -0.90258, 5], 
    ["Little Angel", 51.53726, -0.89750, 6],
    ["The Catherine Wheel", 51.53786, -0.90375, 7],
    ["Spice Merchant", 51.53865, -0.90113, 8], 
    ["HCafe", 51.53765, -0.90583, 9], 
    ["Zizzi", 51.53788, -0.90351, 10],          
];

function setMarkers(map) {


    for (let i = 0; i < readLocations.length; i++) {
        const readLoc = readLocations[i];
        new google.maps.Marker({
            position: { lat: readLoc[1], lng: readLoc[2] },
            map,
            title: readLoc[0],
            zIndex: readLoc[3],
        });

        // function initZoomControl(map) {
        //     document.querySelector(".zoom-control-in").onclick = function () {
        //         map.setZoom(map.getZoom() + 1);
        //     };

        //     document.querySelector(".zoom-control-out").onclick = function () {
        //         map.setZoom(map.getZoom() - 1);
        //     };

        //     map.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.querySelector(".zoom-control")
        //     );
        // }
    }
}



