
// Questa per ora la definiamo qua, in futuro la leggeremo dal serve, da un database...
let productsList = [
  { name: 'Scarpe da golf', price: 99.99, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmojehmen.com%2Fwp-content%2Fuploads%2F2019%2F09%2FGolf-shoe_2-1600x1000.jpg&f=1&nofb=1&ipt=4f06d1b9d07e00d60a8a1ab79eb51db28fdb0b52c3a486ff2702c06a22d00d50&ipo=images" },
  { name: 'Scarpe da trekking', price: 49.99, image: "https://gloimg.drlcdn.com/L/pdm-provider-img/straight-product-img/20190311/T038416/T0384160033/source-img/115640-8384.jpg" },
  { name: 'Scarpe da trekking', price: 132, image: "https://gloimg.drlcdn.com/L/pdm-provider-img/straight-product-img/20190311/T038416/T0384160033/source-img/115640-8384.jpg" },
  { name: 'Scarpe da trekking', price: 123, image: "https://gloimg.drlcdn.com/L/pdm-provider-img/straight-product-img/20190311/T038416/T0384160033/source-img/115640-8384.jpg" },
  { name: 'Scarpe da golf', price: 120, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmojehmen.com%2Fwp-content%2Fuploads%2F2019%2F09%2FGolf-shoe_2-1600x1000.jpg&f=1&nofb=1&ipt=4f06d1b9d07e00d60a8a1ab79eb51db28fdb0b52c3a486ff2702c06a22d00d50&ipo=images" },
]
// Ma comunque avrò sempre in mano una lista di oggetti!

function visualizeProducts() {
  // Per prima cosa, svuoto la div che contiene i prodotti.
  // Così, tutte le volte che chiamo questa funzione, cioè, a ogni
  // ricerca dell'utente, visualizzerò solo i prodotti che corrispondono alla ricerca.
  document.getElementById('product-list').innerHTML = ''

  // 1) Per ogni elemento della lista dei prodotti...
  for (let index = 0; index < productsList.length; index++) {
    const product = productsList[index];

    // Prendo quello che ha scritto l'utente nella ricerca
    let searchQuery = document.getElementById("product-search").value

    if (product.name.includes(searchQuery)) { // Se è contenuto nel nome del prodotto

      // Allora aggiungo una div per quel prodotto
      let productDiv = `
      <div class="card product-card">
        <img
          src="${product.image}"
          class="card-img-top"
          alt="${product.name}"
        >
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}</p>
          <a href="#" class="btn btn-primary"><i class="bi bi-cart-plus-fill"></i></a>
        </div>
      </div>`

      document.getElementById('product-list').innerHTML += productDiv
    }

    // SE AVESSIMO VOLUTO USARE LE UTILITIES DI DOCUMENT PER CREARE I TAG...
    // Vedi il codice seguente...
    // È un po' verboso come approccio.
    // Questo è quello che Angular e/o React e/o Vue vi aiuteranno a fare.

    // Creo la card
    // let productDiv = document.createElement('div')
    // productDiv.classList.add('card')
    // productDiv.classList.add('product-card')

    // // Creo l'immagine e la aggiungo alla card
    // let productDivImg = document.createElement('img')
    // productDivImg.src = product.image
    // productDiv.appendChild(productDivImg)

    // let cardBody = document.createElement('div')
    // cardBody.classList.add('card-body')
    // productDiv.appendChild(cardBody)

    // let cardTitle = document.createElement('h5')
    // cardTitle.classList.add('card-title')
    // cardTitle.innerHTML = product.name
    // cardBody.appendChild(cardTitle)

    // Etc.

    // document.getElementById('product-list').appendChild(productDiv)
  }

  // // Stessa cosa:
  // for (let product of productsList) {

  // }
}


window.onload = function () { // Funzione definita direttamente in linea
  // All'interno di questa funzione faccio tutto quello che voglio che succeda
  // appena la pagina viene caricata
  visualizeProducts()

  // E  altre cose che voglio che succedano onload...
}
