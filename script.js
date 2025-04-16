const tableSize = 4;

//cards
let cards = [1, 2, 3, 4, 5, 6, 7, 8];
cards.forEach((c) => cards.push(c)); // Duplikate erzeugen

let visibleCards = [];

mixArray(cards);
printTable(cards);

// add click listener
document.getElementById("memory-table").addEventListener("click", (e) => {
  if (e.target.classList.contains("shown-memory-card")) return;
  if (visibleCards.length >= 2) return;

  toggleCardVisibility(e.target);

  // update visible cards array
  visibleCards.push(e.target);

  checkVisibleCards();
});

function checkVisibleCards() {
  if (visibleCards.length < 2) return;

  //check for equality
  if (
    visibleCards[0].innerHTML === visibleCards[1].innerHTML &&
    visibleCards[0] !== visibleCards[1]
  ) {
    //cards are equal

    let intvervalId = setTimeout(() => {
      removeBothCards(visibleCards[0], visibleCards[1]);
      clearInterval(intervalId);
    }, 500);
  }

  // wait for 5s to hide both cards
  let intervalId = setTimeout(() => {
    toggleCardVisibility(visibleCards[0]);
    toggleCardVisibility(visibleCards[1]);
    visibleCards = [];
    clearInterval(intervalId);
  }, 500);
}

function removeBothCards() {
  visibleCards[0].style.opacity = 0;
  visibleCards[0].style.pointerEvents = "none";

  visibleCards[1].style.opacity = 0;
  visibleCards[1].style.pointerEvents = "none";

  // remove cards from cards array
  const matchedCardContent = Number(visibleCards[0].innerHTML);
  cards = cards.filter((c) => c !== matchedCardContent);

  visibleCards = [];

  checkUserWon();
}

function checkUserWon() {
  if (cards.length === 0) {
    printCongratulations();
  }
}

function printCongratulations() {
  document.getElementById('congratulations').innerHTML = '<h1>You won!</h1>'
}

function toggleCardVisibility(card) {
  if (card.classList.contains("hidden-memory-card")) {
    // die Karte war versteckt, wir müssen die aufmsachen
    card.classList.remove("hidden-memory-card");
    card.classList.add("shown-memory-card");
  } else if (card.classList.contains("shown-memory-card")) {
    card.classList.remove("shown-memory-card");
    card.classList.add("hidden-memory-card");
  }
}

function printTable(elements) {
  let table = "<table class='my-table' id='memory-table'>";

  for (let i = 0; i < tableSize; i++) {
    table += "<tr>";
    for (let j = 0; j < tableSize; j++) {
      table +=
        "<td class='hidden-memory-card'>" +
        elements[i * tableSize + j] +
        "</td>";
    }
    table += "</tr>";
  }
  document.body.innerHTML += table;
}
