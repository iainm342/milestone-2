

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

function readRest(name, address, phone, website, type, cost) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.type = type;
    this.cost = cost;
}

let rest1 = new readRest("Brewdog", "11 Castle Street, Reading, RG1 7SB", "01189568755", "https://www.brewdog.com/uk/bars/uk/brewdog-reading", "Bar", "££");
console.log(rest1);

let rest2 = new readRest("Zerodegrees", "9 Bridge Street, Reading, RG1 2LR", "01189597959", "https://www.zerodegrees.co.uk/", "Bar", "££");
console.log(rest2);

let restDetails1 = `${rest1.name} is located on ${rest1.address}. The phone number is ${rest1.phone} and their website is ${rest1.website}. The food served is ${rest1.type} and the cost is ${rest1.cost}.`;
let elVenue1 = document.getElementById("venue1");
elVenue1.textContent = restDetails1;

let restDetails2 = `${rest2.name} is located on ${rest2.address}. The phone number is ${rest2.phone} and their website is ${rest2.website}. The food served is ${rest2.type} and the cost is ${rest2.cost}.`;
let elVenue2 = document.getElementById("venue2");
elVenue2.textContent = restDetails2;