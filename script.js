// Endpoints da API
const brothsUrl = 'https://api.tech.redventures.com.br/broths';
const proteinsUrl = 'https://api.tech.redventures.com.br/proteins';
const ordersUrl = 'https://api.tech.redventures.com.br/orders';
const state = {
  broth: 0,
  meat: 0
}
// Chave de autentificaçao da api
const headers = {
  'x-api-key': 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf',
  'Content-Type': 'application/json',
};
// Função para listar caldos
async function fetchBroths() {
  try {
    const response = await fetch(brothsUrl, { headers });
    if (response.ok) {
      const broths = await response.json();
      const wapperBroth = document.querySelector('#slider-wapper-broth');
      // document.addEventListener
      creatItem(wapperBroth, broths);
    } else {
      console.error('Erro ao listar caldos:', response.status);
    }
  } catch (error) {
    console.error('Erro ao listar caldos:', error);
  }
}
fetchBroths();

async function fetchProteins() {
  try {
    const response = await fetch(proteinsUrl, { headers });
    if (response.ok) {
      const proteins = await response.json();
      const wapperMeat = document.querySelector('#slider-wapper-meat');
      creatItem(wapperMeat, proteins)
    } else {
      console.error('Erro ao listar caldos:', response.status);
    }
  } catch (error) {
    console.error('Erro ao listar caldos:', error);
  }
}

fetchProteins();


// Função para criar cada item 

function creatItem(wapperBroth, broths) {
  broths.forEach((item) => {
    const divItem = document.createElement('div');
    divItem.setAttribute('class', 'item');
    divItem.setAttribute('id', item.id);
    const imgInative = document.createElement('img');
    imgInative.setAttribute('src', item.imageInactive);
    imgInative.setAttribute('alt', item.name);
    divItem.appendChild(imgInative);

    const titleFood = document.createElement('h3');
    titleFood.setAttribute('class', 'title-food');
    titleFood.textContent = item.name;
    divItem.appendChild(titleFood);
    const descriptionFood = document.createElement('p');
    descriptionFood.setAttribute('class', 'description-food');
    descriptionFood.textContent = item.description;
    divItem.appendChild(descriptionFood);
    const priceFood = document.createElement('p');
    priceFood.setAttribute('class', 'price-food');
    priceFood.textContent = `US$ ${item.price}`;
    divItem.appendChild(priceFood);
    
    
    divItem.addEventListener('click', () => {
      // divItem.style.borderRadius = '10px';
      const divs = wapperBroth.querySelectorAll('.item');
      const itemId = divItem.getAttribute("id")
      const slide = wapperBroth.getAttribute("data-slider")


      Array.from(divs).forEach((div) => div.classList.remove('hover-item'));
      divItem.classList.add('hover-item');
      imgInative.setAttribute('src', item.imageActive);

      state[slide] = itemId
      checkSlider()
    });
    wapperBroth.appendChild(divItem);
  });
}
// Funçao para pegar os cliques
function checkSlider() {
  const btnOrder = document.querySelector(".btn-order")
  if(state.broth && state.meat) {
    btnOrder.removeAttribute("disabled")
    // Aqui vou fazer o post
    btnOrder.addEventListener('click', function(event) {
      event.stopPropagation()
    
      console.log(state)
    })
  } else {
    btnOrder.setAttribute("disabled", true)
  }
 
}
// Depois desses dados fazer o post com os ids retornados 