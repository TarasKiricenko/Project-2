# Beer shop
It is a pair-coding hackaton-like training project. Aim of it - practice accessibility to public API, render information located there. It allows the user to access the APP and use API's information publicly. The project consist of several components and router that are used to render UI.

<h2>Brief:</h2>
This application was developed working with my classmate <a href="https://github.com/JoanKalanzi">Joan Kalanzi</a>. It is a 'hackaton"-like project, which was complete in 2 days time. This project uses publicly accessible API of BrewDog Company, you can find more about it <a href="https://punkapi.com/">here</a>. Using this project you can have a look at all sorts of beer produced and find out some more information about it, filter particular strength of beer of your choice and display a randomly selected one. 

<h2>Functionality:</h2>
Browse through selection of beer, sort them, choose a random one.

<h2>Deployed project:</h2>
<a href="https://joan-and-taras-beer-shop.netlify.app/beers">Space Invaders</a>

<h2>Tech used:</h2>
<li>Insomnia - to access API structure</li>
<li>CSS3 and Bulma framework - for styling</li>
<li>JavsScript and React Library 17.0.2 - for rendering</li>

<h2>Sample screenshots:</h2>
<h5>Browse view with search dropdown bar</h5>
<img width="496" alt="Screenshot 2021-08-11 at 16 59 01" src="https://user-images.githubusercontent.com/81250034/129042533-bf66286b-ae9c-4d60-b4bc-e879fc1b97ec.png">
<h5>Single product view</h5>
<img width="1379" alt="Screenshot 2021-08-11 at 16 10 29" src="https://user-images.githubusercontent.com/81250034/129034579-2a10e567-eeba-4285-95b9-d6a255a9acd3.png">

<h2>Build:</h2>
<li>Create a router using "Browser router", "Switch" and "Route" from "react-router-dom". Create components, set up according paths to your switch routes.</li>
<li>Make sure, each component is imported correctly and has all desirable axios requests. Create state instances, to store particular data for rendering.</li>
<li>Work on front end implementation, using styling frameworks or/and CSS to layout data. Develop the idea of main image, display it, whilst handling errors.</li>
<li>Set particular ternary conditions, in order to display right information<img width="496" alt="Screenshot 2021-08-11 at 16 59 01" src="https://user-images.githubusercontent.com/81250034/129042533-bf66286b-ae9c-4d60-b4bc-e879fc1b97ec.png">
</li>
<br>
(for more detailed examples see "sample code")
    
<h2>Sample code:</h2>
<li>Here you can see, how the bullet moves and what are the conditions:</li>
<br>
First function defines what to do if a "cell" contains a particular class, and if right key is pressed, adds a bullet
<br>
<br>
Second function is running on interval, and moves the bullet up to the top of game field and removes it when bullet reaches top border.
<img width="650" alt="Screenshot 2021-08-11 at 14 34 16" src="https://user-images.githubusercontent.com/81250034/129022002-e2b971bb-f0b6-46b3-bea9-0d6df0625ee4.png">
<br>
<li>Here you can have a look at the another functional part:</li>
<br>
This functions defines what happens when you hit the alien:
<br>
<br>
* It checks, if first of all you do have 2 classes in one "cell" first
<br>
* Add points to your score span.
<br>
* Removes both alien and bullet, and sets explosion class to that cell.
<br>
* Takes aliens (as array) and splices that array at the index of killed alien.
<br>
* Finally, if that was the last alien, shows victory message.
<img width="837" alt="Screenshot 2021-08-11 at 14 46 24" src="https://user-images.githubusercontent.com/81250034/129023587-104ed98f-9275-4f46-b0fc-597c0a68edcb.png">

<h2>Wins and challenges:</h2>
<h4>Wins</h4>
<li>It was great practice on array methods and interval management, as well as using "for loop" and getElement functions. Perfect kind of project for beginners to solidify their knowledge of JavaScript</li>
<li>I designed this game myself, so the sounds I was using had to be "cut" to particualr pieces, as they had to fit sertain timeframes in my interval-paced game. Good fun and valuable experience.</li>

<h4>Challenges</h4>
<li>The most challenging part was defining a collision between alien bullet and player, as it is a multi-conditional function, that not only checks, if player was hit, but defines the movement of alien projectile.</li>
<li>Another very imlortant part, that was hard enough - styling. I wanted to create perfectly playable game, so I spend quite some time looking for right resources and making them look like a solid product.</li>

<h2>Potential improvements:</h2>
<li>Pause game functionality.</li>
<li>Mute functionality.</li>
<li>2 players functionality - 2 simultaneously and/or turn taking.</li>
<li>Difficulty levels, increasing speed of movement of aliens etc.</li>
  
  We have used a BrewDog API for this project, see link below:
  https://api.punkapi.com/v2/beers/
  

  Technologies:
  _________________________________________________________________________________________________________________

  Insonmia was used to access the API structure.
  VSCode was use to compile the code for this project.
  React 17.0.2 library was used to develop the application.

  Setup:
  _________________________________________________________________________________________________________________

  To run this project, install it locally using yarn:
  VSCode-terminal: yarn && yarn start.
  Bulma and SASS were used for styling.

  Description:
  _________________________________________________________________________________________________________________

  Started with search for API's that were suitable for the project.
  We then used insomnmia to access the API structure and determine whether it was useable.
  After getting the right API for the the project, we started off by create a wireframe mapping out the project.
  Please refer to our major views and interfaces in Image folder.
   
  Issues:
  _________________________________________________________________________________________________________________

  Major issues:
  * when trying to create a dropdown, and use a filter function referring to it, we were originally modifying the original data array, so we had to find a way to refer to our data externally, by using useState function.
  * error handling and using multiple ternaries inside of one component return section, quite complicated task because we were running into numerous syntax error. We had to take many steps back in order to get our logic expressed the way we want it.
  * It is a project, that allowed me to practice requests to API, handle the response information and also render it in browser developing UI.
  


