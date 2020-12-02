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

function marlowRest(name, address, phone, website, type, cost) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.type = type;
        this.cost = cost;
    }


let rest1 = new marlowRest("The Marlow Bar & Grill", "92-94 High Street, Marlow, SL7 1AQ", "01628 488544", "https://therestaurantbarandgrill.com/our-restaurants/marlow/", "British, Brunch", "££");

let rest2 = new marlowRest("The Chequers", "51-53, High Street, Marlow, SL7 1BA", "01628 482053", "https://www.thechequersmarlow.co.uk/", "Steak", "££");

let rest3 = new marlowRest("The Coach", "3, West Street, Marlow, SL7 2LS", "01628 483013", "https://www.thecoachmarlow.co.uk/", "Gastropub, British", "££");

let rest4 = new marlowRest("Glaze Restaurant @ Crowne Plaza Hotel", "Crowne Plaza Marlow, Fieldhouse Lane, Marlow, SL7 1GJ", "01628 496800", "https://www.cpmarlow.co.uk/dine", "British, Indian", "££");

let rest5 = new marlowRest("The Hand and Flowers", "126, West Street, Marlow, SL7 2BP", "01628 482277", "http://www.thehandandflowers.co.uk/", "Fine Dining, Sunday Lunch", "££££");

let rest6 = new marlowRest("The Ivy", "66-68, High Street, Marlow, SL7 1AH", "01628 902777", "https://theivymarlowgarden.com/", "British, Alfresco, Brunch", "££");

let rest7 = new marlowRest("Riverside Restaurant @ Macdonald Compleat Angler", "Macdonald Compleat Angler, Marlow Bridge, Marlow, SL7 1RG", "01628 405406 ", "https://www.macdonaldhotels.co.uk/our-hotels/south-england/marlow/macdonald-compleat-angler", "British, Sunday Lunch", "£££");

let rest8 = new marlowRest("Sindhu @ Macdonald Compleat Angler", "Macdonald Compleat Angler, Marlow Bridge, Marlow, SL7 1RG", "01628 728126", "http://www.sindhurestaurant.co.uk/", "Fine Dining, Indian", "£££");

let rest9 = new marlowRest("Giggling Squid", "24, West Street, Marlow, SL7 2BP", "01628 483047", "https://www.gigglingsquid.com/restaurant/marlow/", "Thai", "££");

//rest1
let restName1 = `${rest1.name}`;
let elVenueName1 = document.getElementById("name1");
elVenueName1.textContent = restName1;
console.log(rest1.name);

let restAddress1 = `${rest1.address}`;
let elVenueAddress1 = document.getElementById("address1");
elVenueAddress1.textContent = restAddress1;
console.log(rest1.address);

let restPhone1 = `${rest1.phone}`;
let elVenuePhone1 = document.getElementById("phone1");
elVenuePhone1.textContent = restPhone1;

let restWeb1 = `${rest1.website}`;
let elVenueWeb1 = document.getElementById("web1");
elVenueWeb1.textContent = restWeb1;

let restType1 = `${rest1.type}`;
let elVenueType1 = document.getElementById("type1");
elVenueType1.textContent = restType1;

let restCost1 = `${rest1.cost}`;
let elVenueCost1 = document.getElementById("cost1");
elVenueCost1.textContent = restCost1;

// function restInfo() {
//     for (let i=1; i <=10; i++) {
//     let restName[i] = `${rest[i].name}`;
//     let elVenueName[i] = document.getElementById("name[i]");
//     elVenueName[i].textContent = restName[i];
//     }
// }

//rest2
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

//rest3
let restName3 = `${rest3.name}`;
let elVenueName3 = document.getElementById("name3");
elVenueName3.textContent = restName3;

let restAddress3 = `${rest3.address}`;
let elVenueAddress3 = document.getElementById("address3");
elVenueAddress3.textContent = restAddress3;

let restPhone3 = `${rest3.phone}`;
let elVenuePhone3 = document.getElementById("phone3");
elVenuePhone3.textContent = restPhone3;

let restWeb3 = `${rest3.website}`;
let elVenueWeb3 = document.getElementById("web3");
elVenueWeb3.textContent = restWeb3;

let restType3 = `${rest3.type}`;
let elVenueType3 = document.getElementById("type3");
elVenueType3.textContent = restType3;

let restCost3 = `${rest3.cost}`;
let elVenueCost3 = document.getElementById("cost3");
elVenueCost3.textContent = restCost3;

//rest4
let restName4 = `${rest4.name}`;
let elVenueName4 = document.getElementById("name4");
elVenueName4.textContent = restName4;

let restAddress4 = `${rest4.address}`;
let elVenueAddress4 = document.getElementById("address4");
elVenueAddress4.textContent = restAddress4;

let restPhone4 = `${rest4.phone}`;
let elVenuePhone4 = document.getElementById("phone4");
elVenuePhone4.textContent = restPhone4;

