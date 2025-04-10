const tableSize = 4;

let cards = [1, 2, 3, 4, 5, 6, 7, 8];
cards.forEach((c) => cards.push(c));

mixArray(cards);
printTable(cards);

document.getElementById("memory-table").addEventListener("click", (e) => {
  e.target.classList.remove('hidden-memory-card');
  e.target.classList.add('shown-memory-card');
});

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
