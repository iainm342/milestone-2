//Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i=0; i <acc.length; i++) {
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

let marlRests = [
  {
    name: "The Marlow Bar & Grill",
    address: "92-94 High Street, Marlow, SL7 1AQ",
    phone: "01628 488544",
    web: "https://therestaurantbarandgrill.com/our-restaurants/marlow/",
    type: "British, Brunch",
    cost: "££"
  },
  {
    name: "The Chequers",
    address: "51-53, High Street, Marlow, SL7 1BA",
    phone: "01628 482053",
    web: "https://www.thechequersmarlow.co.uk/",
    type: "Steak",
    cost: "££",
  },
  {
    name: "The Coach",
    address: "3, West Street, Marlow, SL7 2LS",
    phone: "01628 483013",
    web: "https://www.thecoachmarlow.co.uk/",
    type: "Gastropub, British",
    cost: "££",
  },
  {
    name: "Glaze Restaurant @ Crowne Plaza Hotel",
    address: "Crowne Plaza Marlow, Fieldhouse Lane, Marlow, SL7 1GJ",
    phone: "01628 496800",
    web: "https://www.cpmarlow.co.uk/dine",
    type: "British, Indian",
    cost: "££",
  },
  {
    name: "The Hand and Flowers",
    address: "126, West Street, Marlow, SL7 2BP",
    phone: "01628 482277",
    web: "http://www.thehandandflowers.co.uk/",
    type: "Fine Dining, Sunday Lunch",
    cost: "££££",
  },
  {
    name: "The Ivy",
    address: "66-68, High Street, Marlow, SL7 1AH",
    phone: "01628 902777",
    web: "https://theivymarlowgarden.com/",
    type: "British, Alfresco, Brunch",
    cost: "££",
  },
  {
    name: "Riverside Restaurant @ Macdonald Compleat Angler",
    address: "Macdonald Compleat Angler, Marlow Bridge, Marlow, SL7 1RG",
    phone: "01628 405406",
    web: "https://www.macdonaldhotels.co.uk/our-hotels/south-england/marlow/macdonald-compleat-angler",
    type: "British, Sunday Lunch",
    cost: "£££",
  },
  {
    name: "Sindhu @ Macdonald Compleat Angler",
    address: "Macdonald Compleat Angler, Marlow Bridge, Marlow, SL7 1RG",
    phone: "01628 728126",
    web: "http://www.sindhurestaurant.co.uk/",
    type: "Fine Dining, Indian",
    cost: "£££",
  },
  {
    name: "Giggling Squid",
    address: "24, West Street, Marlow, SL7 2BP",
    phone: "01628 483047",
    web: "https://www.gigglingsquid.com/restaurant/marlow/",
    type: "Thai",
    cost: "££",
  },
];

let marlRest;

let venueName;
let venueAddress;
let venueWeb;
let venuePhone;
let venueType;
let venueCost;

//Loop to iterate Array of Object and push data to the DOM

function venueInfo() {
  for (i = 1; i < marlRests.length + 1; i++) {
    venueName = document.getElementById("name" + i);
    marlRest = marlRests[i - 1].name;
    venueName.textContent = marlRest;
   
    venueAddress = document.getElementById("address" + i);
    marlRest = marlRests[i - 1].address;
    venueAddress.textContent = marlRest;

    venuePhone = document.getElementById("phone" + i);
    marlRest = marlRests[i - 1].phone;
    venuePhone.textContent = marlRest;

    venueWeb = document.getElementById("web" + i);
    marlRest = marlRests[i - 1].web;
    venueWeb.textContent = marlRest;

    venueType = document.getElementById("type" + i);
    marlRest = marlRests[i - 1].type;
    venueType.textContent = marlRest;

    venueCost = document.getElementById("cost" + i);
    marlRest = marlRests[i - 1].cost;
    venueCost.textContent = marlRest;
  }
}

venueInfo();