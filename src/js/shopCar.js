let productOnSc = localStorage.getItem("items-on-sc");
itemsOnLs = JSON.parse(itemsOnLs);

const containerEmptySc = document.querySelector("#empty-sc");
const containerProductsSc = document.querySelector("#sc-products");
const containerActionsSc = document.querySelector("#sc-actions");
const containerBuySc = document.querySelector("#buyed-sc");
let deleteButton = document.querySelectorAll(".sc-product-delete");
const cleanButton = document.querySelector("#clean-sc");
const containerTotal = document.querySelector("#total");
const buyButton = document.querySelector("#buy-sc");


function chargeProductOnSc() {
    if (productOnSc && productOnSc.length > 0) {

        containerEmptySc.classList.add("disabled");
        containerProductsSc.classList.remove("disabled");
        containerActionsSc.classList.remove("disabled");
        containerBuySc.classList.add("disabled");
    
        containerProductsSc.innerHTML = "";
    
        productOnSc.forEach(product => {
    
            const div = document.createElement("div");
            div.classList.add("sc-products");
            div.innerHTML = `
                <img class="sc-product-img" src="${product.img}" alt="${product.title}">
                <div class="sc-product-tittle">
                    <small>Título</small>
                    <h3>${product.title}</h3>
                </div>
                <div class="sc-product-quantity">
                    <small>Quantity</small>
                    <p>${product.quantity}</p>
                </div>
                <div class="sc-product-price">
                    <small>Price</small>
                    <p>$${product.price}</p>
                </div>
                <div class="sc-product-subTotal">
                    <small>Subtotal</small>
                    <p>$${product.price * product.quantity}</p>
                </div>
                <button class="sc-product-delete" id="${product.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            containerProductsSc.append(div);
        })
    
    updateDeleteButton();
    updateTotal();
	
    } else {
        containerEmptySc.classList.remove("disabled");
        containerProductsSc.classList.add("disabled");
        containerActionsSc.classList.add("disabled");
        containerBuySc.classList.add("disabled");
    }

}

chargeProductOnSc();

function updateDeleteButton() {
    deleteButton = document.querySelectorAll(".sc-product-delete");

    deleteButton.forEach(button => {
        button.addEventListener("click", deleteSc);
    });
}

function deleteOfSc(e) {
    Toastify({
        text: "Deleted product",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
          },
        onClick: function(){} 
      }).showToast();

    const idButton = e.currentTarget.id;
    const index = productOnSc.findIndex(product => product.id === idButton);
    
    productOnSc.splice(index, 1);
    chargeProductOnSc();

    localStorage.setItem("items-on-sc", JSON.stringify(productOnSc));

}

cleanButton.addEventListener("click", cleanSc);
function cleanSc() {

    Swal.fire({
        title: 'are you shure?',
        icon: 'question',
        html: `You will delete ${productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} products.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            productOnSc.length = 0;
            localStorage.setItem("items-on-sc", JSON.stringify(productOnSc));
            chargeProductOnSc();
        }
      })
}


function updateTotal() {
    const calculatedTotal = productOnSc.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    total.innerText = `$${calculatedTotal}`;
}

buyButton.addEventListener("click", buySc);
function buySc() {

    productOnSc.length = 0;
    localStorage.setItem("items-on-sc", JSON.stringify(productOnSc));
    
    containerEmptySc.classList.add("disabled");
    containerProductsSc.classList.add("disabled");
    containerActionsSc.classList.add("disabled");
    containerBuySc.classList.remove("disabled");;

}