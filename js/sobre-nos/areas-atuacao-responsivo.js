let currentPageResponsive = 0;

areas = [
  { id: 0, img: "./../../img/Icon 3.png", titulo: "Comunicação para associações" },
  { id: 1, img: "./../../img/icon1.png", titulo: "Desenvolvimento de sites" },
  { id: 2, img: "./../../img/Icon2.png", titulo: "Comunicação para eventos" },
  { id: 3, img: "./../../img/Icon4.png", titulo: "Comunicação para associações" },
  { id: 4, img: "./../../img/Icon5.png", titulo: "Desenvolvimento de sites" },
  { id: 5, img: "./../../img/Icon4.png", titulo: "Comunicação para eventos" },
  { id: 6, img: "./../../img/Icon2.png", titulo: "Comunicação para eventos" },
];

function fillCarousel(items) {
  const areas_sections = document.querySelector('.areas-responsivo');
  areas_sections.innerHTML = '';

  items.forEach(area => {
    const section = document.createElement('section');
    section.classList.add('card');

    const titulo = document.createElement('p');
    titulo.classList.add('card-text');
    titulo.innerText = area.titulo;

    const imagem = document.createElement('img');
    imagem.classList.add('card-image')
    imagem.src = area.img;

    section.appendChild(imagem);
    section.appendChild(titulo);

    areas_sections.append(section);
  });
}

function atualizaAreas(incremento) {
  const newPage = currentPageResponsive + incremento;

  if (newPage + 3 > areas.length || newPage < 0) return;

  currentPageResponsive = newPage;

  const items = areas.slice(currentPageResponsive, currentPageResponsive + 3);

  fillCarousel(items);
}

window.onload = function () {
  const tamanhoTela = window.screen.width;
  let items;
  if (tamanhoTela <= 700) {
    items = areas;
  }
  else {
    items = areas.slice(0, 3);
  }

  fillCarousel(items);
}
