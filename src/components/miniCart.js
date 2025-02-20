let miniCart = (item, num) => {
  return `  <div class="flex justify-between border-b border-[#ced4da] pb-3">
              <div class="flex space-x-4">
                <img src="./assets/${item.img}" width="100" alt="" />
                <div class="flex flex-col space-y-2">
                  <div class="flex items-center space-x-3">
                    <span id="nameProduct" class="font-bold text-xl">${
                      item.name
                    }</span>
                    <span
                      class="text-white w-fit h-[23px] px-2 rounded-lg bg-[#212529]"
                      >$${item.price}</span
                    >
                  </div>
                  <div id="butns-quantity" class="space-x-1">
                    <button id="decremment" onclick="decrement(${item.id})">
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
                    <span data-id="${
                      item.id
                    }" class="qauntity text-[18px]">${num}</span>
                    <button id="increment" onclick="increment(${item.id})">
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
                  <span id="t-price-order" class="font-bold text-lg">$${
                    item.price * num
                  }</span>
                </div>
              </div>
              <button class="close" onclick="removeItem(${item.id})">
                <svg
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6l-5.6 5.6Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>`;
};
export default miniCart;
