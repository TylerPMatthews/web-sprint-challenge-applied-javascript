// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
//select tab div
const tabs = document.querySelector('tab')

//function to make the div
function topicMaker(data){
    const topic = document.createElement('div')
    topic.classList.add('tab')
    topic.textContent = data
}
//axios grabbing data
axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(res=>{
    console.log('here is the response by axios',res)
    console.log('here is the response body',res.data.topics)
    //naming tabData after the data coming in 
    const tabData = res.data.topics
    //Looping through data
    tabData.forEach(item => {
      const topics = topicMaker()
      tabs.appendChild(topics)
    });
})
.catch(fail=>{
    console.log('this failed')
})
