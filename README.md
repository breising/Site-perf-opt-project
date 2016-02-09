
##Website Optimization Project: Brian Reising

This repository contains the Website Optimazation project files for Udacity Front-end Developers course. 


### Build Tools

The files in the 'src' folder were prepared for the 'dist' folder using the task runner Gulp. See the included gulpfile where all the tasks are listed: includes minification/compression of all files (js, css, html, and images) and saving them to their respective locations in the 'dist' folder. Reference to gulp installation and implementation can be found on the [Gulp Website here] (http://gulpjs.com/). Gulp requires prior installation of [npm](https://www.npmjs.com/) and then running `$ npm init` in your root project folder to create a `project.json` file. This file is required by the [Gulp plugins](http://gulpjs.com/plugins/). On the [Gulp Website](https://www.gulpjs.com/), you'll  find all the detailed info you need to install and use Gulp and all the plugins. To 'run' the site, clone the repository https://github.com/breising/portfolio.git. Inside the 'dist' folder you'll find the 'index.html' file to open in a browser.

### Optimizations in views/js/main.js

####Changing the size of the pizza images adjacent to each menu item was janky:
The function 'changePizzaSizes' contained a 'for' loop that iterated through some unnecessary steps:
1. Calculating the 'dx' value: required selector matching.
2. Calculating the 'newwidth' value: required more selector matching.
Both of the above calculations only need to be done once and not each time the loop iterates. So, these were moved out of the loop but kept inside the function to keep them in scope.

In addition, the 'for' loop was assigning a new value to an element and also calling a style change with each iteration thereby causing repetitive layouts. So, an object 'element' was created to store some globally accessible values and a new function 'updateElement' created to capture the elements after changing their appearance in the for loop. In addition, simplified the process by returning a class name directly from the switch and adding style changes to the inline CSS inside html rather than changing styles in the js.

####Scrolling was made janky by the animation of the background pizza images.
The 'updatePositions' function was being called by the 'scroll' event listener. Inside the function, a single 'for' loop was called that included both assigning a new value to an element and then calling style change on that element. This created repetitive layouts which was the cause of the jankiness. So, as above,  a temp array was created to store the elements and assign values in a one 'for' loop and then another 'for' loop was created to make the style changes. A third loop calculates the phase to further refine speed of the main loop.

