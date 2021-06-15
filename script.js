const quoteContainer = document.querySelector("#quote-container")
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");


// get new (random) quote 
function newQuote() {
  let index = Math.floor(Math.random() * localQuotes.length);
  const quote = localQuotes[index];
  console.log(`quote at index-${index}: ${quote.text} -- ${quote.author}`);
  // return quote;

  // check if author field is blank and replace it with "Unknown"
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // check quote lenth to determing styling
  if (quote.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

newQuote();


// tweet quote
function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -- ${authorText.textContent}`;
  window.open(twitterURL, '_blank');
}


// event listeners:
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote)




// // get quotes from api: https://type.fit/api/quotes
// let apiQuotes = [];
// async function getQuotes() {
//   const apiURL = "https://type.fit/api/quotes";
//   try {
//     const response = await fetch(apiURL);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     alert("error:", error);
//     console.log("error:", error);
//   }
// }

// getQuotes();
