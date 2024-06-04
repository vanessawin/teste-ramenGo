// Endpoints da API
const brothsUrl = "https://api.tech.redventures.com.br/broths";
const proteinsUrl = "https://api.tech.redventures.com.br/proteins";
const ordersUrl = "https://api.tech.redventures.com.br/orders";

// Chave de autentificaçao da api
const headers = {
  "x-api-key": "ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf",
  "Content-Type": "application/json"
};
// Função para listar caldos
async function fetchBroths() {
  try {
      const response = await fetch(brothsUrl, { headers });
      if (response.ok) {
          const broths = await response.json();
          console.log("broths", broths);
          const wapperBroth = document.querySelector("#slider-wapper-broth")
          console.log("slider-wapper-broth", wapperBroth)
          broths.forEach(item => {
        
          const divItem = document.createElement('div');
               divItem.setAttribute("class", "item" )
                 divItem.setAttribute("id", item.id )
          const imgInative = document.createElement('img'); 
          imgInative.setAttribute("src", item.imageInactive );
          imgInative.setAttribute("alt", item.name ); 
          divItem.appendChild(imgInative);

          const titleFood = document.createElement('h3')
          titleFood.setAttribute("class", "title-food" ); 
          titleFood.textContent = item.name;
          divItem.appendChild(titleFood);
          const descriptionFood = document.createElement('p');
          descriptionFood.setAttribute("class", "description-food");
          descriptionFood.textContent = item.description;
          divItem.appendChild(descriptionFood);
          const priceFood= document.createElement('p');
          priceFood.setAttribute("class", "price-food");
      priceFood.textContent = `US$ ${item.price}`;
      divItem.appendChild(priceFood);
      wapperBroth.appendChild(divItem)
              return wapperBroth
                });
   } else {
          console.error("Erro ao listar caldos:", response.status);
      }
  } catch (error) {
      console.error("Erro ao listar caldos:", error);
  }
}
fetchBroths()
 

async function fetchProteins() {
  try {
      const response = await fetch(proteinsUrl, { headers });
      if (response.ok) {
          const proteins = await response.json();
          console.log("proteins", proteins);
          const wapperMeat = document.querySelector("#slider-wapper-meat")
          console.log("slider-wapper-meat", wapperMeat)
          proteins.forEach(item => {
        
          const divItem = document.createElement('div');
               divItem.setAttribute("class", "item" )
                 divItem.setAttribute("id", item.id )
          const imgInative = document.createElement('img'); 
          imgInative.setAttribute("src", item.imageInactive );
          imgInative.setAttribute("alt", item.name ); 
          divItem.appendChild(imgInative);

          const titleFood = document.createElement('h3')
          titleFood.setAttribute("class", "title-food" ); 
          titleFood.textContent = item.name;
          divItem.appendChild(titleFood);
          const descriptionFood = document.createElement('p');
          descriptionFood.setAttribute("class", "description-food");
          descriptionFood.textContent = item.description;
          divItem.appendChild(descriptionFood);
          const priceFood= document.createElement('p');
          priceFood.setAttribute("class", "price-food");
      priceFood.textContent = `US$ ${item.price}`;
      divItem.appendChild(priceFood);
      wapperMeat.appendChild(divItem)
              return wapperMeat
                });
   } else {
          console.error("Erro ao listar caldos:", response.status);
      }
  } catch (error) {
      console.error("Erro ao listar caldos:", error);
  }
}


fetchProteins()

