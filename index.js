function search(results) {
  const contenedor = document.querySelector(".card-conteiner");
  const templateEl = document.querySelector("#content__template");

  for (const r of results) {
    const imgEl = templateEl.content.querySelector(".product-img");
    imgEl.src = r.thumbnail;

    const titleEl = templateEl.content.querySelector(".product-title");
    titleEl.textContent = r.title;
    titleEl.href = r.permalink;

    const priceEl = templateEl.content.querySelector(".product-price");
    priceEl.textContent = r.price;

    const countNumberEl = templateEl.content.querySelector(".product-quantity");
    countNumberEl.textContent = r.sold_quantity;

    const clone = document.importNode(templateEl.content, true);
    contenedor.appendChild(clone);
  }
}
function main() {
  const button = document.querySelector(".get-product");
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let value3 = Math.floor(Math.random() * 10);
    const card = document.querySelector(".card-conteiner");
    card.innerHTML = `
        <template id="content__template">
        <div class="card-content">
        <img class="product-img" src="images/image-equilibrium.jpg" />
  
        <div class="product-description">
          <h1 class="product-title">Equilibrium #3429</h1>
          <p class="product-detail">
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>
  
        <div class="product-status">
          <h2 class="product-price">0.041 ETH</h2>
          <h2 class="product-quantity">3 days left</h2>
        </div>
        <br />
        <div class="product-attribution">
          <img
            src="./images/image-avatar.jpg"
            alt="foto-avatar"
            class="attribution-img"
          />
          <p>
            Challenge and coded by
            <a class="attribution-a" href="https://github.com/ghiglionemag"> Agus</a>.
          </p>
        </div>
      </div>
        </template>
        `;

    fetch("https://api.mercadolibre.com/sites/MLA/search?q="+ value3 + "&limit=1")
      .then((response) => response.json())
      .then((data) => search(data.results));
  });
}
main();
