import "./style.css";
import showProduct from "./components/displayProduct";
const shop = document.getElementById("shop");
let Basket = JSON.parse(localStorage.getItem("data")) || [];
function increment(id) {
  let selectItem = id;
  let search = Basket.find((x) => x.id === selectItem.id);
  if (!search) {
    Basket.push({
      id: selectItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(Basket));
  update(selectItem.id);
}
function decrement(id) {
  let selectItem = id;
  let search = Basket.find((x) => x.id === selectItem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectItem.id);
  Basket = Basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(Basket));
}
function update(id) {
  let search = Basket.find((x) => x.id === id);
  document.getElementById(`${id}`).innerHTML = search.item;
  calculater();
}
let calculater = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = Basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  if (cartIcon.textContent === "0") {
    cartIcon.classList.add("hidden");
  } else {
    cartIcon.classList.remove("hidden");
  }
};
const getData = () => {
  return fetch("Data.json");
};
getData().then(async (res) => {
  let data = await res.json();
  shop.innerHTML = data
    .map((item) => {
      let search = Basket.find((x) => x.id === item.id) || [];
      return showProduct(item, search);
    })
    .join("");
});
calculater();
window.increment = increment;
window.decrement = decrement;
//
