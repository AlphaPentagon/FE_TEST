# FE TEST - CSS SOLUTION

## Problem

#### Task 1

- Try to solve the problem using CSS. ✅
- Do not change the HTML. ✅
- It needs to look reasonable in Safari, Firefox and Chrome, with a pragmatic fallback for older browsers. ✅
- The solution needs to cope with a shorter list, maybe just two items. ✅
- The solution needs to handle a smaller screen width. ✅

## Planning

Before I started coding I copied the individual code (including the external CSS file) into my own local folder and open it in VS code.

This provided me with several benefits - IntelliSense in VS code - being able to run a Live Server in different browsers for testing and production - being able to format using the Prettier extension - being able to read the external CSS file in something other than plain text.

I then spent some time reading the current code, paying special attention to the CSS class selectors in the external CSS file.

Finally I made a rough plan of what the problem was and how I understood it, and how I might go ahead and solve it.

## Solution

[DEMO](https://alphapentagon.github.io/FE_TEST/)

- I initially used CSS grid to create three separate columns and then tried to find a solution to order the elements in alphabetical order by columns. I failed to find a way to do this successfully, as I did not know how many rows I would need (as the number of list elements may change over time).

- This lead me to research online, where I found [this](https://stackoverflow.com/questions/12332528/how-to-display-list-items-as-columns) Stack Overflow article about using the 'column-count' property: . This looked like it might solve the issue, but I was careful to check the cross-browser compatibility first. Fortunately MDN told me it worked across all modern browsers, with only IE 9 (0.15% usage) and less and Opera 10.1 (0% usage) and less not being compatible.

- After implementing the column-count, it still wasn't displaying correctly in my browser (Google Chrome). I used Chrome Dev tools to inspect the DOM and saw that individual list item elements were being set float and clear property values. I overrode these back to their defaults and this fixed the issue.

- This now presented a new issue - at least one of the list items text was spread over more than one column. Although this was still readable, it wasn't very desirable from a user experience point of view. Upon inspecting the DOM, I saw that the child li elements were being set a width of 33% - removing this and setting them all to auto fixed this.

- When resizing the browser the above issue appeared again - this was fixed using the break-inside: avoid-column property. This also met the requirement of supporting a smaller number of list items (e.g. 2).

  - UPDATE: I found [this](https://haacked.com/archive/2018/12/03/css-column-list-adventure/) article online which suggested setting the width of the li elements to 100% and setting their display property as inline-block would be enough. However when there were only two list items they displayed in only one column, instead of two, so I reverted back to the original solution.

- I then created two media queries for smaller displays to limit the column count.

- In order to support older browsers, I wrapped all of the CSS in a @supports query that ensures the style will only be applied if the browser supports both column-count and break-inside: avoid-column.

  - If it does not support both CSS properties, the browser will use the default CSS code - although this doesn't display the list in the desired top to bottom format, the content is still readable, which is a better UE then having a non-functioning site.

- I ensured that the vendor prefixes for 'column-count' and 'break-inside' were all implemented, to ensure cross browser compatibility.

## Testing

- I manually tested in development using Live Server on localhost:5500 in the latest versions of Chrome & Firefox, as well as Chrome for Android.
- I then tested in the above browsers again but using the deployed link in GitHub pages.
- I did not have access to older browsers or an IOS device to test Safari, but having done my research it should work or use the original code as a fallback.

## Challenges & Reflections

- I'm used to using Javascript to sort data, so just using CSS was a challenge for me. I tried to plan how to do it with the knowledge of flex and grid that I already had and hit a bit of a blocker at first, but I then found resources such as Stack Overflow and geneal development blogs which introduced me to the 'column-count' property.

- I enjoyed making sure that the solution would work across all browsers and creating the fallback if not - this is something I haven't had much experience in, so it was a useful challenge. I especially liked implementing the @supports query, as I found this resulted in neat and readable code.

- I struggled to find a fallback solution that would support older browsers and still solve the problem. I settled using the original code as a fallback solution - this didn't solve the order problem, but did mean the content would still be readable.

- Some of the li elements are still having clear and padding styles applied, although this doesn't have an effect on how the page displays - this is due to the CSS hierarchy, as most of these elements are being targeted using more specific selectors than my own e.g. :nth-of-type(3n). Ideally I would overwrite these, but as it doesn't have an actual effect on the page I have decided to leave these for now.

- I'm aware of tools such as PostCSS that could have created polyfills for browser compatibility on the fly, as well as adding vendor prefixes - but this was a great learning exercise to try and come up with my own fallback solution!
