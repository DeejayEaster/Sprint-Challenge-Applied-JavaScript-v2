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
const cardInfo = axios.get(
  `https://lambda-times-backend.herokuapp.com/articles`
);
const cardContainer = document.querySelector(".cards-container");

cardInfo.then(info => {
  console.log(`this is the info: `, info);
  const articleData = info.data.articles;
  articleData.bootstrap.forEach(obj => {
    const newCard = cardMaker(obj);
    cardContainer.appendChild(newCard);
  });

  articleData.javascript.forEach(obj => {
    const newCard = cardMaker(obj);
    cardContainer.appendChild(newCard);
  });
  articleData.technology.forEach(obj => {
    const newCard = cardMaker(obj);
    cardContainer.appendChild(newCard);
  });
  articleData.jquery.forEach(obj => {
    const newCard = cardMaker(obj);
    cardContainer.appendChild(newCard);
  });
  articleData.node.forEach(obj => {
    const newCard = cardMaker(obj);
    cardContainer.appendChild(newCard);
  });
});

function cardMaker(cardData) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const authorsName = document.createElement("span");

  // class assignment
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  //Vars for content

  // content
  headline.textContent = `${cardData.headline}`;
  cardImg.src = `${cardData.authorPhoto}`;
  authorsName.textContent = `By: ${cardData.authorName}`;

  // structure
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorsName);
  imgContainer.appendChild(cardImg);

  return card;
}
