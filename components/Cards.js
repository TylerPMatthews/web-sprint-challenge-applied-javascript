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
//append here
const appendHere = document.querySelector('.cards-container')

function createCard(object){
    //Add elements
    const mainCard = document.createElement('div');
    const headLineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    const span = document.createElement('span')

    // Add classes
    mainCard.classList.add('card');
    headLineDiv.classList.add('headline');
    authorDiv.classList.add('author')
    imageDiv.classList.add('img-container')

    //add text content and src

    headLineDiv.textContent = object.headline;
    image.src = object.authorPhoto
    span.textContent = object.authorName

    //append 

    mainCard.appendChild(headLineDiv)
    mainCard.appendChild(authorDiv)
    mainCard.appendChild(imageDiv)
    imageDiv.appendChild(image)
    authorDiv.appendChild(span)

    mainCard.addEventListener('click', function(event){
        console.log(`${object.headline} is the main title`)
    })

    return mainCard
}

axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then((res)=>{
    const resData = res.data.articles
    for(let value in resData){
    resData[value].forEach((item)=>{
        let mainData = createCard(item)
        appendHere.appendChild(mainData)
    })
}})
.catch((err)=>{
    console.log('error')
})
