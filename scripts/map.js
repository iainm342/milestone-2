// const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let labelIndex = 0;
// let markers = 0;
// let map;


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 51.45425, lng: -0.97074 },
        disableDefaultUI: true,
    });
    setMarkers(map);
    // initZoomControl(map);
}

var readLocations = [
    ["Bill's Restaurant", 51.45494, -0.97323, 1], //Bill's
    ["Brewdog", 51.45356, -0.97426, 2], //Brewdog
    ["The Bull Inn", 51.47375, -0.91180, 3], //The Bull
    ["Carluccio's", 51.45595, -0.96786, 4], //Carluccio's
    ["Coppa Club", 51.47536, -0.91285, 5], //Coppa Club
    ["London Street Brasserie", 51.45399, -0.96876, 6], //London Street Brasserie
    ["L'Ortolan", 51.40905, -0.95410, 7], //L'Ortolan
    ["Malmaison", 51.45797, -0.97212, 8], //Malmaison
    ["The Real Greek", 51.45376, -0.96970, 9], //The Real Greek
    ["Zerodegrees", 51.45369, -0.97325, 10],  //Zerodegrees          
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


// function drop() {
//     clearMarkers();

//     for (let i=0; i < readLocations.length; i++) {
//         addMarkerWithTimeout(readLocations[i], i * 200);
//     }
// }

// function addMarkerWithTimeout(position, timeout) {
//     window.setTimeout(() => {
//         markers.push(
//             new google.maps.Marker({
//                 position: position,
//                 map,
//                 animation: google.maps.Animation.DROP,
         
//             })
//         );
//     }, timeout);
// }

// function clearMarkers() {
//     for (let i=0; i < markers.length; i++) {
//         markers[i].setMap(null);
//     }
//     markers = [];
// }

// 
// function initMap() {
//                 const redLocs = {lat: 51.45494, lng: -0.97323};
//                 const map = new google.maps.Map(document.querySelector("#map"), {
//                 center: redLocs,
//                 zoom: 13,
//                 disableDefaultUI: true
//             });
//             google.maps.event.addListener(map, "click", (event) => {
//                 addMarker(event.latLng, map);
//             });
//             addMarker(redLocs, map);
        
        //    marker = new google.maps.Marker({
        //         position: redLocs,
        //         draggable: true,
        //         animation: google.maps.Animation.DROP,
        //         label: labels[labelIndex++ % labels.length],
        //         map,
        //         title: "Bill's Restaurant",
        //     });
        //     marker.addListener("click", toggleBounce);

// function addMarker(location, map) {
//     new google.maps.Marker({
//         position: redLocs,
//         draggable: true,
//         animation: google.maps.Animation.DROP,
//         label: labels[labelIndex++ % labels.length],
//         map: map,
//         title: "Bill's Restaurant"
//     });
// }


// function toggleBounce() {
//     if (marker.getAnimation() !== null) {
//         marker.setAnimation(null);
//     } else {
//         marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
// }




        //     var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        //     var locations = [
        //         {lat: 51.45494, lng: -0.97323}, //Bill's
        //         {lat: 51.45356, lng: -0.97426}, //Brewdog
        //         {lat: 51.47375, lng: -0.91180}, //The Bull
        //         {lat: 51.45595, lng: -0.96786}, //Carluccio's
        //         {lat: 51.47536, lng: -0.91285}, //Coppa Club
        //         {lat: 51.45399, lng: -0.96876}, //London Street Brasserie
        //         {lat: 51.40905, lng: -0.95410}, //L'Ortolan
        //         {lat: 51.45797, lng: -0.97212}, //Malmaison
        //         {lat: 51.45376, lng: -0.96970}, //The Real Greek
        //         {lat: 51.45369, lng: -0.97325}  //Zerodegrees
                
        // ];
        //     var markers = locations.map(function(location, i) {
        //         return new google.maps.Marker({
        //             position: location,
        //             label: labels[i % labels.length]
        //         });
        //     });
        // }
    