// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios 
.get('https://lambda-times-backend.herokuapp.com/articles')
.then((res) => {
    const articleInfo = (res.data);
   /*  articleInfo.forEach(elem => {
        console.log('foreach', elem);
        cards.appendChild(articleCards(res.data));
        console.log(articleInfo);
    }) */
    cards.appendChild(articleCards(res.data));
    console.log(articleInfo);
})
.catch((err) => {
    console.log('You hit an error', err);
})


/* let articlesArray = [];
articlesArray.forEach(article => {
    axios.get(`https://lambda-times-backend.herokuapp.com/${article}`)
    .then((res) => {
        const data = res.data;
        const newCard = articleCards(res);
        cards.appendChild(newCard);
    })
    .catch((err) => {
        console.log('You hit an error', err)
    });
}); */




const cards = document.querySelector('.cards-container');

function articleCards(obj){
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorSpan = document.createElement('span');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    
    headlineDiv.textContent = obj.headline;
    authorImg.textContent = obj.authorPhoto;
    authorSpan.textContent = `By ` + obj.authorName;

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    cardDiv.appendChild(authorSpan);

    authorDiv.appendChild(imgContainer);

    imgContainer.appendChild(authorImg);

    return cardDiv;
};

/* articleInfo.forEach((content) =>{
    console.log('from forEach loop', content);
    cards.appendChild(articleCards(content.article));
  }); */

