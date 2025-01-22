import "./style.css";
import showProduct from "./components/displayProduct";
const shop = document.getElementById("shop");

function increment() {
  console.log("increment");
}

function decrement() {
  console.log("decrement");
}
const getData = () => {
  return fetch("Data.json");
};
getData().then(async (res) => {
  let data = await res.json();
  shop.innerHTML = data
    .map((item) => {
      return showProduct(item);
    })
    .join("");
});

const update = () => {};
getData();
