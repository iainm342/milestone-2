
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

let readRests = [
  {
    name: "Bills Restaurant",
    address: " St Marys Church House, Chain Street, Reading, RG1 2HX",
    phone: "0118 939 1365",
    web: "https://www.bills-website.co.uk/restaurants/reading",
    type: "International, Brunch",
    cost: "£",
  },
  {
    name: "Brewdog",
    address: "11 Castle Street, Reading, RG1 7SB",
    phone: "0118 956 8755",
    web: "https://www.brewdog.com/uk/bars/uk/brewdog-reading",
    type: "Bar, Burgers",
    cost: "££",
  },
  {
    name: "The Bull Inn",
    address: "High Street, Sonning-on-Thames, Reading, RG4 6UP",
    phone: "0118 969 3901",
    web: "https://www.fullers.co.uk/hotels",
    type: "Traditional, Sunday Lunch",
    cost: "£",
  },
  {
    name: "Coppa Club",
    address: "The Great House, Sonning-on-Thames, Reading, RG4 6UT",
    phone: "0118 921 9890",
    web: "https://coppaclub.co.uk/sonning/",
    type: "Italian, Brunch, Sunday Lunch",
    cost: "££",
  },
  {
    name: "London Street Brasserie",
    address: "The Oracle, 2-4 London Street, Reading, RG1 4PN",
    phone: "0118 950 5036",
    web: "https://www.londonstbrasserie.co.uk/",
    type: "Modern British, Sunday Lunch",
    cost: "£££",
  },
  {
    name: "LOrtolan",
    address: "Church Lane, Shinfield, Reading, RG2 9BY",
    phone: "0118 988 8500",
    web: "https://lortolan.com/",
    type: "French, Fine Dining",
    cost: "££££",
  },
  {
    name: "Malmaison",
    address: "Great Western House, 18-20 Station Road, Reading, RG1 1JX",
    phone: "0844 693 0660",
    web: "https://www.malmaison.com/locations/reading/",
    type: "French, Brasserie, Sunday Lunch",
    cost: "£££",
  },
  {
    name: "The Real Greek",
    address: "The Oracle, Reading, RG1 2AT",
    phone: "0118 995 2270",
    web: "https://www.therealgreek.com/",
    type: "Greek, Tapas",
    cost: "££",
  },
  {
    name: "Zerodegrees",
    address: "9 Bridge Street, Reading, RG1 2LR",
    phone: "0118 959 7959",
    web: "https://www.zerodegrees.co.uk/",
    type: "Bar, Pizza",
    cost: "££",
  },
];

let readRest;

let venueName;
let venueAddress;
let venueWeb;
let venuePhone;
let venueType;
let venueCost;


function venueInfo() {
  for (i = 1; i < readRests.length + 1; i++) {
    index = i;
    venueName = document.getElementById("name" + index);
    readRest = readRests[index - 1].name;
    venueName.textContent = readRest;
   
    venueAddress = document.getElementById("address" + index);
    readRest = readRests[index - 1].address;
    venueAddress.textContent = readRest;

    venuePhone = document.getElementById("phone" + index);
    readRest = readRests[index - 1].phone;
    venuePhone.textContent = readRest;

    venueWeb = document.getElementById("web" + index);
    readRest = readRests[index - 1].web;
    venueWeb.textContent = readRest;

    venueType = document.getElementById("type" + index);
    readRest = readRests[index - 1].type;
    venueType.textContent = readRest;

    venueCost = document.getElementById("cost" + index);
    readRest = readRests[index - 1].cost;
    venueCost.textContent = readRest;
  }
}

venueInfo();

