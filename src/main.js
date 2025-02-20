import showProduct from "./components/displayProduct";
import ItemsCart from "./components/ItemsCart";
import miniCart from "./components/miniCart";
const shop = document.getElementById("shop");
let Basket = JSON.parse(localStorage.getItem("data")) || [];
//
// let label = document.getElementById("num-of-order");
// let shoppingCart = document.getElementById("menu");
// const total_price = document.querySelector(".total-price");
//
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
  let cartIcon = document.querySelector("#cartAmount");
  // let cart_Icon_num = document.querySelector("#i-Amount");
  // label.innerHTML = Basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  // cart_Icon_num.innerHTML = Basket.map((x) => x.item).reduce(
  //   (x, y) => x + y,
  //   0
  // );
  cartIcon.innerHTML = Basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  if (cartIcon.innerHTML === "0") {
    cartIcon.classList.add("hidden");
    // cart_Icon_num.classList.add("hidden");
  } else {
    cartIcon.classList.remove("hidden");
    // cart_Icon_num.classList.remove("hidden");
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
// let ShowModal = (id) => {
//   let container_modal = document.getElementById(`${id}`);
//   let modal_window = document.getElementById("modalWindow");
//   container_modal.style.display = "block";
//   document.body.style.position = "fixed";
//   modal_window.style.transform = "scaleY(1)";
//   modal_window.style.transition = "all .5s ease";
// };
// let hideModal = (id) => {
//   let container_modal = document.getElementById(`${id}`);
//   let modal_window = document.getElementById("modalWindow");
//   container_modal.style.display = "none";
//   document.body.style.position = "relative";
//   modal_window.style.transform = "scaleY(0)";
//   modal_window.style.transition = "all .6s ease";
// };
//
// let generateCartItems = () => {
//   if (Basket.length === 1) {
//     shoppingCart.classList.add("h-full");
//   }
//   if (Basket.length > 1) {
//     shoppingCart.classList.add("h-[450px]");
//   }
//   if (Basket.length > 0) {
//     fetch("../Data.json").then(async (res) => {
//       const data = await res.json();
//       return (shoppingCart.innerHTML = Basket.map((x) => {
//         let { id, item } = x;
//         let search = data.find((order) => order.id === id) || [];
//         return miniCart(search, item);
//       }).join(""));
//     });
//   } else {
//     label.innerHTML = `0`;
//     shoppingCart.innerHTML = `Empty`;
//     shoppingCart.style.fontSize = "30px";
//     shoppingCart.style.color = "gray";
//     shoppingCart.classList.remove("border-[2px]", "overflow-y-scroll");
//   }
// };
// let TotalAmount = () => {
//   if (Basket.length !== 0) {
//     fetch("../Data.json").then(async (res) => {
//       const data = await res.json();
//       let amount = Basket.map((x) => {
//         let { id, item } = x;
//         let search = data.find((order) => order.id === id) || [];
//         return item * search.price;
//       }).reduce((x, y) => x + y, 0);
//       total_price.innerHTML = `$${amount}`;
//     });
//   } else {
//     total_price.innerHTML = `$0`;
//   }
// };
// generateCartItems();
// TotalAmount();
calculater();
window.increment = increment;
window.decrement = decrement;
// window.ShowModal = ShowModal;
// window.hideModal = hideModal;
//
