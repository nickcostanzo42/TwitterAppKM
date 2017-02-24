# TwitterAppKM
Introduction:

An application that uses the Twitter API to allow users to search for Tweets based on username, a specified search term and/or location.

I chose to develop this application because I enjoy using API's provided by social networking sites.  Instead of just accessing the API directly, I decided to instead use the NPM Twitter package to create an API of my own that the client-side code can communicate with.  This project was completed using JavaScript, Node.js, NPM, HTML5, and CSS3.

Using/Testing:
** You will need to install a version of node that is greater than 6.0

In order to run this app, first you'll need to git clone it to a directory on your PC.  Second, you'll have to get API key's for both Twitter and Google's Geolocation services (My own Twitter keys are untracked in a .env file, and I've included where you should include Google's API key in index.js line 11).  Third, you'll need to create a bearer token for access to Twitter's API, I've included a script that should be able to help (see: bearer-token-script.js). Finally, traverse to the root directory of the application in your terminal and run NPM Install (this will take a few seconds), and then run the command npm start.  

From there you should be able to access 'http://localhost:4200' in your terminal, where you will be able to use the application.  You can search for tweets based on a screen name or search term and it will populate the DOM with what's retrieved from Twitters API.  You MUST enter either a screen name or search term because a query value is necessary for Twitter's API.  Number of results is also necessary.  The location is an optional query value for both this application and the Twitter API.  It converts a the name of a location (in string format) into geo-coordinates using Google's Geolocation API.

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

