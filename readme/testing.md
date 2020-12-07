# **CODE INSTITUTE: MILESTONE PROJECT 2** #

# **WHAT'S FOR DINNER?** #

# Testing

[back to README.md file](https://github.com/iainm342/mileston-2/blob/master/README.md)

## **CONTENTS** ##

- [DevTools](#developer-tools)
- [Manual Testing](#manual-testing)
- [Automated Testing](#automated-testing)
    - [Code Validation](#code-validation)
    - [Accesibility Validation](#accesibility-validation)
    - [Browser Validation](#browser-validation)
    - [Lighthouse Audit](#lighthouse-audit)
- [User testing](#user-testing)
    - [Peer Testing](#peer-testing)
    - [User Testing](#user-testing)

## **DEVELOPER TOOLS** ##

### <ins>RESPONSIVENESS</ins>

The sites responsiveness was tested by the following methods:

- Chrome Developer Tools were used to test responsiveness on all screen sizes.
- Physical testing was carried out on Desktop, Tablet and various Mobile devices.
    - Throughout the whole process I was testing the responsiveness of the site on my laptop, iPhone X and iPad.
    - Once the site was in a state that I was happy with, I submitted it for Peer review.
    - I also asked friends and family to have a look at the site from a user perspective, rather than a coder perspective.
- All links were tested to ensure they worked on all devices.
- NavBar was tested to ensure it worked on all devices.
- All Modals tested to ensure correct information was displayed and that the links directed the user to the appropriate external site.

[Back to Contents](#contents)

## **MANUAL TESTING** ##

### <ins>CODE VALIDATION</ins> ###

All HTML and CSS was passed through [W3C Validator](https://validator.w3.org/), [W3C Validator CSS](https://jigsaw.w3.org/css-validator/) and [JShint](https://jshint.com/).

HTML Errors:

- All pages have been passed through the Validator, however, on the filter.html pages there are warnings due to there being no content between the h3 tags. The content is being added via the JS function managing the restaurant information Array.

![HTML Error](readme/images/w3html.png)

CSS Errors:

- All pages have been passed throught the Validator, however, the following warning has been received:

- backdrop-filter: blur(3px) in the .modal fails the W3C validation and there is the following error message:

![CSS Error](readme/images/w3ccss.png)

On searching for a reason why this was occurring I found this message from another developer to W3C stating that they had the same issue:

![CSS Message](readme/images/cssmessage.png)

I am presuming that this is a known error and have assumed that my CSS has passed validation.

JShint Errors:

- All pages have been passed through the Validator, however various warnings were presented.

[Back to Contents](#contents)

### <ins>ACCESIBILITY VALIDATION</ins>

The site was tested on the [WAVE](https://wave.webaim.org/) site. Passed with minimal errors although Contrast errors were generated due to colour choices for the design of the site.

[Back to Contents](#contents)

### <ins>BROWSER VALIDATION</ins> ###

The site was tested on the following browsers that I have access to:

- Google Chrome

![Chrome](readme/images/chrome.png)

- Mozilla Firefox

![Firefox](readme/images/firefox.png)

- Microsoft Edge

![Edge](readme/images/edge.png)

[Back to Contents](#contents)

### <ins>LIGHTHOUSE AUDIT</ins> ###

[Back to Contents](#contents)

## **USER TESTING** ##

### <ins>PEER TESTING</ins> ### 

[Back to Contents](#contents)

### <ins>USER TESTING</ins> ### 

I asked 5 people to test the site as **users** as I neared the end of the development process to ensure that that the User Stories needs had been met. The following feedback was given from the group:

- As a **user**, I want to see what restaurants are available in the town that I am in.
    - The **users** pressed the "Let's Eat' button on the Landing Page and is taken to locations.html. They are then able to select their town of choice by either pressing the town image or the Full List button. This takes them to the required "town_name".html page which contains the map and full venue listing. It was poined out that once in the "town_name".html page you had to navigate back to the landing page to be able to choose a different town. The Locations NavBar option was added at this point to make site navigation easier. This requirement was deemed as completed.
- As a **user**, I want to be able to choose a restaurant based on it's price level.
    - The **users** pressed the appropriate "Filters" button on location.html and is taken to the "town_name"filter.html page. They are then able to filter the restaurants by pressing one of the displayed buttons (£, ££, £££, ££££) used to indicate an increasing price point. It was pointed out that on mobile it was unclear by some users as to what to do next. Text was added below the town name to prompt the **user** to click on image to gain more information. This requirement was deemed as completed.
- As a **user**, I want to be able to choose a restaurant based on the type of food it offers.
    - The **users** pressed the appropriate "Filters" button on location.html and is taken to the "town_name"filter.html page. They are then able to filter the restaurants by pressing one of the displayed buttons indicating food style . As above, it was pointed out that on mobile it was unclear by some users as to what to do next. Text was added below the town name to prompt the **user** to click on image to gain more information. This requirement was deemed as completed.
- As a **user**, I want to be able to see where the restaurants are located within the town I am interested in.
    - The **users** pressed the image or "Full List" button of the required town on locations.html and is taken to the "town_name".html page. A Google Map is located at the top of the screen and has Marker pins that drop on to the map with the locations of all the restaurants listed. It was pointed out that, on mobile, when you press the marker it only brought up the description text and that it wasn't clear what each Marker related to. The Restaurant name was added to the description so that this was solved. This requirement is deemed as completed. 
- As a **user**, I want to be able to contact the restaurant of choice either through their website booking engine or by being provided contact details.
    - The **users** either acceses the details through pressing the image on the "town_name"filter.html and receiving a modal with the information or by using the accordion on "town_name".html. The website links are connected to the required restaurants website, the phone number is available and the "Book" button takes the **user** to the Restaurant's booking engine (where applicable). This requirement is deemed as completed.
- As a **user**, I want to be able to obtain basic information about the restaurants in the town that I am to help me decide where to reserve a table.
    - The **users** either acceses the details through pressing the image on the "town_name"filter.html and receiving a modal with the information or by using the accordion on "town_name".html. The website links are connected to the required restaurants website, the phone number is available and the "Book" button takes the **user** to the Restaurant's booking engine (where applicable). This requirement is deemed as completed.
- As a **user**, I want the site navigation to be intuitive and easy to use.
    - The **users** are presented with a landing page with a very clearly positioned button to press to take them to locations.html along with a NavBar that has links to all the pages on the site. The NavBar, initially, only linked the "town_name".html pages which meant the **user** had to navigate back to the Landing Page to effectively move around the site. Dropdowns were added to include the Full List and Filtered options and also a link to the Locations Page and Register Page. Total site access was achieved by doing this. This requirement is deemed as completed.
- As a **user**, I want the information to be displayed in a clear and organised manner to allow for quick decisions to be made.
    - The **users** felt the simple colour choice of red (#fa0606) and white was distinctive. It was mentioned that, especially in the info panel on the Accordion, the colour choice was slightly abrasive on the eyes to look at so much red text on a white background. The Accordion content was changed to color: black to make this easier to read. The **users** also pointed out tht there were spacing issues between the individual Accordions and that it wasn't always clear which button related to which restaurant. This was resolved by placing a horizontal rule between each Accordion. Once these changes were done the **users** felt this was an improvement. This requirement is deemed to be completed. 
- As a **user**, I want to be able to register with the **site owners** so that I can be informed of new restaurants registering on the site.
    - The **users** pressed the "Register" dropdown option on the NavBar and selected "New User". A simple form is presented where they are prompted to input their Name and Email address. On clicking the "Register" button it was pointed out that the form did not clear. An email was sent to them confirming they had registered and this was seen as a good thing. Form clearing still needs to be done.

As this site is a test project, I was unable to get the **business owner** user stories tested, however, I feel that they have been completed.

- As a **business owner**, I want the information on the site to represent my business and to look attractive.
    - Restaurants are highlighted by Markers on the Google Map, Restaurant Image, Accordion with Info and Modal. 
- As a **business owner**, I want to be able to register my interest with the **site owners** so that they can add me to the site.
    - **Business Owners** are able to register their business by clicking the "Register" button and selecting "New Business". On pressing "Register", again the form doesn't clear, and an email is sent to them saying "one of the team will be in touch".


[Back to Contents](#contents)