# Beer shop

<h2>Overview:</h2>

<h2>Brief:</h2>
It is a pair-coding hackaton-like training project. Aim of it - practice accessibility to public API, render information located there. It allows the user to access the APP and use API's information publicly. The project must consist of several components and router that are used to render UI. 

<h2>Approach:</h2>
This application was developed working with my classmate <a href="https://github.com/JoanKalanzi">Joan Kalanzi</a>. It is a 'hackaton"-like project, which was complete in 2 days time. This project uses publicly accessible API of BrewDog Company, you can find more about it <a href="https://punkapi.com/">here</a>. Using this project you can have a look at all sorts of beer produced and find out some more information about it, filter particular strength of beer of your choice and display a randomly selected one. 

<h2>Functionality:</h2>
Browse through selection of beer, sort them, choose a random one.

<h2>Deployed project:</h2>
<a href="https://joan-and-taras-beer-shop.netlify.app/beers">Beer shop</a>

<h2>Tech used:</h2>
<li>Insomnia - to access API structure</li>
<li>CSS3 and Bulma framework - for styling</li>
<li>JavsScript and React Library 17.0.2 - for rendering</li>

<h2>Sample screenshots:</h2>
<h5>Browse view with search dropdown bar</h5>
<img width="1330" alt="Screenshot 2021-08-11 at 17 02 24" src="https://user-images.githubusercontent.com/81250034/129043083-5bcc81e9-7af2-4454-917d-b7916be46ddc.png">
<h5>Single product view</h5>
<img width="1379" alt="Screenshot 2021-08-11 at 16 10 29" src="https://user-images.githubusercontent.com/81250034/129034579-2a10e567-eeba-4285-95b9-d6a255a9acd3.png">

<h2>Build:</h2>
<li>Create a router using "Browser router", "Switch" and "Route" from "react-router-dom". Create components, set up according paths to your switch routes.</li>
<li>Make sure, each component is imported correctly and has all desirable axios requests. Create state instances, to store particular data for rendering.</li>
<li>Work on front end implementation, using styling frameworks or/and CSS to layout data. Develop the idea of main image, display it, whilst handling errors.</li>
<li>Set particular ternary conditions, in order to display right information.</li>
<br>
(for more detailed examples see "sample code")
    
<h2>Sample code:</h2>
<li>Here we can see the structure of dropdwon menu and its impact to render:</li>
<br>
Firsly, "handleChange" uses the value of form options to take original data and converts it into new array, which is then used in ternary conditions. If new array is longer than 0 (has some information), that is what we use for rendering. 
<br>
<br>
BeerCard here acts like a component here. It determines, how every single white beer card will look like, and what interraction can be done with it.
<br>
<br>
<img width="496" alt="Screenshot 2021-08-11 at 16 59 01" src="https://user-images.githubusercontent.com/81250034/129042533-bf66286b-ae9c-4d60-b4bc-e879fc1b97ec.png">
<br>
<li>Now lets take a look at BeerCard component:</li>
<br>
It defines the structure of each white card used to display a beer.
<br>
<br>
* It uses props passed from main core AllBeers component, without API request. 
<br>
* Renders simple structure of BeerCard, which will be complemented by CSS.
<br>
* Each "card" is actually a link, which will lead you to more broad description of each beer on a separate component page.
<br>
<br>
<img width="554" alt="Screenshot 2021-08-11 at 17 12 23" src="https://user-images.githubusercontent.com/81250034/129044830-361f8079-0786-46ac-8e7a-62177fc599c3.png">
<li>Short overview for styling:</li>
<br>
This is my own example of SASS implementation. Completely custom CSS design, based on indentation leads me to deliver perfectly balanced UX when browsing.
<br>
<br>
* Hover gives it an inclusiveness and clickability, so as transition of transformation. 
<br>
* All layout is based on flex-box, essentially, allowing us to decide, what is allocated where without heavy lifting.
<br>
<br>
<img width="391" alt="Screenshot 2021-08-11 at 17 22 51" src="https://user-images.githubusercontent.com/81250034/129046689-ffcec4fe-2cc9-454b-b9db-08e37e778904.png">



https://user-images.githubusercontent.com/81250034/129051112-f5219798-899c-46ba-a5ad-23a4278c5712.mov



<h2>Wins and challenges:</h2>
<h4>Wins</h4>
<li>This project was a great practice using external API, using insomnia and accessing certain data from it and also learning how to use asynchronous functions.</li>
<li>Taking care of the biggest part of design, I did learned SASS deeper. Great experience mixing styling framework with custom CSS also.</li>
<li>As this was a pair programming project, it was sensational opportunity to be coding in a team, sometimes on one screen, oftenly keeping an eye on a partners code. Wonderful experience!</li>

<h4>Challenges</h4>
<li>The most challenging part was applying certain ternary statements. Syntax error were the milestone. Multiconditional approach was quite complicated feature to implement, but at the end of the project it was done like expected to be.</li>
<li>Because of limited time, we had to restrain our MVP to a very few features delivered. Time management - important challenge for this project, I believe, managed well.</li>

<h2>Potential improvements:</h2>
<li>Search by name or hops.</li>
<li>Ability to save some favourites (potential "basket").</li>
<li>Reogranising of code to have project rendering well on mobile devices.</li>
<li>Fixing of bugs (when you click on random beer - it load only once, you have to come back and do it again).</li>
<li>Fixing of layout (when you click on one beer - page does take just as much space as needed, leaving white field at the bottom).</li>
