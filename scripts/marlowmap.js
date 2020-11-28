var markers = [
            {
                "title": "The Marlow Bar & Grill", 
                "lat": '51.57004',
                "lng": '-0.77508',
                "description": 'THE place to be seen by the Marlow locals!'
            },
            {
                "title": 'The Chequers',
                "lat": '51.57050',
                "lng": '-0.77522',
                "description": "Argentinian steak at it's best!"
            },
            {
                "title": 'The Coach',
                "lat": '51.57180',
                "lng": '-0.77720',
                "description": "Tom Kerridge's pub (well it's not really a pub)!"
            },
            {
                "title": 'Glaze',
                "lat": '51.57137',
                "lng": '-0.75242',
                "description": 'Contemporary surroundings and an Indian / British menu to boot!'
            },
            {
                "title": 'The Hand & Flowers',
                "lat": '51.56996',
                "lng": '-0.78327',
                "description": "Tonm Kerridge's 2 Michelin starred restaurant - a must for all foodies!"
            },
            {
                "title": "The Ivy",
                "lat": '51.57032',
                "lng": '-0.77553',
                "description": 'Caprice Holdings well known high street brand!'
            },
            {
                "title": "Riverside Restaurant @ Macdonald Compleat Angler",
                "lat": '51.56697',
                "lng": '-0.77218',
                "description": 'Riverside dining with stunning views over the River Thames!'
            },
            {
                "title": 'Sindhu @ Macdonald Compleat Angler',
                "lat": '51.56710',
                "lng": '-0.77237',
                "description": 'Indian fine dining in a stunning location!'
            },
            {
                "title": 'Giggling Squid',
                "lat": '51.57155',
                "lng": '-0.77770',
                "description": 'Thai food with a twist!'
            }
    ];

    console.log(markers);

    window.onload = function () {
        var mapOptions = {
            center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var infoWindow = new google.maps.InfoWindow();
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var i = 0;
        var interval = setInterval(function () {
            var data = markers[i]
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title,
                animation: google.maps.Animation.DROP
            });
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    infoWindow.setContent(data.description);
                    infoWindow.open(map, marker);
                });
            })(marker, data);
            i++;
            if (i == markers.length) {
                clearInterval(interval);
            }
        }, 200);

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
    ["Marlow Bar & Grill", 51.56958, -0.77475, 1],
    ["The Chequers", 51.57045, -0.77518, 2], 
    ["The Bull Inn", 51.47375, -0.91180, 3], 
    ["The Coach", 51.57172, -0.77719, 4], 
    ["Glaze @ Crown Plaza", 51.57139, -0.75241, 5], 
    ["The Ivy", 51.57028, -0.77544, 6],
    ["The Hand & Flowers", 51.56986, -0.78333, 7], 
    ["Riverside @ Macdonald Compleat Angler", 51.56691, -0.77275, 8], 
    ["Sindhu @ Macdonald Compleat Angler", 51.56713, -0.77232, 9], 
    ["The Giggling Squid", 51.57156, -0.77768, 10],           
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



