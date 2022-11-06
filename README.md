# FE TEST - JS SOLUTION

## Problem

#### Task 2

- Try to solve the problem using JS. ✅
- Do not change the HTML. ✅
- It needs to look reasonable in Safari, Firefox and Chrome, with a pragmatic fallback for older browsers. ✅
- The solution needs to cope with a shorter list, maybe just two items. ✅
- The solution needs to handle a smaller screen width. ✅

## Planning

Again, I copied the code into VS code so I could make use of extensions such as formatters and IntelliSense. I then wrote out the problem and attempted to break it down into smaller tasks and plan my approach for each one e.g. How to calculate the number of rows needed? Need to know how many columns, etc.

## Solution

- I knew that whatever solution I implemented I would need to interact with the DOM, so I started by using querySelector to select the ul element.

- In the CSS only solution I initially tried to use CSS grid, but found that I needed to know how many rows I needed based on how many list items and columns there were, which is not something I could calculate. With JS however, I knew I could calculate the rows based on the number of list elements divided by the number of columns, and then rounding that number up.

- I first started by removing any CSS classes that I knew I no longer needed e.g list-columns.

- This meant I could then set the inline style on the ul element to be a display of grid with a set number of columns and rows, and then set the auto-flow property to column.

  - I gave the columns a width of 1fr, so they were all even width, but set the rows to auto, so that they would become only as high as they needed to be based on the highest element in that row. I thought this looked better than giving them all the same even height.
    <p></p>

- By using an event listener on the window object, I was able to set the number of columns needed based on the width of the screen (so that it splits into less columns on smaller screens), and then dynamically calculate the number of rows needed from that. This ensured the page was responsive.

- I spent some time refactoring my code so that some of the logic was split into separate reuseable functions. This ensured that my code was neat, followed the DRY principles and allowed for scalability in the future if needed.

- I also attempted to create a fallback for internet explorer, as grid is not supported on it. I used the CSS solution from the previous task (using 'column-count') but set it as an inline style using JS instead. This solved the issue but created a new issue with the styling of the bullet points - some of them were missing. I could not determine why this was, even after inspecting the elements in dev tools, so removed the custom markers and used regular bullets. This still resulted in unwanted behaviour (some were still missing, and pushed the list items out of alignment with each other). In the end I opted to leave the bullet points out, as I thought this represented the best mix of design and user experience.

  - I also had to refactor some of my code so it worked on IE e.g. change ES6 arrow functions into regular functions, change the use of template literals for normal strings and use concatenation to insert variable values. I kept doing this until the console showed no errors on IE 11! As a precaution I also changed some of the variable initialisations to use the var keyword instead of let/const, as I know this has wider compatibility. I also opted to use a traditional for loop, rather than an array method such as forEach, as this has better compatibility for older browsers. <p></p>

- I ensured I added any necessary vendor prefixes in the inline CSS styles.

## Testing

- I manually tested on the latest versions of Firefox, Chrome and Chrome for Android using Live Server. I did not deploy this solution to GitHub pages - primarily as it was a branch from the CSS solution, and GitHub only allows you to set up continuous development from one branch!
- I checked the JS and CSS code on the official MDN docs and 'caniuse.com' to check for browser support.
- I tested the list with less and more list items.

## Challenges & Reflections

- Initially when I first read the problem I thought I would be able to use a JS array method to order the data - but then realised that the data was actually in the order I needed it - but appearing in the wrong order on the page. This encouraged me to take a step back, reassess the problem, break it down and make a plan.

- It was great to be able to use CSS grid to solve this issue, as I initially thought I would be able to use it in the CSS only challenge. I enjoyed calculating the number of rows dynamically and also making the html responsive by using JS - something I usually achieve using responsive units and CSS media queries.

- Another way to solve this issue would have been to create separate CSS class selectors (with all the necessary styling in them) and then use element.classList.add(className) to dynamically add the classes to the HTML element. In a real life example this would probably be preferable, instead of adding inline HTML styles - but I wanted to ensure that I didn't create any CSS or change any of the HTML for the JS only solution.

- I'm aware of compilers such as Babel which could have done the IE fallback solution for me - but I enjoyed the challenge of trying to come up with my own solution!
