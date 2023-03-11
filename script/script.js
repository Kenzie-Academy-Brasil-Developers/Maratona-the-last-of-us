const episodes = [
  {
    img: "./assets/images/episodes/episode1.svg",
    title: "When You're Lost in the Darkness",
    description:
      " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
  },

  {
    img: "./assets/images/episodes/episode2.svg",
    title: "Infected",
    description:
      " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
  },
  {
    img: "./assets/images/episodes/episode3.svg",
    title: "Long, Long Time",
    description:
      " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
  },
  {
    img: "./assets/images/episodes/episode4.svg",
    title: "Please Hold to My Hand",
    description:
      " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
  },
];

//1. acessar a lista de produtos através do DOM
const list = document.querySelector(".episodes-list");

//2. Criar uma função para percorrer todo os meus episódios que estão listadas na variável episodes

function addCard(episodes) {
  for (let i = 0; i < episodes.length; i++) {
    //3. Criar uma função que renderize epidio a episodia

    renderCard(episodes[i]);
  }
}

addCard(episodes);

function renderCard(episodio) {
  const listItem = document.createElement("li");
  listItem.classList.add("card");

  listItem.innerHTML = `
  <img
  src=${episodio.img}
  alt=${episodio.title}
/>
<div class="card-text">
  <h4>${episodio.title}</h4>
  <p>
  ${episodio.description}
  </p>
</div>
  `;

  list.appendChild(listItem);
}
