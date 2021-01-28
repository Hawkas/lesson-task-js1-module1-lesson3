const product = [
  {
    name: "Fancy Product",
    price: 99,
    onSale: true,
  },
];
const out = document.querySelector("div.container");
for (let item of product) {
  let innerContainer = document.createElement("div");
  innerContainer.classList.add("product");
  let prodName = document.createElement("h2");
  let priceTag = document.createElement("p");
  let price = "n/a";
  prodName.innerHTML = item.name;
  if (item.price) {
    price = item.price;
  }
  priceTag.innerHTML = "Price: " + price;
  if (item.onSale) {
    prodName.style.textDecoration = "underline";
  }
  innerContainer.innerHTML = prodName.outerHTML + priceTag.outerHTML;
  out.innerHTML += innerContainer.outerHTML;
}
