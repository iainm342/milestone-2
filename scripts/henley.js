//Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//Array of Objects containing Restaurant information

let henRests = [{
        name: "The Angel on the Bridge",
        address: "Thameside, Henley-on-Thames, RG9 1BH",
        phone: "01491 410678",
        web: "https://www.theangelhenley.com/",
        type: "Gastropub",
        cost: "£"
    },
    {
        name: "Bistro at The Boathouse",
        address: "Station Road, Henley-on-Thames, RG9 1AZ",
        phone: "01491 577937",
        web: "https://www.bistroattheboathouse.co.uk/#/",
        type: "British, Fine Dining",
        cost: "££££",
    },
    {
        name: "The Catherine Wheel",
        address: "7-15, Hart Street, Henley-on-Thames, RG9 2AR",
        phone: "01491 848484",
        web: "https://www.jdwetherspoon.com/pubs/all-pubs/england/oxfordshire/the-catherine-wheel-henleyonthames",
        type: "British",
        cost: "£",
    },
    {
        name: "Hotel du Vin & Bistro",
        address: "New Street, Henley-on-Thames, RG9 2BP",
        phone: "01491 848400",
        web: "https://www.hotelduvin.com/locations/henley-on-thames/",
        type: "French, Sunday Lunch, Afternoon Tea",
        cost: "££",
    },
    {
        name: "H Cafe",
        address: "Market Place, Henley-on-Thames, RG9 2AH",
        phone: "01491 482277",
        web: "https://www.harrods.com/en-us/harrods-group/h-cafe",
        type: "Snacks, Afternoon Tea",
        cost: "£",
    },
    {
        name: "The Little Angel",
        address: "Remenham Lane, Henley-on-Thames, RG9 2LS",
        phone: "01491 411008",
        web: "https://www.thelittleangel.co.uk/",
        type: "Gastropub",
        cost: "£",
    },
    {
        name: "Cafe Rouge",
        address: "37, Hart Street, Henley-on-Thames, RG9 2AR",
        phone: "01491 411733",
        web: "https://www.caferouge.com/",
        type: "French, Sunday Lunch",
        cost: "££",
    },
    {
        name: "Spice Merchant",
        address: "25, Thameside, Henley-on-Thames, RG9 2LJ",
        phone: "01491 636118",
        web: "https://www.spicemerchantgroup.com/henley",
        type: "Indian, Afternoon Tea",
        cost: "£££",
    },
    {
        name: "Zizzi",
        address: "The Former White Hart, 21-23, Hart Street, Henley-on-Thames, RG9 2AR",
        phone: "01491 410070",
        web: "https://www.zizzi.co.uk/italian/restaurants/henley",
        type: "Italian",
        cost: "££",
    },
];

let henRest;

let venueName;
let venueAddress;
let venueWeb;
let venuePhone;
let venueType;
let venueCost;

//Loop to iterate Array of Object and push data to the DOM

function venueInfo() {
    for (i = 1; i < henRests.length + 1; i++) {
        venueName = document.getElementById("name" + i);
        henRest = henRests[i - 1].name;
        venueName.textContent = henRest;

        venueAddress = document.getElementById("address" + i);
        henRest = henRests[i - 1].address;
        venueAddress.textContent = henRest;

        venuePhone = document.getElementById("phone" + i);
        henRest = henRests[i - 1].phone;
        venuePhone.textContent = henRest;

        venueWeb = document.getElementById("web" + i);
        henRest = henRests[i - 1].web;
        venueWeb.textContent = henRest;

        venueType = document.getElementById("type" + i);
        henRest = henRests[i - 1].type;
        venueType.textContent = henRest;

        venueCost = document.getElementById("cost" + i);
        henRest = henRests[i - 1].cost;
        venueCost.textContent = henRest;
    }
}

venueInfo();