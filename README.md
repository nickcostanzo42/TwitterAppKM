# TwitterAppKM
Introduction:

An application that uses the Twitter API to allow users to search for Tweets based on username, a specified search term and/or location.  This project was completed using JavaScript, Node.js, NPM, HTML5, and CSS3.

I chose to develop this application because I enjoy using API's provided by social network sites.  Instead of accessing the API through the front-end, I decided to instead use the NPM Twitter package to create an API of my own that the client-side code can communicate with. The app works by processing input values given by the user into query terms and it then sends those values as an HTTP request to my local server.  Then at the local server, it utilizes the Twitter API to retrieve query results based on what the user searched for, and then sends them back to the front-end.  The results are then looped through, and displayed on the page.  Depending on what the user searches for, one of six API routes is hit.  I decided to do it like this because it's more efficient and decreases the chance the application will break because it couldn't understand what the user was looking for.  

Using/Testing:

** You will need to install a version of node that is greater than 6.0

In order to run this app, first you'll need to git clone it to a directory on your PC.  Second, you'll have to get API key's for both Twitter and Google's Geolocation services (My own Twitter and Google credentials are untracked in a local .env file, and I've included where you should include API keys in both: /public/script/index.js and /app.js).  Third, you'll need to create a bearer token for access to Twitter's API, I've included a script that should be able to help (see: /bearer-token-script.js). Finally, traverse to the root directory of the application in your terminal and run npm Install (this will take a few seconds), and then run the command npm start.  

From there you should be able to access 'http://localhost:4200' in your terminal and you will be able to use the application.  You can search for tweets based on a screen name or search term and it will populate the DOM with what's retrieved from Twitters API.  You MUST enter either a screen name or search term because a query value is necessary for Twitter's API.  Number of results is also necessary, but that because of my design choice.  I do want to limit the API query as to not disturb or get banned from using it.  The location is an optional query value for both this application and the Twitter API.  It converts the name of a location (in string format) into geo-coordinates using Google's Geolocation API.  Once the user submits a query, twitter cards will be printed to the page containing twitter handles, twitter usernames, pictures, and the text for all of the matched search results.  Each results will be organized into it's on MaterializeCSS card.  The user can thenarrange these cards using the jQuery sortable method.  I did want to make them hideable, but apparently there's a bug with the jQuery sortable method which disables click event-listeners on all child elements of the sortable container element.

Tools/Libraries/FrameWorks/Packages:

I created this on a MacBook pro, but you should be able to run it on any Operating system given you have installed JavaScript, Node.js, and NPM installer.

Nodes.js - Ver. > 6.0 - Node was used to create the server-side of the application.  It is necessary for all JS libraries/frameworks (except jQuery) used in this application.

License: https://github.com/nodejs/node/blob/master/LICENSE
Source: https://nodejs.org/en/

NPM - Ver. 3.10.8 - NPM is necessary for compiling and using the node packages used in this application.

License: https://www.npmjs.com/policies/open-source-terms
Source: https://www.npmjs.com/

Express - Ver. 4.14.1 - Express is a minimalist web-framework that I used to create routes for hitting the Twitter API through the Twitter NPM package.  

License: https://spdx.org/licenses/MIT
Source: http://expressjs.com/

Mustache-Express - Ver. 1.2.4 - Mustache Express is a templating engine I used to render my views.

License: https://spdx.org/licenses/MIT
Source: https://github.com/bryanburgers/node-mustache-express

Nodemon - Ver. 1.11.0 - Nodemon is a package I used that allows for rapid testing during the development process.  It restarts the node server any time files within the parent directory it's initated in are changed.

License: https://spdx.org/licenses/MIT
Source: https://nodemon.io/

Request - Ver. 2.79.0 - A package that simplifies HTTP requests.  I use this in the bearer-token-scirpt to request a bearer token from oauth 1.0.  It is not necessary once you've gotten the bearer token.

License: https://spdx.org/licenses/Apache-2.0
Source: https://github.com/request/request

Twitter (NPM) - Ver 1.7.0 - The NPM package for accessing Twitter's API.  I used this to make all calls to Twitters API on the back-end.

License: https://spdx.org/licenses/MIT
Source: https://github.com/desmondmorris/node-twitter

Dotenv - Ver 4.0.0 - This package allows you to create a .env file that you can then read Environment variables from.  I used this to secure my API keys on the back-end.

License: https://spdx.org/licenses/BSD-2-Clause
Source: https://github.com/motdotla/dotenv

Materialize - CSS Framework - A styling framework similar to Bootstrap that I used for styling the applicaiton.

License: https://github.com/Dogfalo/materialize/blob/master/LICENSE
Source: http://materializecss.com/

jQuery - Ver 1.7.2 - A JavaScript library used to manipulate HTML DOM element without having to reload the browser page.

License: https://github.com/jquery/jquery/blob/master/LICENSE.txt
Source: https://jquery.com/

