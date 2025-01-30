import "./style.css";
let Basket = JSON.parse(localStorage.getItem("data")) || [];
let calculater = () => {
  let numOfOrders = document.getElementById("num-of-order");
  numOfOrders.innerHTML = Basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculater();
