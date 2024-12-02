//PRODUCTS
const products = [
    //jackets
    {
        id:"jacket-01",
        tittle: "Jacket 01",
        img:"https://dl.dropboxusercontent.com/scl/fi/85t9kyjpf8uxr0kkra180/Leonardo_Kino_XL_hazme_4_imagenes_de_modelos_mujeres_posando_c_0.jpg?rlkey=7mbgoz0cr3x69y5zvazqszaym&st=pgv4srbd&dl=0",
        category: {
            nameItem: "Jacket",
            id: "jacket"
        },
        price: 1000
    },
    {
        id:"jacket-02",
        tittle: "Jacket 02",
        img:"https://dl.dropboxusercontent.com/scl/fi/cs6ynesvlo7eoe2b31sqy/Leonardo_Kino_XL_hazme_4_imagenes_de_modelos_mujeres_posando_c_3.jpg?rlkey=j6dgza8ampm4m5scmqco6xen5&st=py11ncqo&dl=0",
        category: {
            nameItem: "Jacket",
            id: "jacket"
        },
        price: 1000
    },
    {
        id:"jacket-03",
        tittle: "Jacket 03",
        img:"https://dl.dropboxusercontent.com/scl/fi/fxa7fkr3vf3ecmoqv7mt3/Leonardo_Kino_XL_Make_me_4_images_of_female_models_posing_with_2.jpg?rlkey=dd1fsfd7iqf66mbnl96erit5z&st=lw3apsx2&dl=0",
        category: {
            nameItem: "Jacket",
            id: "jacket"
        },
        price: 1000
    },
    {
        id:"jacket-04",
        tittle: "Jacket 04",
        img:"https://dl.dropboxusercontent.com/scl/fi/x4hmmuumgdxo0nbdse6ql/Leonardo_Kino_XL_Make_me_4_images_of_female_models_posing_with_3.jpg?rlkey=uvciessbgokogvav3dr2t1meq&st=l0v7jmp1&dl=0",
        category: {
            nameItem: "Jacket",
            id: "jacket"
        },
        price: 1000
    },
    //Jeans
    {
        id:"jean-01",
        tittle: "Jean 01",
        img:"https://dl.dropboxusercontent.com/scl/fi/3cchtnieogfx9rsy84cuw/pants-04.jpg?rlkey=5sub965yazkw6i00hz97fn5ec&st=ml6cer0a&dl=0",
        category: {
            nameItem: "Jeans",
            id: "jeans"
        },
        price: 1000
    },
    {
        id:"jean-02",
        tittle: "Jean 02",
        img:"https://dl.dropboxusercontent.com/scl/fi/6nzhrv13g3dsszjhhjbx5/pants-01.jpg?rlkey=wxywlmj6de7au4saf4c44myh8&st=glf4tknc&dl=0",
        category: {
            nameItem: "Jeans",
            id: "jeans"
        },
        price: 1000
    },
    {
        id:"jean-03",
        tittle: "Jean 03",
        img:"https://dl.dropboxusercontent.com/scl/fi/23uycop0p373xjhvcvi64/pants-02.jpg?rlkey=qybiywzh59lsv9e79qkcsopie&st=cythutdh&dl=0",
        category: {
            nameItem: "Jeans",
            id: "jeans"
        },
        price: 1000
    },
    {
        id:"jean-04",
        tittle: "Jean 04",
        img:"https://dl.dropboxusercontent.com/scl/fi/vn5qv8kgbmuyh84ikhjo4/pants-03.jpg?rlkey=hyv97cxf8yqj96qlf8w962idb&st=svoimlax&dl=0",
        category: {
            nameItem: "Jeans",
            id: "jeans"
        },
        price: 1000
    },
    //Shorts
    {
        id:"short-01",
        tittle: "Short 01",
        img:"https://dl.dropboxusercontent.com/scl/fi/e2zvjmgfwifz4fp64vt82/short-01.jpg?rlkey=tqxixd236mmda54vey8hoq0wl&st=55j0aho8&dl=0",
        category: {
            nameItem: "Short",
            id: "short"
        },
        price: 1000
    },
    {
        id:"short-02",
        tittle: "Short 02",
        img:"https://dl.dropboxusercontent.com/scl/fi/l4g5qq5h8uhe38k8x51ml/short-02.jpg?rlkey=tc23xt128d9sbj05cp9zq93p8&st=sob71abq&dl=0",
        category: {
            nameItem: "Short",
            id: "short"
        },
        price: 1000
    },
    {
        id:"short-03",
        tittle: "Short 03",
        img:"https://dl.dropboxusercontent.com/scl/fi/gsmdok6d4a20xdmee4ro4/short-03.jpg?rlkey=zuhhde8jynns56bvc46c8y5to&st=bsybxtrv&dl=0",
        category: {
            nameItem: "Short",
            id: "short"
        },
        price: 1000
    },
    {
        id:"short-04",
        tittle: "Short 04",
        img:"https://dl.dropboxusercontent.com/scl/fi/qekk20vgo2uk4kh8y9i9q/short-04.jpg?rlkey=dpkt21pg0nq984c3oa1uulijy&st=1ztvja2n&dl=0",
        category: {
            nameItem: "Short",
            id: "short"
        },
        price: 1000
    },
    //Shirts
    {
        id:"shirt-01",
        tittle: "Shirt 01",
        img:"https://dl.dropboxusercontent.com/scl/fi/kv6nf8bawzj6nxvdufg0c/shirt-01.jpg?rlkey=kfqgl5yuaxehtz9t3buym3rdv&st=bjt8j2no&dl=0",
        category: {
            nameItem: "Shirt",
            id: "shirt"
        },
        price: 1000
    },
    {
        id:"shirt-02",
        tittle: "Shirt 02",
        img:"https://dl.dropboxusercontent.com/scl/fi/tr7b2upy1l5hh9eb5o0xs/shirt-02.jpg?rlkey=acoxo9864lte2h20pspqni05d&st=gsl0atgb&dl=0",
        category: {
            nameItem: "Shirt",
            id: "shirt"
        },
        price: 1000
    },
    {
        id:"shirt-03",
        tittle: "Shirt 03",
        img:"https://dl.dropboxusercontent.com/scl/fi/qkswfmnjk9cune0j4fiv8/shirt-03.jpg?rlkey=hcmb2r7882sx3j5w7o6agzl6r&st=ivz7odlb&dl=0",
        category: {
            nameItem: "Shirt",
            id: "shirt"
        },
        price: 1000
    },
    {
        id:"shirt-04",
        tittle: "Shirt 04",
        img:"https://dl.dropboxusercontent.com/scl/fi/5n0dxegs9m0zw1yd090xm/shirt-04.jpg?rlkey=wz8bkct7bn818c0hhvu9q0n9w&st=pdaz8byo&dl=0",
        category: {
            nameItem: "Shirt",
            id: "shirt"
        },
        price: 1000
    },
]

