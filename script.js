const projects = [
  {
    title: "App AI per startup",
    desc: "Tool per generare idee di business con AI"
  },
  {
    title: "Marketplace locale",
    desc: "Piattaforma per prodotti artigianali"
  },
  {
    title: "Fitness gamificato",
    desc: "Allenamenti con sistema a livelli"
  }
];

let index = 0;

function render() {
  const card = document.getElementById("card");
  card.innerHTML = `
    <h3>${projects[index].title}</h3>
    <p>${projects[index].desc}</p>
    <button onclick="vote()">Vota 👍</button>
  `;
}

function next() {
  index = (index + 1) % projects.length;
  render();
}

function prev() {
  index = (index - 1 + projects.length) % projects.length;
  render();
}

function vote() {
  alert("Voto registrato!");
}

render();