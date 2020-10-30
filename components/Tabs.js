// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.

//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
//select tab div
const tabs = document.querySelector('.topics')

//function to make the div
function topicMaker(topic){
    const tabDivs = document.createElement('div')
   
    tabDivs.classList.add('tab')
   
    tabDivs.textContent = topic
    console.log(tabDivs)
    return tabDivs 
   
}

//axios grabbing data
axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(res=>{

    //naming tabData after the data coming in 
    const topic = res.data.topics
    //Looping through data
    topic.forEach(topic => { 
      
      const topicTabs = topicMaker(topic)
    
      tabs.appendChild(topicTabs)
    });
})
.catch(fail=>{
    console.log('this failed',fail)
})