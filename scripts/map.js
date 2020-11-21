const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;
let marker;

function initMap() {
                const redLocs = {lat: 51.45494, lng: -0.97323};
                const map = new google.maps.Map(document.querySelector("#map"), {
                center: redLocs,
                zoom: 13,
                disableDefaultUI: true
            });
           marker = new google.maps.Marker({
                position: redLocs,
                draggable: true,
                animation: google.maps.Animation.DROP,
                label: labels[labelIndex++ % labels.length],
                map,
                title: "Bill's Restaurant",
            });
            marker.addListener("click", toggleBounce);

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

initZoomControl(map);

function initZoomControl(map) {
    document.querySelector(".zoom-control-in").onclick = function() {
        map.setZoom(map.getZoom() + 1);
    };

    document.querySelector(".zoom-control-out").onclick = function() {
        map.setZoom(map.getZoom() - 1);
    };

    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.querySelector(".zoom-control")
    );
}


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
        }
    