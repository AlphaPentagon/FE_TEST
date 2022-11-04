# UCAS TEST - CSS SOLUTION

## Problem

#### Task 1

- Try to solve the problem using CSS. ✅
- Do not change the HTML. ✅
- It needs to look reasonable in Safari, Firefox and Chrome, with a pragmatic fallback for older browsers. ✅
- The solution needs to cope with a shorter list, maybe just two items. ✅
- The solution needs to handle a smaller screen width. ✅

## Planning

Before I started coding I copied the individual code (including the external CSS file) into my own local folder and open it in VS code.

This provided me with several benefits - intellisense in VS code - being able to run a liverserver in different browsers for testing and production - being able to format using Prettier extension - being able to read the external css file in something other than plain text

I then spent some time reading the current code, paying special attention to the CSS class selectors in the externall CSS file.

I then made a rough plan of what the problem was and how I understood it, and how I might go ahead and solve it.

## Initial Attempts

- I initially used CSS grid to create three separate columns and then tried to find a solution to order the elements in alphabetical order by columns. I failed to find a way to do this successfully.

- This lead me to research online, where I found this stackoverflow article about using the 'column-count' property: https://stackoverflow.com/questions/12332528/how-to-display-list-items-as-columns. This looked like it might solve the issue, but I was careful to check the cross-browser compatibility first. Fortunately MDN told me it worked across all modern browsers, with only IE 9 (0.15% usage) and less and Opera 10.1 (0% usage) and less not being compatible.

- After implementing the column-count, it still wasn't correctly displaying in my browser (google chrome). I used Chrome Dev tools to inspect the DOM and saw that individual list item elements were being set float and clear property values. I overrode these back to their defaults and this fixed the issue.

- This now presented a new issue - at least one of the list items text was spread over more than one column. Althought this was still readable, it wasn't very desirable from a user experience point of view. Upon inspecting the DOM, I saw that the child li elements were being set a width of 33% - removing this and setting them all to auto fixed this.

- When resizing the browser the above issue appeared again - this was fixed using the break-inside: avoid-column property (althought this doesn't have great support for older browsers)

## Solution
