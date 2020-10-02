// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res=> {
    console.log('here is the response by axios',res)
    console.log('here is the response body',res.data.articles)
})

function cardMaker(object){
    //Create Card DIV
const card = document.createElement('div')
//Add class
card.classList.add('card')
//Add div
const headLine = document.createElement('div')
//add class
headLine.classList.add('headline')
//add text content
headLine.textContent = object.headline
//add div
const authorDiv = document.createElement('div')
//add class
authorDiv.classList.add('author')
//add div
const imgDiv = document.createElement('div')
//add class
imgDiv.classList.add('img-container')
//add iamge
const image = document.createElement('img')
//update image src
image.src = object.authorPhoto
//add author span
const authorSpan = document.createElement('span')
//update text content
authorSpan.textContent = object.authorName
}