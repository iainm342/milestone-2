# **CODE INSTITUTE: MILESTONE PROJECT 2** #

# **WHAT'S FOR DINNER?** #

![site display on different screens](/assets/images/readme/responsive.png)

This website was designed to offer the user a "one-stop" site to be able to search for restaurants in their desired town. The site allows them to filter the restaurants by cost/style and to then be provided the contact details of the chosen restaurant or to be able to hop on to their booking engine. The site also provides an unfiltered list and locations are provided using the Google Maps API so that they can see where the restaurants are located. There is also the option to sign up for updates and for businesses to request to join the site.

This is the second of four Milestone Projects required for the Full Stack Web Development course provided by Code Institute. The main goal for this project was to produce an "inbteractive front-end site to present useful information to the users" using HTML, CSS and JavaScript.

## **CONTENTS** ##

- [UX](#ux)
  - [Project Goals](#project-goals)
  - [User Stories](#user-stories)
  - [Design Process](#design-process)
    - [Fonts](#fonts)
    - [Colours](#colours)
    - [Wireframes](#wireframes)
- [Technology Used](#technology-used)
  - [Languages and Frameworks](#languages-and-frameworks)
  - [Tools](#tools)
- [Features](#features)
- [Testing](#testing)
- [Deployment](#deployment)
  - [Hosting](#hosting)
  - [Cloning](#cloning)
- [Credits](#credits)
  - [Images](#images)
  - [Image editing](#image-editing)
- [Acknowledgements](#acknowledgements)

## **UX** ##

### <ins>PROJECT GOALS</ins> ### 

The main aim of this project was to create a website that would give the user a useful website that would allow them to see local restaurants and to be able to filter the available restaurants by cost/style. Information would be provided to the user and also the ability to link to the individual restaurant sites to allow them to book through their booking engine or to contact them directly.

### <ins>USER STORIES</ins> ###

- As a **user**, I want to see what restaurants are available in the town that I am.
- As a **user**, I want to be able to choose a restaurant based on it's price level.
- As a **user**, I want to be able to choose a restaurant based on the type of food it offers.
- As a **user**, I want to be able to see where the restaurants are located within the town I am interested in.
- As a **user**, I want to be able to contact the restaurant of choice either through their website booking engine or by being provided contact details.
- As a **user**, I want to be able to register with the **site owners** so that I can be informed of new restaurants registering on the site.
- As a **business owner**, I want the information on the site to represent my business and to look attractive.
- As a **business owner**, I want to be able to register my interest with the **site owners** so that they can add me to the site.

[Back to Contents](#contents)

### <ins>DESIGN PROCESS</ins> ###

1. The initial concept for the project came from my interest, and desire to champion, the growing English Wine market. I wanted to have a simple website, that could be used by various user groups of any knowledge level, to give them access to information that would increase their awareness of the English wine market.  This resulted in the decision to have a landing page, an about page (basic introduction to English wines), a regions page, a producers page and a wines page (although this started off as a varietals page).

2. I chose to have a black and white image as the page background as I felt it had a strong impact on the user and with a simple title and "Find Out More" button in the middle of the screen it would make the user enter the website. This was carried on throughout the rest of the website but then removed as it was detracting from the information being provided on the cards. The "Racing Green" (#007542) colour was chosen to frame the body section of the pages as it is a striking colour and "fits" the subject matter well (in my opinion). 

3. I used Balsamiq to create my wireframes and used it to organise the flow of the site and how the different pages would respond to different screen sizes. 

4. The website design did change as I coded as I realised I was "learning on the job". I used the Bootstrap card component, which I didn't know existed before I started coding, instead of seperate images and text elements on the latter pages of the site. These were easy to use but were also challenging as they did not behave, initially, in the way I thought they should have done.

5. I feel that I have fulfilled the brief for the project but am aware that I strayed from the original design. I referred to my User Stories and wireframes throughout the process and all changes made were to improve the initial design choices that were made.

[Back to Contents](#contents)

### <ins>FONTS</ins> ###

I chose the Mulish font family for my headers and the Poppins font family for my body text as I liked the simplicity of their styles. Both fonts were chosen from [Google Fonts](https://fonts.google.com/).

### <ins>COLOURS</ins> ###

I used a "Racing Green" (#007542) colour for the Navigation Bar and Footer and then used [www.0to255.com](www.0to255.com) to pick complimentary colours to work with for the buttons and cards throughout the project. The black and white image for index.html was used as I felt it gave the site a professional feel. 

### <ins>WIREFRAMES</ins> ###

The site mock-ups were designed using [Balsamiq wireframes](https://balsamiq.com/). A pdf of the wireframe can be found [here](/assets/images/MSP1-Wireframe.pdf). I concentrated on how the different pages would look on different screen resolutions and mapped the corresponding elements on desktop, tablet and mobile screens accordingly. The varietals page changed during the coding process to become wines as I felt that this was more relevant to the various users.

### Landing Page ###

![Landing Page](/assets/images/readme/landing.png)

### About Page ###

![About Page](/assets/images/readme/about.png)

### Regions Page ###

![Regions Page](/assets/images/readme/regions.png)

### Producers Page ###

![Producers Page](/assets/images/readme/producers.png)

### Varietals Page ###

![Varietals Page](/assets/images/readme/varietals.png)

### Sign Up Form ###

![Sign Up Form](/assets/images/readme/signup.png)

[Back to Contents](#contents)

---  

## **TECHNOLOGY USED** ##

### <ins>LANGUAGES AND FRAMEWORKS</ins> ###

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - this was used for the modal form and also for the "scroll up" button to allow the user to return to the top of the screen.  The JS code for this was borrowed from the W3 Schools website after a search to find out how to create this.
- [jQuery](https://jquery.com/)
- [Font-Awesome](https://fontawesome.com/icons?d=gallery) - all icons were taken from this site.
- [Bootstrap](https://getbootstrap.com/) - I relied on Bootstrap for the responsive grid design, carousel and card components.
- [Google fonts](https://fonts.google.com/) - as previously stated, the fonts used were taken from here.
- [Popper](https://popper.js.org/)
- [Popper JS](https://popper.js.org/)
  
### <ins>TOOLS</ins> ###

- [Git](https://git-scm.com/) - version control and recording of all changes to site during development process
- [GitHub](https://github.com/) - used for hosting website
- GitPod - IDE used for code editing. 
- [Balsamiq](https://balsamiq.com/) - wireframing
- [Google Fonts](https://fonts.google.com/) - used to select font families
- [W3C Validator](https://validator.w3.org/) - used to test my HTML to ensure there were no errors
- [W3C Validator CSS](https://jigsaw.w3.org/css-validator/) - used to test my CSS to ensure there were no errors
- [WAVE](https://wave.webaim.org/) - used to test accesibility of site
- [0to255.com](www.0to255.com) - colour picker
- [Free Formatter]( https://www.freeformatter.com/html-formatter.html#ad-output) - html formatter to help keep things tidy!
- [Am I Responsive](http://ami.responsivedesign.is/#) - used to create responsive image for readme.MD
- [Favicomatic](https://favicomatic.com/) - used to generate the Favicon on the webpage tab

[Back to Contents](#contents)

---

## **FEATURES** ##

### <ins>FEATURES IMPLEMENTED</ins> ###
 
 - Static NavBar across all pages so that the user can navigate the site easily.
 - Links to external websites so that the user can get more information on the particular item they are interested in - region, producer or wine.
 - Social media links to the site owners pages.
 - Embeded video on About page giving information on the process of wine making in England.
 - Carousel images on About page showing "hero" style images.
 - Bootstrap cards which will allow future search functionality. 
 - Button at bottom of screen to allow user to return to the top of the page without scrolling.
 - Favicon used in title of web page.
 - Hover used on all buttons and web/email address links.
 - Modal form used for sign up along with ability to leave the form if the user doesn't wish to submit at that particular moment in time.


### <ins>FUTURE FEATURES</ins> ###

- Increase the content of the Regions page as there are more regions in England that produce wine.  This would require an A to Z "search" function to be added to allow quick navigation to that particular information card. 
- Increase the content of the Producers page as there are more regions in England that produce wine.  This would require an A to Z "search" function to be added to allow quick navigation to that particular information card.
- Increase the content of the Wines page as there are more regions in England that produce wine.  This would require an A to Z "search" function to be added to allow quick navigation to that particular information card.
- The addition of a search bar in the NavBar to allow instant site navigation for the user.


[Back to Contents](#contents)

---

## **TESTING** ##

### <ins>RESPONSIVENESS</ins>

The sites responsiveness was tested by the following methods:

- Chrome Developer Tools were used to test responsiveness on all screen sizes.
- Physical testing was carried out on Desktop, Tablet and various Mobile devices.
    - Throughout the whole process I was testing the responsiveness of the site on my laptop, iPhone X and iPad.
    - Once the site was in a state that I was happy with, I submitted it for Peer review.
    - I also asked friends and family to have a look at the site from a user perspective, rather than a coder perspective.
- All links were tested to ensure they worked on all devices.
- NavBar was tested to ensure it worked on all devices.
- Modal Form was tested to ensure that all fields required input from the user.

### <ins>BROWSER COMPATIBILITY</ins>

The site was tested on the following browsers that I have access to:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

### <ins>CODE VALIDATION</ins>

All HTML and CSS was passed through [W3C Validator](https://validator.w3.org/) and [W3C Validator CSS](https://jigsaw.w3.org/css-validator/).

### <ins>ACCESIBILITY VALIDATION</ins>

The site was tested on the [WAVE](https://wave.webaim.org/) site. Passed with minimal errors although Contrast errors were generated due to colour choices. This will be something I look at for future projects.

### <ins>ISSUES EXPERIENCED</ins>

There were several issues observed during development and testing:

- The initial images selected for the information cards on the Producers and Wines pages were of different sizes and some were had backgrounds and some didn't. As this was my first project I sourced new images for the Producers page and used stock images for the Wines page. This was not the intended outcome but allowed for consistency across the affected pages.
- Cards would reshape on the Wines page due to too much text. This meant the responsiveness of the page was inconsistent on different device types. Reduced content to allow for consistency as I felt that the links to the various sites would give the user the informtation they required.
- The addition of a "Back to Top" button has caused problems with the accesibility of the page which I tested on the [WAVE](https://wave.webaim.org/) website. As this was a function added using a JS code snippet from W3 Schools, I am unable to fix it at present.

[Back to Contents](#contents)

---

## **DEPLOYMENT** ##

### <ins>HOSTING</ins>

The site is hosted on [GitHub Pages](https://iainm342.github.io/milestone-1/).

Deployment of the site was achieved by following the steps below:

- opening GitHub in my Google Chrome (or any browser)
- signing in to GitHub using my username and password
- selected my repositories
- navigating to the repo to be deployed (iainm342/milestone-1)
- clicking on settings in the top navigation bar
- scrolling down the page until you reach GitHub pages
- selecting Branch:Master
- selecting Root 
- clicking on Save
- URL generated for use
- site is now live on [GitHub Pages](https://iainm342.github.io/milestone-1/)

### <ins>CLONING</ins>

If you wish to use my project, feel free, you can clone a copy to your machine by doing the following:

- open GitHub
- navigate to the repo (iainm342/milestone-1)
- click the green Code dropdown button
- select the option to open with GitHub
- follow the onscreen instructions and open with GitHub or another IDE


[Back to Contents](#contents)

---

## **CREDITS** ##

### <ins>IMAGES AND TEXT CONTENT</ins> ###

The images and card, text content used were sourced from various sites:

- [Shutterstock]() - Images only
- [Nyetimeber](https://nyetimber.com/)
- [Chapel Down](https://www.chapeldown.com/)
- [Hush Heath](https://hushheath.com/)
- [Litmus Wines](https://www.litmuswines.com/)
- [Astley Vineyard](https://www.astleyvineyard.co.uk/)
- [Grange Estate Wines](https://www.thegrangewine.co.uk/)
- [Wikipedia](https://www.wikipedia.org/)

### <ins>IMAGE EDITING</ins> ###

- I used the Shutterstock editing tool for the vector image used for the logo and Adobe Photoshop to transform the index.html background image to black and white.

### <ins>CODING IDEAS</ins>

Knowledge, and inspiration, was taken from the Code Institute projects - Whiskey Drop and Resume - for certain aspects of the site as this was the first time I have written any major piece of code.

W3 Schools for the JS code to install a "Back to Top" button which was then styled with an icon from Font Awesome.

[Back to Contents](#contents)

---

## **ACKNOWLEDGEMENTS** ##

Thank you to the following people:

- My mentor Seun Owonikoko for her time, guidance and putting up with my "wobble" on our first mentor call...
- The guys in the class of May 20 on Slack - always there for a chat when needed!
- My partner, Paul, for putting up with the growing obsession I have towards coding.

[Back to Contents](#contents)

---