let restWeb4 = `${rest4.website}`;
let elVenueWeb4 = document.getElementById("web4");
elVenueWeb4.textContent = restWeb4;

let restType4 = `${rest4.type}`;
let elVenueType4 = document.getElementById("type4");
elVenueType4.textContent = restType4;

let restCost4 = `${rest4.cost}`;
let elVenueCost4 = document.getElementById("cost4");
elVenueCost4.textContent = restCost4;

//rest5
let restName5 = `${rest5.name}`;
let elVenueName5 = document.getElementById("name5");
elVenueName5.textContent = restName5;

let restAddress5 = `${rest5.address}`;
let elVenueAddress5 = document.getElementById("address5");
elVenueAddress5.textContent = restAddress5;

let restPhone5 = `${rest5.phone}`;
let elVenuePhone5 = document.getElementById("phone5");
elVenuePhone5.textContent = restPhone5;

let restWeb5 = `${rest5.website}`;
let elVenueWeb5 = document.getElementById("web5");
elVenueWeb5.textContent = restWeb5;

let restType5 = `${rest5.type}`;
let elVenueType5 = document.getElementById("type5");
elVenueType5.textContent = restType5;

let restCost5 = `${rest5.cost}`;
let elVenueCost5 = document.getElementById("cost5");
elVenueCost5.textContent = restCost5;

//rest6
let restName6 = `${rest6.name}`;
let elVenueName6 = document.getElementById("name6");
elVenueName6.textContent = restName6;

let restAddress6 = `${rest6.address}`;
let elVenueAddress6 = document.getElementById("address6");
elVenueAddress6.textContent = restAddress6;

let restPhone6 = `${rest6.phone}`;
let elVenuePhone6 = document.getElementById("phone6");
elVenuePhone6.textContent = restPhone6;

let restWeb6 = `${rest6.website}`;
let elVenueWeb6 = document.getElementById("web6");
elVenueWeb6.textContent = restWeb6;

let restType6 = `${rest6.type}`;
let elVenueType6 = document.getElementById("type6");
elVenueType6.textContent = restType6;

let restCost6 = `${rest6.cost}`;
let elVenueCost6 = document.getElementById("cost6");
elVenueCost6.textContent = restCost6;

//rest7
let restName7 = `${rest7.name}`;
let elVenueName7 = document.getElementById("name7");
elVenueName7.textContent = restName7;

let restAddress7 = `${rest7.address}`;
let elVenueAddress7 = document.getElementById("address7");
elVenueAddress7.textContent = restAddress7;

let restPhone7 = `${rest7.phone}`;
let elVenuePhone7 = document.getElementById("phone7");
elVenuePhone7.textContent = restPhone7;

let restWeb7 = `${rest7.website}`;
let elVenueWeb7 = document.getElementById("web7");
elVenueWeb7.textContent = restWeb7;

let restType7 = `${rest7.type}`;
let elVenueType7 = document.getElementById("type7");
elVenueType7.textContent = restType7;

let restCost7 = `${rest7.cost}`;
let elVenueCost7 = document.getElementById("cost7");
elVenueCost7.textContent = restCost7;

//rest8
let restName8 = `${rest8.name}`;
let elVenueName8 = document.getElementById("name8");
elVenueName8.textContent = restName8;

let restAddress8 = `${rest8.address}`;
let elVenueAddress8 = document.getElementById("address8");
elVenueAddress8.textContent = restAddress8;

let restPhone8 = `${rest8.phone}`;
let elVenuePhone8 = document.getElementById("phone8");
elVenuePhone8.textContent = restPhone8;

let restWeb8 = `${rest8.website}`;
let elVenueWeb8 = document.getElementById("web8");
elVenueWeb8.textContent = restWeb8;

let restType8 = `${rest8.type}`;
let elVenueType8 = document.getElementById("type8");
elVenueType8.textContent = restType8;

let restCost8 = `${rest8.cost}`;
let elVenueCost8 = document.getElementById("cost8");
elVenueCost8.textContent = restCost8;

//rest9
let restName9 = `${rest9.name}`;
let elVenueName9 = document.getElementById("name9");
elVenueName9.textContent = restName9;

let restAddress9 = `${rest9.address}`;
let elVenueAddress9 = document.getElementById("address9");
elVenueAddress9.textContent = restAddress9;

let restPhone9 = `${rest9.phone}`;
let elVenuePhone9 = document.getElementById("phone9");
elVenuePhone9.textContent = restPhone9;

let restWeb9 = `${rest9.website}`;
let elVenueWeb9 = document.getElementById("web9");
elVenueWeb9.textContent = restWeb9;

let restType9 = `${rest9.type}`;
let elVenueType9 = document.getElementById("type9");
elVenueType9.textContent = restType9;

let restCost9 = `${rest9.cost}`;
let elVenueCost9 = document.getElementById("cost9");
elVenueCost9.textContent = restCost9;

