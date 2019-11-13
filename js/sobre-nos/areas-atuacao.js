let currentPage = 0;

areas = [
  { id: 0, img: "./../img/sobre-nos.png", titulo: "Comunicação para associações", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
  { id: 1, img: "./../img/sobre-nos.png", titulo: "Desenvolvimento de sites", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
  { id: 2, img: "./../img/sobre-nos.png", titulo: "Comunicação para eventos", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
  { id: 3, img: "./../img/sobre-nos.png", titulo: "Comunicação para associações", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
  { id: 4, img: "./../img/sobre-nos.png", titulo: "Desenvolvimento de sites", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
  { id: 5, img: "./../img/sobre-nos.png", titulo: "Comunicação para eventos", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
  { id: 6, img: "./../img/sobre-nos.png", titulo: "Comunicação para eventos", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
];

function fillCarousel(items) {
  const areas_sections = document.querySelector('.areas');
  areas_sections.innerHTML = '';

  items.forEach(area => {
    const section = document.createElement('section');
    section.classList.add('card');

    const titulo = document.createElement('h4');
    titulo.classList.add('card-text');
    titulo.innerText = area.titulo;

    const imagem = document.createElement('img');
    imagem.classList.add('card-image')
    imagem.src = area.img;

    const conteudo = document.createElement('p');
    conteudo.classList.add('card-conteudo')
    conteudo.innerText = area.conteudo;

    section.appendChild(imagem);
    section.appendChild(titulo);
    section.appendChild(conteudo);

    areas_sections.append(section);
  });
}

function atualizaAreas(incremento) {
  const newPage = currentPage + incremento;

  if (newPage + 3 > areas.length || newPage < 0) return;

  currentPage = newPage;

  const items = areas.slice(currentPage, currentPage + 3);

  fillCarousel(items);
}

window.onload = function () {
  const items = areas.slice(0, 3);

  fillCarousel(items);
}
