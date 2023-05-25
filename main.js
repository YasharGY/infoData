

function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.width = '18rem';

  card.innerHTML = `
    <img class="card-img-top" src="./images/${product.Image}" alt="Card image cap">
    <div class="card-body">
      <h3>${product.name}</h3>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p>Price: $${product.price}</p>
    </div>
  `;

  card.addEventListener('click', () => {
    window.location.href = `/product.html?id=${product.id}`;
  });

  return card;
}

function renderProducts() {
  const cardContainer = document.querySelector('.card-container');
  products.forEach((product) => {
    const productCard = createProductCard(product);
    cardContainer.appendChild(productCard);
  });
}

renderProducts();
