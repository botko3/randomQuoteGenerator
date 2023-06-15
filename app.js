const quoteBtn = document.getElementById("new-quote");
const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=success';
const colors = ['#C1328E', '#C1693C', '#B5474D', '#F15C2B', '#8E354A',
  '#D05A6E', '#DB8E71', '#C78550', '#F9BF45', '#F6AD49', '#F19072'
];
const quoteText = document.getElementById('text');
const authorText = document.getElementById('author');
const icon = document.getElementById('logo');

quoteBtn.addEventListener("click", () => {
    changeColor();
    getQuote();
});

function getQuote() {
  fetch(apiUrl, {
      headers: {
          'X-Api-Key': 'PUT API KEY HERE' 
      }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    quoteText.innerText = data[0].quote;
    authorText.innerText = "- "+ data[0].author;
  })
  .catch(error => console.error('Fetch failed:', error));
}

function changeColor() {
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.transition = "background-color 0.5s ease-in";
    document.body.style.backgroundColor = randomColor;
    icon.style.transition="color 0.5s ease-in";
    icon.style.color=randomColor;
    quoteBtn.style.transition="color 0.5s ease-in";
    quoteBtn.style.backgroundColor=randomColor;
    quoteText.style.transition = "color 0.5s ease-in, font-size 0.5s ease-in";
    quoteText.style.color = randomColor;
    quoteText.style.fontSize = "1.2em";
    authorText.style.transition = "color 0.5s ease-in, font-size 0.5s ease-in";
    authorText.style.color = randomColor;
    authorText.style.fontSize = "1em";
  }

