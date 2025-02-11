import "./style.css";
import ItemsCart from "./components/ItemsCart";
let Basket = JSON.parse(localStorage.getItem("data")) || [];
let label = document.getElementById("num-of-order");
let shoppingCart = document.getElementById("menu");
const total_price = document.querySelector(".total-price");
//
function increment(id) {
  let selectItem = id;
  let search = Basket.find((x) => x.id === selectItem.id);
  generateCartItems();
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
  generateCartItems();
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
  TotalAmount();
}
function removeItem(id) {
  let selectItem = id;
  Basket = Basket.filter((x) => x.id !== selectItem.id);
  generateCartItems();
  TotalAmount();
  calculater();
  localStorage.setItem("data", JSON.stringify(Basket));
}
let calculater = () => {
  let numOfOrders = document.getElementById("num-of-order");
  numOfOrders.innerHTML = Basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
let TotalAmount = () => {
  if (Basket.length !== 0) {
    fetch("../Data.json").then(async (res) => {
      const data = await res.json();
      let amount = Basket.map((x) => {
        let { id, item } = x;
        let search = data.find((order) => order.id === id) || [];
        return item * search.price;
      }).reduce((x, y) => x + y, 0);
      total_price.innerHTML = `$${amount}`;
    });
  } else {
    total_price.innerHTML = `$0`;
  }
};
let ClearCart = () => {
  Basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(Basket));
  calculater();
  TotalAmount();
};
//
TotalAmount();
let generateCartItems = () => {
  if (Basket.length === 1) {
    shoppingCart.classList.add("h-full");
  }
  if (Basket.length > 1) {
    shoppingCart.classList.add("h-[450px]");
  }
  if (Basket.length !== 0) {
    fetch("../Data.json").then(async (res) => {
      const data = await res.json();
      return (shoppingCart.innerHTML = Basket.map((x) => {
        let { id, item } = x;
        let search = data.find((order) => order.id === id) || [];
        return ItemsCart(search, item);
      }).join(""));
    });
  } else {
    label.innerHTML = `0`;
    shoppingCart.innerHTML = `Empty`;
    shoppingCart.style.fontSize = "30px";
    shoppingCart.style.color = "gray";
    shoppingCart.classList.remove("border-[2px]", "overflow-y-scroll");
  }
};
calculater();
generateCartItems();
window.increment = increment;
window.decrement = decrement;
window.removeItem = removeItem;
window.ClearCart = ClearCart;