//call products to inner in the html

const containerProducts = document.querySelector("#container-products");
const categoryButtons = document.querySelectorAll(".button-category");
const principalTitle = document.querySelector("#principal-tittle");
let addButtons = document.querySelectorAll(".product-add");
const numberSc = document.querySelector("#number-sc");

//funcion para llamar los productos del array al html

const chargeProducts = (productsActive)=>{
    containerProducts.innerHTML = "";
    productsActive.forEach(product=>{
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
        <img class="product-img" src="${product.img}" alt="${product.tittle}">
        <div class="product-details">
        <h3 class="product-tittle">${product.tittle}</h3>
        <p class="product-price">$${product.price}</p>
        <button class="product-add" id="${product.id}"><i class="bi bi-cart-plus-fill"></i></button>
        </div>
        `
        containerProducts.append(div)
    })

}
chargeProducts(products);

//funcion para mantener activo el estilo de "active" en solo 1 categoria

categoryButtons.forEach(button => {
    button.addEventListener("click", (e) =>{
        categoryButtons.forEach(button => button.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if(e.currentTarget.id != "all"){
            const productCategory = products.find(product => product.category.id === e.currentTarget.id)
            principalTitle.innerText = productCategory.category.nameItem;

            const productActive = products.filter(product => product.category.id === e.currentTarget.id);
            chargeProducts(productActive);
        }else{
        principalTitle.innerText = "All products";
        chargeProducts(products);
        }
    })
})


//funcion agregar productos


const updateAddButtons=()=>{
    addButtons = document.querySelectorAll(".product-add")
    addButtons.forEach(button =>{
        button.addEventListener("click", addToSc)
    })
}

let productOnSc;
let productOnScLs = localStorage.getItem("items-on-sc");

if(productOnScLs){
    productOnSc = JSON.parse(productOnScLs);
    updateNumber();
}else{
    productOnSc = [];

}
function agregarAlCarrito(e) {

    Toastify({
        text: "Product added",
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
    const addedProducts = products.find(product => product.id === idButton);

    if(productOnSc.some(product => product.id === idButton)) {
        const index = productOnSc.findIndex(product => product.id === idButton);
        productosEnCarrito[index].cantidad++;
    } else {
        addedProducts.quantity = 1;
        productOnSc.push(addedProducts);
    }

    updateNumber();

    localStorage.setItem("items-on-sc", JSON.stringify(productOnSc));
}

const updateNumber =()=>{
    let littleNumber = productOnSc.reduce((acc, product) => acc + product.quantity, 0)
    numberSc.innerText = littleNumber
}