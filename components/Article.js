// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const articleData = require("./ArticleData").data;

console.log("Article Data", articleData);

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

function articleMaker(article) {
  // Declare the variable to create the element
  const newArticle = document.createElement("div");

  // Add some attributes into the new element
  newArticle.classList.add("article");

  // Declare the inner HTML elements to add inside the newArticle element
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const bodyParagraph1 = document.createElement("p");
  const bodyParagraph2 = document.createElement("p");
  const bodyParagraph3 = document.createElement("p");
  const expandBtn = document.createElement("span");

  // Add some attributes to the inner HTML elements
  articleDate.classList.add("date");
  expandBtn.classList.add("expandButton");

  // Add the text content into the HTML elements
  articleTitle.textContent = article.title;
  bodyParagraph1.textContent = article.firstParagraph;
  bodyParagraph2.textContent = article.secondParagraph;
  bodyParagraph3.textContent = article.thirdParagraph;
  articleDate.textContent = article.date;
  expandBtn.textContent = "+";

  // Add an Event Listener to the button
  expandBtn.addEventListener("click", () => {
    newArticle.classList.toggle("article-open");
  });

  // Create an array with all inner elements to add
  let childElements = [];
  childElements.push(articleTitle, articleDate, bodyParagraph1, bodyParagraph2, bodyParagraph3, expandBtn);

  // Add the inner HTML inside the article element
  childElements.forEach((item) => {
    newArticle.appendChild(item);
  });

  // Return the new article
  return newArticle;
}

// Create a new array of elements that will be added to the DOM
let allArticlesArr = articleData.map((item) => {
  let newArticle = articleMaker(item);

  return newArticle;
});

// Add them to the DOM
const articlesContainer = document.querySelector(".articles");

allArticlesArr.forEach((article) => {
  articlesContainer.appendChild(article);
});

console.log("Elements to insert to DOM", allArticlesArr);
