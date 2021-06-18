
  
  We have used a BrewDog API for this project, see link below:
  https://api.punkapi.com/v2/beers/
  

  Introduction:
  _________________________________________________________________________________________________________________

  It is a pair-coding hackaton-like training project. Aim of it - practice accessibility to public API, render information located there. It allows the user to access the APP and use API's information publicly. The project consist of several components and router that are used to render UI.

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
  


