// function calculates no of columns based on current window width
function determineColumns(currentWidth) {
  if (currentWidth <= 400) {
    return 1;
  } else if (currentWidth <= 650) {
    return 2;
  } else {
    return 3;
  }
}

// attempt at compatibility for IE
if (window.navigator.userAgent.toLowerCase().indexOf("trident") !== -1) {
  var listContainer = document.getElementsByClassName("list-columns");
  var listItems = document.getElementsByClassName("list-columns__item");

  // event listener to ensure that correct number of rows and columns are assigned based on window width each time browser window is resized
  window.addEventListener("resize", function (e) {
    let cols = determineColumns(e.target.innerWidth);
    listContainer[0].style.columnCount = cols;
  });

  //remove the bullets class - if left on only some of the list items receive the grey square marker.  If I replace this with my own bullets then the markers pushers the text out of alignment.  I think this looks best, but it does lose the visual identifier of being a list.
  listContainer[0].classList.remove("bullets");
  listContainer[0].style.columnCount = 3;
  listContainer[0].style.paddingLeft = "20px";

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.width = "100%";
    listItems[i].style.display = "inline-block";
    listItems[i].style.paddingRight = 0;
  }

  // for all other browsers
} else {
  // grab the ul element - we will not be touching the bullets class, so we use this to select it
  let listContainer = document.querySelector(".bullets"); // firefox 2-3, ie 6-7, ie 8 partial

  //function calculates no or rows based on number of columns
  function determineRows(cols) {
    return Math.ceil(listContainer.childElementCount / cols);
  }

  // assign columns and rows variables
  let columns = determineColumns(window.innerWidth); // ie 6-8, android 2.1-4.3
  let rows = determineRows(columns);

  //remove the current unwanted classes on the ul element
  listContainer.classList.remove("list-columns");
  listContainer.classList.remove("list-columns--max-cols-3"); // lots of unsupported old browsers, partial support on some modern browsers (but should be ok for current use)

  // set the style property of the selected ul element to a grid
  // this ensures the list flows in the intended way (top to bottom)
  listContainer.style.display = "grid"; // style - andorid 2.1-4.3
  listContainer.style.display = "-ms-grid";
  listContainer.style.gridAutoFlow = "column"; //
  listContainer.style.gridColumnGap = "1rem";
  listContainer.style.padding = "2rem";

  // set up grid - this ensures correct number of rows and columns based on window width the first time the browser is loaded
  listContainer.style.gridTemplateColumns = "repeat(" + columns + ", auto)";
  listContainer.style.msGridColumns = "repeat(" + columns + ", auto)";
  listContainer.style.gridTemplateRows = "repeat(" + rows + ", auto)";

  // create a couple of reusable functions to update rows and cols style properties
  function assignColumns(cols) {
    listContainer.style.gridTemplateColumns = "repeat(" + cols + ", auto)";
  }

  function assignRows(rows) {
    listContainer.style.gridTemplateRows = "repeat(" + rows + ", auto)";
  }

  // event listener to ensure that correct number of rows and columns are assigned based on window width each time browser window is resized
  window.addEventListener("resize", function (e) {
    let cols = determineColumns(e.target.innerWidth);
    let rows = determineRows(cols);
    assignRows(rows);
    assignColumns(cols);
  });
}
