# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Use the slider and toggle to see prices for different page view numbers

### Screenshot


### Links

-   Solution URL: [Github Repository](https://github.com/Robertron624/interactive-pricing-component)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   VanillaJs


### What I learned

With this project I got to use the input range element, which I had never used before, I also learned how to create a custom range slider with JavaScript, and how to style it with CSS.

I liked the way I create the logic that changes the price depending on the page views and the toggle, I think it is a clean and simple way to do it.

```js
const prices = [8, 12, 16, 24, 36];
const pricesAnnual = [72, 108, 144, 216, 324]; // with a 25% discount
const pageViewValuesMonthly = [10, 50, 100, 500, "1M"];
const pageViewsValuesAnnual = [600, 900, "1.2M", "1.8M", "2.4M"];

<input step="1" type="range" min="0" max="4" value="2" id="myRange" />; // the value is the index of the array
```

### Continued development

I wil use some JavaScript framework in projects that require more complex logic and changing states, I used VanillaJs in this project because I took it as a challenge to practice my skills in VanillaJs, but it was troublesome and repetitive syntax, so I'll use vanilla
only in projects that require minimal js logic.

### Useful resources

-   [Creating a custom CSS range slider with JavaScript upgrades](https://blog.logrocket.com/creating-custom-css-range-slider-javascript-upgrades/) - This is a great resource that helped me understand how to create a custom range slider with JavaScript. I'd recommend it to anyone still learning this concept.
-   [Styling range input with CSS and JavaScript for better UX](https://nikitahl.com/style-range-input-css) - This is an amazing article which helped me with styling the price slider.

## Author

-   Personal Website - [Robert Ramirez](https://robert-ramirez.netlify.app)
-   Frontend Mentor User- [@Robertron624](https://www.frontendmentor.io/profile/Robertron624)
-   Twitter - [@robertdowny](https://www.twitter.com/robertdowny)

## Acknowledgments

-   [AlexKolykhalov](https://www.frontendmentor.io/profile/AlexKolykhalov) - I took inspiration from this user's solution to the same project, just the part of adding the slider styles and background image.
