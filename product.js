const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

const product = products.find((x) => x.id === id);

if (product) {
  const productCard = createProductCard(product);
  const container = document.querySelector('.container');
  container.appendChild(productCard);
} else {
  console.log('Product not found.');
}