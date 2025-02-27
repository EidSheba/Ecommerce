// start variable catogery nav to click on it 
let catogeryNav = document.querySelector(".catogery-nav");
let list_nav = document.querySelector(".catogery-nav-list");
let slider = document.querySelector(".slider")

catogeryNav.addEventListener('click', function () {
    list_nav.classList.toggle("show");
    slider.classList.toggle("index")
});

// start card 
  let close_cart = document.querySelector(".close_cart");
    let cartIcon = document.querySelector(".cart-shop");
    let cart = document.querySelector(".cart");
// open item cards 
cartIcon.addEventListener("click", function () {
    cart.classList.add("active")
    
 });
//    close item cards 
 close_cart.addEventListener("click", function () {
     cart.classList.remove("active")
     
    
 });
 


fetch("products.json")
    .then(response => response.json()) // Change Response to response
    .then(data => {
        const allButtons = document.querySelectorAll(".btn-add-cart")
        allButtons.forEach(button =>
        {
            button.addEventListener("click", (event) => {
                const productID = event.target.getAttribute("data-id")  //       to get the id     
                const selectedProduct = data.find(product => product.id == productID) // check if the product whick i clicke on is the same with id
                addToCart(selectedProduct)
                const AllBtns = document.querySelectorAll(`.btn-add-cart[data-id="${productID}"]`)
                AllBtns.forEach(btn => {
                    btn.classList.add("active")
                    btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Item in cart`
                })
            }
            )
        }
        )
    })
  
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [] // convert json to JS
    cart.push({ ...product, quantity: 1 }) 
    localStorage.setItem("cart", JSON.stringify(cart)) // set cart in local storge 
    updateCart()
}
function updateCart() {
    const cartItems = document.querySelector("#Cart_items")
    const cart = JSON.parse(localStorage.getItem("cart")) || []

    const checkout_items = document.getElementById("checkout_items")

    //   if(checkout_items){
    //     checkout_items.innerHTML=""

    //     items_input.value = "";
    //     total_Price_input.value = "";
    //     count_Items_input.value = "";
    // }
     var allPrice = 0;
        var allCount = 0;
   
    
        cartItems.innerHTML =""
    cart.forEach((item, index) =>
    {
             const totalForItem = item.price * item.quantity;
        allPrice += totalForItem;
        allCount += item.quantity
       
        cartItems.innerHTML += `
        <div class="item_cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name} </h4>
                    <p class="price_cart">$${item.price * item.quantity}</p>
                    <div class="quantity_control">
                        <button class="decrease" data-index=${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase data-index=" data-index=${index}>+</button>
                    </div>
                </div>
                <button class="delete_item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
            </div>`
        if (checkout_items) {

            //

             checkout_items.innerHTML += `
            <div class="item_cart">

                            <div class="image_name">
                                <img src="${item.img}" alt="">

                                <div class="content">
                                    <h4>${item.name}</h4>
                                    <p class="price_cart">$${item.price * item.quantity}</p>
                                    <div class="quantity_control">
                                        <button class="decrease_quantity"  data-index=${index}>-</button>
                                        <span class="quantity">${item.quantity}</span>
                                        <button class="Increase_quantity"  data-index=${index}>+</button>
                                    </div>
                                </div>
                            </div>


                            <button class="delete_item" data-inex="${index}"><i class="fa-solid fa-trash-can"></i></button>



                        </div>
            
            `
            //
            
        }
    })
    // increase and decrease 
     if(checkout_items){
        const subtotal_checkout = document.querySelector(".subtotal_checkout")
        const total_checkout = document.querySelector(".total_checkout")

        subtotal_checkout.innerHTML= `$ ${allPrice}`
        total_checkout.innerHTML= `$ ${allPrice + 20}`
    }
    
    const decrease = document.querySelectorAll(".decrease")
    const increase = document.querySelectorAll(".increase")

    // total and counter 
    const count_item_cart = document.querySelector(".count_item_cart")
    const price_cart_total = document.querySelector(".price_cart_total")
    const count_item_header = document.querySelector(".count-item-header")
    price_cart_total.innerHTML = `$${allPrice}`
    count_item_cart.innerHTML = `${allCount}`
    count_item_header.innerHTML = `${allCount}`

    // increase and decrease functions 
    increase.forEach(button =>
    {
        button.addEventListener("click", (event) => {
            const increaseIndex = event.target.getAttribute("data-index")
            increasefunc(increaseIndex)
        }
        )} )

    decrease.forEach(button =>
    {
        button.addEventListener("click", (event) => {
            const increaseIndex = event.target.getAttribute("data-index")
            decreaseFunc(increaseIndex)
        }
        )} )
    const deleteItems = document.querySelectorAll(".delete_item")   
    deleteItems.forEach(delBtn => {
        delBtn.addEventListener("click", (event) => {
            const indexItem = event.target.closest("button").getAttribute('data-index')
            removeFromCart(indexItem)
        })
    })
}
function increasefunc(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart[index].quantity += 1
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
}
function decreaseFunc(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    if(cart[index].quantity > 1)
    { cart[index].quantity -= 1 }
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
}
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const removeProduct = cart.splice(index, 1)[0]
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
        changeState(removeProduct.id)
    }
function changeState(productID) {
    const everyBtn = document.querySelectorAll(`.btn-add-cart[data-id="${productID}"]`)
    everyBtn.forEach(myBtn =>
    {
        myBtn.classList.remove("active")
        myBtn.innerHTML =`<i class="fa-solid fa-cart-shopping"></i>add to cart`
    }
    )
     
 }
updateCart()
const boxToBig = document.querySelectorAll(".banner-2-img .box")
window.addEventListener('scroll', function() {
    if (window.scrollY > 750) {
        boxToBig.forEach(box =>
            box.classList.add("big")
        )
    }

});
const scaler = document.querySelectorAll(".banners_4 .container .box")
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        scaler.forEach(el =>
            el.classList.add("scaler")
        )
    }
});

const bannerThreeImages = document.querySelectorAll(".banner-3-img .box")
window.addEventListener('scroll', function() {
    if (window.scrollY > 2100) {
        console.log("MORE")
        bannerThreeImages.forEach(el =>
            el.classList.add("removeScale")
        )
    }
});

