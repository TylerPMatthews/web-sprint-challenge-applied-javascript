// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
//Where to append
const appendHere = document.querySelector(".header-container");

function Header() {
  //create the header elements
  const mainHeader = document.createElement("div");
  const headerdate = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const headerTemp = document.createElement("span");

  //set header classes
  mainHeader.classList.add("header");
  headerdate.classList.add("date");
  headerTemp.classList.add("temp");

  //set text content

  headerdate.textContent = "MARCH 28, 2020";
  headerTitle.textContent = "Lambda Times";
  headerTemp.textContent = "98";

  //append
  mainHeader.appendChild(headerdate);
  mainHeader.appendChild(headerTitle);
  mainHeader.appendChild(headerTemp);

  return mainHeader;
}

let addHeader = Header();
appendHere.appendChild(addHeader);
