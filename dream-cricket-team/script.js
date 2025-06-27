const players = [
  {
    name: "Virat Kohli",
    role: "Batsman",
    img: "assets/players/kohli.jpg",
    jersey: 18,
    matches: 274,
    strikeRate: 138.5,
    best: "94* vs WI"
  },
  {
    name: "Jasprit Bumrah",
    role: "Bowler",
    img: "assets/players/bumrah.jpg",
    jersey: 93,
    matches: 121,
    strikeRate: 105.2,
    best: "5/27 vs Eng"
  },
  // Add more players here
];

const playersGrid = document.getElementById("playersGrid");
const modal = document.getElementById("playerModal");
const closeModal = document.querySelector(".close");

players.forEach(player => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${player.img}" alt="${player.name}">
    <h3>${player.name}</h3>
    <p>${player.role}</p>
  `;
  card.addEventListener("click", () => showModal(player));
  playersGrid.appendChild(card);
});

function showModal(player) {
  document.getElementById("modalName").textContent = player.name;
  document.getElementById("modalJersey").textContent = player.jersey;
  document.getElementById("modalMatches").textContent = player.matches;
  document.getElementById("modalStrikeRate").textContent = player.strikeRate;
  document.getElementById("modalPerformance").textContent = player.best;
  modal.style.display = "block";
}

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
