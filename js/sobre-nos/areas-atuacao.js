// let currentPage = 0;
// let currentPageResponsive = 0;

// areas = [
//   { id: 0, img: "./../../img/Icon 3.png", titulo: "Comunicação para associações 1", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
//   { id: 1, img: "./../../img/icon1.png", titulo: "Desenvolvimento de sites 2", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
//   { id: 2, img: "./../../img/Icon2.png", titulo: "Comunicação para eventos 3", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
//   { id: 3, img: "./../../img/Icon4.png", titulo: "Comunicação para associações 4", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
//   { id: 4, img: "./../../img/Icon5.png", titulo: "Desenvolvimento de sites 5", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
//   { id: 5, img: "./../../img/Icon2.png", titulo: "Comunicação para eventos 6", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
//   { id: 6, img: "./../../img/Icon4.png", titulo: "Comunicação para eventos 7", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
//   { id: 7, img: "./../../img/Icon5.png", titulo: "Comunicação para eventos 8", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
//   { id: 8, img: "./../../img/Icon4.png", titulo: "Comunicação para eventos 9", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
//   { id: 9, img: "./../../img/Icon5.png", titulo: "Comunicação para eventos 10", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
//   { id: 10, img: "./../../img/Icon2.png", titulo: "Comunicação para eventos 11", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
//   { id: 11, img: "./../../img/Icon4.png", titulo: "Comunicação para eventos 12", conteudo: "Mais cedo ou mais tarde será necessário marcar presença na internet: nas redes sociais, através de site, blog, entre outros. Calma não estamos falando grego! Por esses canais você terá a oportunidade de mostrar seu produto ou serviço e também manterá uma relação mais próxima com os clientes. A Meraki desenvolve estratégias para que a sua empresa se destaque no mercado!" },
// ];

// areasResponsive = [
//   { id: 0, img: "./../../img/Icon 3.png", titulo: "Comunicação para associações" },
//   { id: 1, img: "./../../img/icon1.png", titulo: "Desenvolvimento de sites" },
//   { id: 2, img: "./../../img/Icon2.png", titulo: "Comunicação para eventos" },
//   { id: 3, img: "./../../img/Icon4.png", titulo: "Comunicação para associações" },
//   { id: 4, img: "./../../img/Icon5.png", titulo: "Desenvolvimento de sites" },
//   { id: 5, img: "./../../img/Icon4.png", titulo: "Comunicação para eventos" },
//   { id: 6, img: "./../../img/Icon2.png", titulo: "Comunicação para eventos" },
// ];

// const qtdAreas = areas.length;

// const qtdLinks = Math.ceil(qtdAreas / 3);

// function fillCarousel(items) {
//   const areas_sections = document.querySelector('.areas');
//   areas_sections.innerHTML = '';

//   items.forEach(area => {
//     const section = document.createElement('section');
//     section.classList.add('card');

//     const titulo = document.createElement('h4');
//     titulo.classList.add('card-text');
//     titulo.innerText = area.titulo;

//     const imagem = document.createElement('img');
//     imagem.classList.add('card-image')
//     imagem.src = area.img;

//     const conteudo = document.createElement('p');
//     conteudo.classList.add('card-conteudo')
//     conteudo.innerText = area.conteudo;

//     section.appendChild(imagem);
//     section.appendChild(titulo);
//     section.appendChild(conteudo);

//     areas_sections.append(section);
//   });
// }

// function atualizaAreas(incremento) {
//   const newPage = currentPage + incremento;

//   const itemAtual = document.querySelector('.dots__item--active');
//   itemAtual.classList.remove('dots__item--active');

//   let idNovo = parseInt(itemAtual.dataset.id) + incremento;

//   if (idNovo == 0) idNovo = 1;
//   else if (idNovo >= qtdLinks) idNovo = qtdLinks;

//   const itemNovo = document.querySelector('#item' + idNovo);

//   itemNovo.classList.add('dots__item--active');

//   if (newPage >= qtdLinks || newPage < 0) return;

//   currentPage = newPage;

//   const items = areas.slice(currentPage * 3, (currentPage * 3) + 3);
//   fillCarousel(items);
// }

// function fillCarouselResponsive(items) {
//   const areas_sections = document.querySelector('.areas-responsivo');
//   areas_sections.innerHTML = '';

//   items.forEach(area => {
//     const section = document.createElement('section');
//     section.classList.add('card');

//     const titulo = document.createElement('p');
//     titulo.classList.add('card-text');
//     titulo.innerText = area.titulo;

//     const imagem = document.createElement('img');
//     imagem.classList.add('card-image')
//     imagem.src = area.img;

//     section.appendChild(imagem);
//     section.appendChild(titulo);

//     areas_sections.append(section);
//   });
// }

// function atualizaAreasResponsive(incremento) {
//   const newPage = currentPageResponsive + incremento;

//   if (newPage + 3 > areas.length || newPage < 0) return;

//   currentPageResponsive = newPage;

//   const items = areas.slice(currentPageResponsive, currentPageResponsive + 3);

//   fillCarouselResponsive(items);
// }


// window.onload = function () {

//   const tamanhoTela = window.screen.width;
//   let items;
//   if (tamanhoTela <= 700) {
//     items = areas;
//     fillCarouselResponsive(items);
//   }
//   else {

//     const items = areas.slice(0, 3);

//     const div = document.querySelector('.banner__dots');
//     // const qtd = document.getElementById('banner__dots').children.length;

//     const link = document.createElement('div');
//     link.id = "item1";
//     link.classList.add('dots__item');
//     link.classList.add('dots__item--active');
//     link.setAttribute('data-id', '1');

//     div.appendChild(link);

//     if (qtdLinks > 1) {
//       for (var i = 2; i <= qtdLinks; i++) {
//         let link = document.createElement('div');
//         link.id = "item" + i;
//         link.classList.add('dots__item');
//         link.setAttribute('data-id', i);

//         div.appendChild(link);
//       }
//     }


//     fillCarousel(items);
//   }
// }
