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

//Select the header container
const containers = document.querySelector('.header-container')

// console.log(containers)

let myFunction = headerFunction() 
console.log(myFunction)

containers.appendChild(myFunction)
//Make function
function headerFunction() {
    //Make DIV
    const headerDiv = document.createElement('div')
    //Add DIV class
    headerDiv.classList.add('header')
    //append
    containers.appendChild(headerDiv)

    //Make Span
    const dateSpan = document.createElement('span')
    //add class
    dateSpan.classList.add('date')
    //Add text
    dateSpan.textContent = 'MARCH 28, 2020'
    //append to the new headerDiv
    headerDiv.appendChild(dateSpan)
    console.log(dateSpan)
    //Make h1
    const lambdaH1 = document.createElement('h1')
    //h1 text
    dateSpan.textContent = 'Lambda Times'
     //append to the new headerDiv
    headerDiv.appendChild(lambdaH1)

    //Create Temp SPan
    const tempSpan = document.createElement('span')
    //Add temp text
    tempSpan.textContent = '98°'
    //Add class
    tempSpan.classList.add('temp')
     //append to the new headerDiv
   headerDiv.appendChild(tempSpan)
    console.log(headerDiv)
    return headerDiv
    
}


