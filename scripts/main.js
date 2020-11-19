

var btn = document.querySelectorAll("button.modal-button");

var modals = document.querySelectorAll(".modal");

var spans = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') this.modals[index].style.display = "none";
        }
    }
}

class readRest {
    constructor(name, address, phone, website, type, cost) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.type = type;
        this.cost = cost;
    }
}

let rest1 = new readRest("Bills", "St Mary's Church House, Chain Street, Reading, RG1 2HX", "0118 939 1365", "https://www.bills-website.co.uk/restaurants/reading", "International", "££");
console.log(rest1);

let rest2 = new readRest("Brewdog", "11 Castle Street, Reading, RG1 7SB", "0118 956 8755", "https://www.brewdog.com/uk/bars/uk/brewdog-reading", "Bar", "££");
console.log(rest2);

let rest3 = new readRest("The Bull Inn", "High Street, Sonning-on-Thames, Reading, RG4 6UP", "0118 969 3901", "https://www.fullers.co.uk/hotels", "Traditional", "£");
console.log(rest3);

let rest4 = new readRest("Carluccio's", "Forbury Square, Reading, RG1 3EY", "0118 958 3095", "https://www.carluccios.com/restaurants/reading/", "Italian", "£");
console.log(rest4);

let rest5 = new readRest("Coppa Club", "The Great House, Sonning-on-Thames, Reading, RG4 6UT", "0118 921 9890", "https://coppaclub.co.uk/sonning/", "Italian", "££");
console.log(rest5);

let rest6 = new readRest("London Street Brasserie", "The Oracle, 2-4 London Street, Reading, RG1 4PN", "0118 950 5036", "https://www.londonstbrasserie.co.uk/", "Modern British", "£££");
console.log(rest6);

let rest7 = new readRest("L'Ortolan", "Church Lane, Shinfield, Reading, RG2 9BY", "0118 988 8500", "https://lortolan.com/", "French", "££££");
console.log(rest7);

let rest8 = new readRest("Malmaison", "Great Western House, 18-20 Station Road, Reading, RG1 1JX", "0844 693 0660 ", "https://www.malmaison.com/locations/reading/", "French", "£££");
console.log(rest8);

let rest9 = new readRest("The Real Greek", "The Oracle, Reading, RG1 2AT", "0118 995 2270", "https://www.therealgreek.com/", "Greek", "££");
console.log(rest9);

let rest10 = new readRest("Zerodegrees", "9 Bridge Street, Reading, RG1 2LR", "011 959 7959", "https://www.zerodegrees.co.uk/", "Bar", "££");
console.log(rest10);

let restName2 = `${rest2.name}`;
let elVenueName2 = document.getElementById("name2");
elVenueName2.textContent = restName2;

let restAddress2 = `${rest2.address}`;
let elVenueAddress2 = document.getElementById("address2");
elVenueAddress2.textContent = restAddress2;

let restPhone2 = `${rest2.phone}`;
let elVenuePhone2 = document.getElementById("phone2");
elVenuePhone2.textContent = restPhone2;

let restWeb2 = `${rest2.website}`;
let elVenueWeb2 = document.getElementById("web2");
elVenueWeb2.textContent = restWeb2;

let restType2 = `${rest2.type}`;
let elVenueType2 = document.getElementById("type2");
elVenueType2.textContent = restType2;

let restCost2 = `${rest2.cost}`;
let elVenueCost2 = document.getElementById("cost2");
elVenueCost2.textContent = restCost2;

