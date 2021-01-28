const products = [
  {
    name: "Fancy Product",
    price: 40,
    soldOut: true,
  },
  {
    name: "Another Product",
    soldOut: false,
  },
  {
    name: "Cheap Product",
    price: 10,
    soldOut: true,
  },
];
const out = document.querySelector("div.container");
for (let product of products) {
  let innerContainer = document.createElement("div");
  innerContainer.classList.add("product");
  let prodName = document.createElement("h2");
  let priceTag = document.createElement("p");
  let price = "n/a";
  prodName.innerHTML = product.name;
  if (product.price) {
    price = product.price;
  }
  priceTag.innerHTML = "Price: " + price;
  if (product.soldOut) {
    prodName.style.color = "red";
  } else {
    prodName.style.color = "green";
  }
  innerContainer.innerHTML = prodName.outerHTML + priceTag.outerHTML;
  out.innerHTML += innerContainer.outerHTML;
}
