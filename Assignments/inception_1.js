// What is Emmet?
// Emmet is a free add-on to your text editor that allows you to write shortcuts that are then expanded into complete pieces of code. By using Emmet, email designers write less, saving both keystrokes and time when running campaigns. Also, relying on Emmet’s autocompletion means fewer typos and missing tags, resulting in more robust emails.

// Difference b/w a libraray and framework
// Developers often use the terms “library” and “framework” interchangeably. But there is a difference.
//Both frameworks and libraries are code written by someone else that is used to help solve common problems.

// For example, let’s say you have a program where you plan on working with strings. You decide to keep your code DRY (don’t repeat yourself) and write some reusable functions like these:

// function getWords(str) {
//     const words = str.split(' ');
//     return words;
//  }
//  function createSentence(words) {
//     const sentence = words.join(' ');
//     return sentence;
//  } Congratulations. You’ve created a library.
// The Technical Difference
// The technical difference between a framework and library lies in a term called inversion of control.

// When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

// what is CDN
// A content delivery network is a network of interconnected servers so that when you request anything present on some other server that can be offered to you as per your nearest location. doing it can speed up the web page loading for heavy data apps. suppose user is located far from the website server in this case sending data like images, videos to user from that location of server might get slow and it can hinder client or user experience so to overcome this problem the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.
// Benifites of CDN
// 1 its reduce page load time  
// 2 Reducing bandwidth costs - bandwidth costs are a significant expense because every incoming request consumes network bandwidth. Thought caching and other optimization CDNs can reduce the amount of data an origin server must provide 
// 3 Increase content availability
// 4 Improve website security -- Distributed denial of service try to take down your app  by sending large amount of fake traffic to the website. CDN can handle these spikes just distributing such fake traffic between server intermediary servers. reducing the impact on the origin server

// why react is called react
// react is called react bcz it reacts to the changes whenever we change anything on our webapp using react it simply changes that into app

// what is cross-origin in the script tag?
// cross origin (CORS) is a technique to share data between different origins. By default browser follows SOP(same origin policy) that means an origin can only request to its origin if it needs to request to different origin then it needs to follow CORS which include a header, options and etc before sending a actual request a preflight req get send if that returns good response then actual request goes.

// what is difference b/w react and react-dom
// prior to v 0.14 react dom were the part of core react. As the name suggest react-dom is glue between react and dom. For exact reason they got split bcz of react native arrival. React contains functionality utilised in web and moblile apps. React dom functionality only implies into browsers 

// what is difference b/w react.development.js and react.production.js files via CDN
// as name suggest react.production.js file is used in production and react.development.js files used in developement

// defer and async script loading

// so in js there are three attribute that are regular, async, defer   
// so there are two ways of including these attributes in our script tag i.e head tag and body tag.
// Regular -- In head --> it first start parsing html then it stops parsing the html as soon as it finds script in head tag and start to fetch and executing that first -- so we can only look to mention script tag in body so that if first parse html and then script

// Async -- In head -> Both html and script get parse asynchonously (same time) as soon as it fetch script it stop html parsing execute script tag after execution script tag it finished parsing HTML
// parsing HTMl, fetching script (stopped parsing HTML), executing script and then finished parsing HTML

// 1. Script are fetched asynchronously and executed immediately
// 2. Usually the DOMContentLoaded event waits for all script to execute except for async scripts. So, dom content Loaded method does not wait for an async script. so if a long script is fetching and html gets parsed before that the DOMcontentloaded event happen at the time html finished 
// 3. Scripts are not gurranted to happen is exact order. so whatever script arrives first gets executed first 
// 4. Use for 3rd party software where order does not matter

// putting async in body does not make more sense 

// Defer -- In head --> it starts parsing html and fetching script then execure both at same time. in this none of things get interrupted
// 1 Script are fetched asynchronously and executed after the HTML is completely parsed
// 2 DOMcontentloaded event fires after defer script is executed
// 3 Scripts are executed in order. 
// 4 this is overall good solution to our own scripts and when order matters
// putting defer in body does not make any sense too