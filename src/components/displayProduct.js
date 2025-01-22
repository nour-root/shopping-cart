const showProduct = (product) => {
  return ` <div id="${product.id}"
        class="item text-left border-[1.5px] border-solid rounded-md border-[#495057] overflow-hidden"
      >
        <img src="/assets/${product.img}" alt="" />
        <div class="details p-2 space-y-4 py-4 px-3">
          <h3 class="font-bold text-xl">${product.name}</h3>
          <p>${product.desc}</p>
          <div class="price-quantity flex justify-between">
            <b class="text-xl">$${product.price}</b>
            <div class="buttons flex items-center space-x-2">
              <button type="button" onclick="decrement()" class="decrement">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-dash-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                  />
                </svg>
              </button>
              <div id=${product.id} class="qauntity text-[18px]">0</div>
              <button type="button" onclick="increment()" class="increment">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>`;
};
export default showProduct;
