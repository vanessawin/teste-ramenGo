// Endpoints da API
const brothsUrl = 'https://api.tech.redventures.com.br/broths';
const proteinsUrl = 'https://api.tech.redventures.com.br/proteins';
const ordersUrl = 'https://api.tech.redventures.com.br/orders';

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
        // Efeito hover
        divItem.addEventListener('mouseover', () => {
          divItem.style.borderRadius = '10px';
          imgInative.setAttribute('src', item.imageActive);
          divItem.style.backgroundColor = '#1820EF';
          titleFood.style.color = ' #FFFFFF';
          descriptionFood.style.color = '#FFFFFF';
          priceFood.style.color = '#FFC024';
        });
        divItem.addEventListener('mouseout', () => {
          imgInative.setAttribute('src', item.imageInactive);
          divItem.style.backgroundColor = '#FFFFFF';
          titleFood.style.color = ' #1820EF';
          descriptionFood.style.color = '#000000';
          priceFood.style.color = '#FF4E42';
          divItem.style.borderRadius = '0';
        });

        wapperBroth.appendChild(divItem);
        return wapperBroth;
      });
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
      proteins.forEach((item) => {
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
        // Efeito hover
        divItem.addEventListener('mouseover', () => {
          divItem.style.borderRadius = '10px';
          imgInative.setAttribute('src', item.imageActive);
          divItem.style.backgroundColor = '#1820EF';
          titleFood.style.color = ' #FFFFFF';
          descriptionFood.style.color = '#FFFFFF';
          priceFood.style.color = '#FFC024';
        });
        divItem.addEventListener('mouseout', () => {
          imgInative.setAttribute('src', item.imageInactive);
          divItem.style.backgroundColor = '#FFFFFF';
          titleFood.style.color = ' #1820EF';
          descriptionFood.style.color = '#000000';
          priceFood.style.color = '#FF4E42';
          divItem.style.borderRadius = '0';
        });
        wapperMeat.appendChild(divItem);
        return wapperMeat;
      });
    } else {
      console.error('Erro ao listar caldos:', response.status);
    }
  } catch (error) {
    console.error('Erro ao listar caldos:', error);
  }
}

fetchProteins();
